import heroBg from '@/../public/home/hero-bg.png';
import heroImage from '@/../public/home/hero-image.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo';

export default function Hero() {
    return (
        <main className="relative flex h-screen flex-col items-center justify-center px-4 py-16 md:flex-row md:justify-between lg:px-16 lg:py-20">
            <div className="z-20">
                <Logo className="text-4xl lg:text-5xl" iconClass="size-10" />
                <p className="leading-7 text-slate-300">
                    Explore, Share, Thrive. Your Hub for Book Adventures!
                </p>
                <Button asChild className="mt-4">
                    <Link href="/store">Get Started</Link>
                </Button>
            </div>
            <div className="z-20 hidden md:block">
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    width={300}
                    height={300}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>

            <Image
                src={heroBg}
                alt="Hero Background Image"
                placeholder="blur"
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
            <div className="absolute inset-0 z-10 bg-fourth/50 backdrop-brightness-50" />
        </main>
    );
}
