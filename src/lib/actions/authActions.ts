'use server';

import type { SignupSchemaType } from '@/lib/schema/signupSchema';
import { signupSchema } from '@/lib/schema/signupSchema';

import { signIn, signOut } from '@/auth';
import { sendVerificationEmail } from '@/lib/emails/email';
import prisma from '@/lib/prisma';
import type { SigninSchemaType } from '@/lib/schema/signinSchema';
import { signinSchema } from '@/lib/schema/signinSchema';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';

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

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const { error } = await sendVerificationEmail(name, email);

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
