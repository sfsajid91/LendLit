import prisma from '@/lib/prisma';

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await prisma.verificationToken.findUnique({
            where: { token },
        });

        return verificationToken;
    } catch {
        return null;
    }
};

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await prisma.verificationToken.findFirst({
            where: { email },
        });

        return verificationToken;
    } catch {
        return null;
    }
};

export const getValidVerificationToken = async (token: string) => {
    const currentTime = new Date();

    const verificationToken = await prisma.verificationToken.findFirst({
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

    return verificationToken;
};

export const getValidVerificationTokenByEmail = async (email: string) => {
    const currentTime = new Date();

    const verificationToken = await prisma.verificationToken.findFirst({
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

    return verificationToken;
};
