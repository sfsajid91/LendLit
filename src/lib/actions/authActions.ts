'use server';

import type { SignupSchemaType } from '@/lib/schema/signupSchema';
import { signupSchema } from '@/lib/schema/signupSchema';

import type { SigninSchemaType } from '@/lib/schema/signinSchema';
import { signinSchema } from '@/lib/schema/signinSchema';

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
};
