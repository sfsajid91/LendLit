import Logo from '@/ui/Logo';
import React from 'react';

export default function VerificationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-dvh items-center px-4 py-8">
            <main className="mx-auto flex w-full flex-col items-center rounded p-4 shadow md:w-96">
                <Logo
                    containerClass="justify-center mb-4"
                    className="text-4xl"
                />

                {children}
            </main>
        </div>
    );
}
