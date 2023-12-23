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
            <div className="max-h-dvh w-full overflow-y-auto">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
