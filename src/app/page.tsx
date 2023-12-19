import { Button } from '@/components/ui/button';
import Image from 'next/image';
import heroBg from '../../public/home/hero-bg.png';
import heroImage from '../../public/home/hero-image.svg';

export default function Hero() {
    return (
        <main className="relative flex items-center justify-between px-4 py-16 lg:px-16 lg:py-20">
            <div className="z-20">
                <h1 className="text-4xl font-extrabold tracking-tight text-accent lg:text-5xl">
                    LendLit
                </h1>
                <p className="leading-7 text-slate-300">
                    Explore, Share, Thrive. Your Hub for Book Adventures!
                </p>
                <Button variant="default" className="mt-4">
                    Get Started
                </Button>
            </div>
            <div className="z-20 hidden md:block">
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    // placeholder="blur"
                    width={300}
                    height={300}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* <div className="absolute top-0 min-h-screen"> */}
            <Image
                src={heroBg}
                alt="Hero Background Image"
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
            <div className="absolute inset-0 z-10 bg-fourth/50 backdrop-brightness-50" />
            {/* </div> */}
        </main>
    );
}
