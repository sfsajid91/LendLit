'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/provider/CartProvider';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { LuLogOut, LuShoppingCart, LuUser } from 'react-icons/lu';
import Logo from '../Logo';
import SideDrawer from '../SideDrawer/SideDrawer';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const {
        state: { quantity },
    } = useCart();

    return (
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between bg-white bg-opacity-70 px-4 py-2 shadow backdrop-blur-sm md:mx-4">
                <div className="flex gap-1">
                    <Button
                        className="md:hidden"
                        variant="icon"
                        onClick={() => setIsOpen(true)}
                    >
                        <HiOutlineMenuAlt2 className="text-2xl" />
                    </Button>

                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Button
                        size="icon"
                        className="relative text-2xl"
                        variant="icon"
                        title="Cart"
                        asChild
                    >
                        <Link href="/store/cart">
                            <LuShoppingCart />
                            {quantity > 0 && (
                                <h3 className="absolute -top-1 right-0 size-4 rounded-full bg-primary text-center text-xs text-white">
                                    {quantity > 99 ? '99+' : quantity}
                                </h3>
                            )}
                        </Link>
                    </Button>
                    <Button
                        size="icon"
                        className="text-2xl max-sm:hidden"
                        variant="icon"
                        title="User"
                    >
                        <LuUser />
                    </Button>
                    <form>
                        <Button
                            size="icon"
                            variant="icon"
                            type="submit"
                            title="Logout"
                            className="text-2xl"
                        >
                            <LuLogOut />
                        </Button>
                    </form>
                </div>
            </nav>
            <SideDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
