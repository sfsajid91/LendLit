import { Sheet, SheetContent } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinks } from '../Sidebar/Sidebar';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SideDrawer({ isOpen = false, onClose }: Props) {
    const pathname = usePathname();

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="left">
                {
                    <nav className="px-4 py-8 md:px-8">
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
                }
            </SheetContent>
        </Sheet>
    );
}
