'use client';

import { cn } from '@/lib/utils';
import {
    BookOpen,
    Home,
    LayoutGrid,
    Library,
    Shield,
    Truck,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'Books', href: '/store', icon: BookOpen },
    { title: 'Sell or Lend', href: '/store/sell-lend', icon: Library },
    { title: 'Track Order', href: '/store/track-order', icon: Truck },
    { title: 'About', href: '/store/about', icon: LayoutGrid },
    { title: 'Admin', href: '/store/store/admin', icon: Shield },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden h-dvh border-r px-4 pt-4 md:block md:w-48 lg:w-60 lg:px-8">
            {/* <Logo /> */}
            {/* <Separator className="my-4" /> */}
            <nav>
                <ul className="space-y-4">
                    {NavLinks.map(({ title, href, icon: Icon }) => (
                        <li key={title}>
                            <Link
                                href={href}
                                className={cn(
                                    'flex items-center rounded px-4 py-2 text-sm font-medium text-gray-700 duration-300 hover:bg-secondary hover:text-gray-900',
                                    {
                                        'bg-secondary text-gray-900':
                                            pathname === href,
                                    }
                                )}
                            >
                                <Icon className="mr-2 size-6" />
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
