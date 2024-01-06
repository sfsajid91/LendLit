import Logo from '@/ui/Logo';
import GoogleSignin from '@/ui/forms/GoogleSignin';
import React from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-dvh items-center px-4 py-8">
            <main className="mx-auto w-full rounded p-4 shadow md:w-96">
                <Logo
                    containerClass="justify-center mb-4"
                    className="text-4xl"
                />
                {children}

                <GoogleSignin />
            </main>
        </div>
    );
}
