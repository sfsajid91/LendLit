import { Sparkles } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Logo() {
    return (
        <div className="flex items-center">
            <Sparkles className="mr-2 size-6 text-primary" />
            <h1
                className={`text-3xl font-extrabold tracking-tight lg:text-4xl ${playfair.className}`}
            >
                <span className="text-accent">Lend</span>
                <span className="text-primary">Lit</span>
            </h1>
        </div>
    );
}
