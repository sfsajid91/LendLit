import prisma from '@/lib/prisma';

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        const passwordResetToken = await prisma.passwordResetToken.findUnique({
            where: { token },
        });

        return passwordResetToken;
    } catch {
        return null;
    }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        const passwordResetToken = await prisma.passwordResetToken.findFirst({
            where: { email },
        });

        return passwordResetToken;
    } catch {
        return null;
    }
};

export const getValidPasswordResetToken = async (token: string) => {
    const currentTime = new Date();

    const passwordResetToken = await prisma.passwordResetToken.findFirst({
        where: {
            token,
            expires: {
                gt: currentTime,
            },
        },
        include: {
            user: true,
        },
    });

    return passwordResetToken;
};

export const getValidPasswordResetTokenByEmail = async (email: string) => {
    const currentTime = new Date();

    const passwordResetToken = await prisma.passwordResetToken.findFirst({
        where: {
            email,
            expires: {
                gt: currentTime,
            },
        },
        include: {
            user: true,
        },
    });

    return passwordResetToken;
};
