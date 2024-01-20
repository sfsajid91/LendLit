import prisma from '@/lib/prisma';
import type { Adapter } from '@auth/core/adapters';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const prismaAdapter: Adapter = {
    ...PrismaAdapter(prisma),
    createUser: (data) => {
        const { email, name, image } = data;

        return prisma.user.create({
            data: {
                email,
                image,
                name: name as string,
            },
        });
    },
};
