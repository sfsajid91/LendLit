'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '@/provider/CartProvider';
import type { BookType } from '@/types/book';
import clsx from 'clsx';
import { LuHeart } from 'react-icons/lu';

export default function AddCart({
    book,
    type,
    simplified,
}: {
    book: BookType;
    type: 'buy' | 'rent';
    simplified?: boolean;
}) {
    const { dispatch, state } = useCart();

    const cart = type === 'buy' ? state.buyCart : state.rentCart;

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                type,
                book,
            },
        });
    };

    return (
        <div
            className={cn('flex w-full items-center', {
                'gap-4 md:gap-8': !simplified,
            })}
        >
            <Button
                className={clsx('', {
                    'rounded-full border-primary hover:bg-primary hover:text-white':
                        simplified,
                })}
                onClick={handleAddToCart}
                variant={simplified ? 'outline' : 'default'}
                title={simplified ? 'Quick Add' : 'Add to Cart'}
                size="lg"
                disabled={
                    (cart.find((item) => item.id === book.id)?.quantity || 0) >=
                    book.stock
                }
            >
                {simplified ? 'Quick Add' : 'Add to Cart'}
            </Button>
            <Button
                variant="secondary"
                className={cn(
                    'border-primary transition hover:bg-primary hover:text-white',
                    {
                        'rounded-full': simplified,
                    }
                )}
                size="icon"
                title="Add to Favorites"
            >
                <LuHeart className="text-2xl" />
            </Button>
        </div>
    );
}
