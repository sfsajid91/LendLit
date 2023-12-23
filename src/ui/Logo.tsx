import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Logo({
    className,
    iconClass,
}: {
    className?: string;
    iconClass?: string;
}) {
    return (
        <div className="flex items-center" title="Logo">
            <Sparkles className={cn('mr-2 size-6 text-primary', iconClass)} />
            <h1
                className={cn(
                    'text-3xl font-extrabold tracking-tight lg:text-4xl',
                    playfair.className,
                    className
                )}
            >
                <span className="text-accent">Lend</span>
                <span className="text-primary">Lit</span>
            </h1>
        </div>
    );
}
