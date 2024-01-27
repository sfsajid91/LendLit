import { Button } from '@/components/ui/button';
import Logo from '@/ui/Logo';
import { Suspense } from 'react';
import Verify from './verify';

type EmailVerificationPageProps = {
    searchParams: {
        token: string;
    };
};

export default function EmailVerificationPage({
    searchParams: { token },
}: EmailVerificationPageProps) {
    return (
        <div className="flex min-h-dvh items-center px-4 py-8">
            <main className="mx-auto flex w-full flex-col items-center rounded p-4 shadow md:w-96">
                <Logo
                    containerClass="justify-center mb-4"
                    className="text-4xl"
                />
                {token && (
                    <Suspense
                        fallback={<Button loading>Verifying Email</Button>}
                    >
                        <Verify token={token} />
                    </Suspense>
                )}

                {!token && (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">
                            Invalid Verification Link
                        </h1>
                        <p className="mt-2">
                            The verification link you clicked is invalid or has
                            expired.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
