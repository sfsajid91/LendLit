import VerificationEmail from '@/lib/emails/templates/verification-email';
import { resend } from '@/lib/resend';
import { generateVerificationToken } from '@/lib/token';

export const sendVerificationEmail = async (
    name: string,
    email: string
    // token: string
) => {
    const { token: verificationToken } = await generateVerificationToken(
        email,
        true
    );
    const verificationUrl =
        `${process.env.AUTH_URL}/verify-email?token=${verificationToken.token}` as string;

    const EmailTemplate = VerificationEmail({
        verificationUrl,
        name: 'sajid',
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
