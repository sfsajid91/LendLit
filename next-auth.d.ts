/* eslint-disable no-unused-vars */

import type { Role } from '@prisma/client';
import type { DefaultSession } from 'next-auth';

export type ExtendedSessionUser = DefaultSession['user'] & {
    role: Role;
};

declare module 'next-auth' {
    interface Session {
        user: ExtendedSessionUser;
    }

    interface User {
        role: Role;
    }
}
