'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { LuLogOut, LuShoppingCart, LuUser } from 'react-icons/lu';
import Logo from '../Logo';
import SideDrawer from '../SideDrawer/SideDrawer';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 flex items-center justify-between bg-white bg-opacity-70 px-4 py-2 shadow backdrop-blur-sm md:mx-4">
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
                        className="text-2xl"
                        variant="icon"
                        title="Cart"
                    >
                        <LuShoppingCart />
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
