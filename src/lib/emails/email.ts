import PasswordResetEmail from '@/lib/emails/templates/passwordreset-email';
import VerificationEmail from '@/lib/emails/templates/verification-email';
import { resend } from '@/lib/resend';
import {
    generatePasswordResetToken,
    generateVerificationToken,
} from '@/lib/token';

export const sendVerificationEmail = async (
    name: string,
    email: string,
    userId: string
    // token: string
) => {
    const { token: verificationToken } = await generateVerificationToken(
        email,
        userId,
        true
    );
    const verificationUrl = `${
        process.env.AUTH_URL || 'http://' + process.env.VERCEL_URL
    }/verify?token=${verificationToken.token}` as string;

    const EmailTemplate = VerificationEmail({
        verificationUrl,
        name,
    });

    const from = `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`;

    const { error } = await resend.emails.send({
        from,
        to: email,
        subject: 'Verify your email address',
        react: EmailTemplate,
    });

    if (error) {
        return {
            error,
            success: false,
        };
    }

    return {
        success: true,
        error: null,
    };
};

export const sendPasswordResetEmail = async (
    name: string,
    email: string,
    userId: string
    // token: string
) => {
    const { token: verificationToken } = await generatePasswordResetToken(
        email,
        userId,
        true
    );
    const verificationUrl = `${
        process.env.AUTH_URL || 'http://' + process.env.VERCEL_URL
    }/reset-password?token=${verificationToken.token}` as string;

    const EmailTemplate = PasswordResetEmail({
        verificationUrl,
        name,
    });

    const from = `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`;

    const { error } = await resend.emails.send({
        from,
        to: email,
        subject: 'Reset your password',
        react: EmailTemplate,
    });

    if (error) {
        return {
            error,
            success: false,
        };
    }

    return {
        success: true,
        error: null,
    };
};
