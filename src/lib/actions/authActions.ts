'use server';

import { signIn, signOut } from '@/auth';
import { getValidPasswordResetTokenByEmail } from '@/lib/data/passwordreset-token';
import { getUserByEmail } from '@/lib/data/user';
import {
    sendPasswordResetEmail,
    sendVerificationEmail,
} from '@/lib/emails/email';
import prisma from '@/lib/prisma';
import { emailSchema, type EmailSchemaType } from '@/lib/schema/emailSchema';
import {
    passwordSchema,
    type PasswordSchemaType,
} from '@/lib/schema/passwordSchema';
import { signinSchema, type SigninSchemaType } from '@/lib/schema/signinSchema';
import { signupSchema, type SignupSchemaType } from '@/lib/schema/signupSchema';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';

type ResetPasswordType = PasswordSchemaType & {
    email: string;
};

export const signupAction = async (data: SignupSchemaType) => {
    const validation = signupSchema.safeParse(data);

    if (!validation.success) {
        return {
            errors: validation.error.issues.map((issue) => ({
                field: issue.path[0],
                message: issue.message,
            })),
        };
    }

    const { name, email, password } = validation.data;

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return {
            errors: [
                {
                    field: 'email',
                    message: 'User already exists with this email.',
                },
            ],
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const { error } = await sendVerificationEmail(name, email, user.id);

    if (error) {
        return {
            success: false,
            message: 'Something went wrong.',
        };
    }

    return {
        success: true,
        message: 'Check your email for verification link.',
    };
};

export const signinAction = async (data: SigninSchemaType) => {
    const validation = signinSchema.safeParse(data);

    if (!validation.success) {
        return {
            errors: validation.error.issues.map((issue) => ({
                field: issue.path[0],
                message: issue.message,
            })),
        };
    }

    const generateErrorResponse = (error: string, all: boolean = true) => {
        const errors = [
            {
                field: 'email',
                message: error,
            },
        ];
        if (all) {
            errors.push({
                field: 'password',
                message: error,
            });
        }
        return {
            errors,
        };
    };

    try {
        await signIn('credentials', validation.data);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return generateErrorResponse('Invalid credentials.');
                case 'AuthorizedCallbackError':
                    return generateErrorResponse('Email not verified.', false);
                default:
                    return generateErrorResponse('Something went wrong.');
            }
        }
        throw error;
    }
};

export const signoutAction = async () => {
    await signOut();
};

export const forgotPasswordAction = async (data: EmailSchemaType) => {
    //TODO: Add a rate limiter in future

    const validation = emailSchema.safeParse(data);

    if (!validation.success) {
        return {
            errors: validation.error.flatten().fieldErrors,
        };
    }

    const { email } = validation.data;

    const user = await getUserByEmail(email);

    if (user) {
        const existingToken = await getValidPasswordResetTokenByEmail(email);
        if (!existingToken) {
            const { error } = await sendPasswordResetEmail(
                user.name,
                email,
                user.id
            );

            if (error) {
                return {
                    success: false,
                    message: 'Something went wrong.',
                };
            }
        }
    }

    return {
        success: true,
        message: 'Check your email and follow the instructions.',
    };
};

export const resetPasswordAction = async (data: ResetPasswordType) => {
    const validation = passwordSchema.safeParse(data);

    if (!validation.success) {
        return {
            errors: validation.error.issues.map((issue) => ({
                field: issue.path[0],
                message: issue.message,
            })),
        };
    }

    // Additional validation to prevent invalid token
    const dataValidation = signinSchema.safeParse(data);

    if (!dataValidation.success) {
        return {
            success: false,
            message: 'Something went wrong.',
        };
    }

    const { email, password } = dataValidation.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                password: hashedPassword,
            },
        });

        // Delete all password reset tokens for this user
        await prisma.passwordResetToken.deleteMany({
            where: {
                email,
            },
        });
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong.',
        };
    }

    return {
        success: true,
        message: 'Password reset successfully you can login now.',
    };
};
