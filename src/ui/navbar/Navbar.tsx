import { Button } from '@/components/ui/button';
import { LogOut, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import Logo from '../Logo';

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center justify-between bg-white bg-opacity-70 px-4 py-2 shadow backdrop-blur-sm md:mx-4">
            <Link href="/">
                <Logo />
            </Link>
            <div className="flex gap-2">
                <Button size="icon" variant="icon">
                    <ShoppingCart />
                </Button>

                <Button size="icon" className="max-sm:hidden" variant="icon">
                    <User />
                </Button>

                <form>
                    <Button size="icon" variant="icon" type="submit">
                        <LogOut />
                    </Button>
                </form>
            </div>
        </nav>
    );
}
