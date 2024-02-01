import { CartProvider } from '@/provider/CartProvider';
import Sidebar from '@/ui/Sidebar/Sidebar';
import Navbar from '@/ui/navbar/Navbar';
import React from 'react';

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex max-h-screen overflow-hidden overflow-y-auto">
            <Sidebar />
            <CartProvider>
                <div className="max-h-dvh w-full overflow-y-auto">
                    <Navbar />
                    <main className="px-4 py-8">{children}</main>
                </div>
            </CartProvider>
        </div>
    );
}
