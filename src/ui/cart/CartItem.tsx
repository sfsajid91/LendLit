'use client';

import { Button } from '@/components/ui/button';
import shimmerPlaceholder from '@/lib/shimmer';
import { useCart } from '@/provider/CartProvider';
import type { CartItem as CartItemTypes } from '@/types/cart';
import Image from 'next/image';
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';

export default function CartItem({
    book,
    type,
}: {
    book: CartItemTypes;
    type: 'buy' | 'rent';
}) {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { type, book } });
    };

    const removeFromCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { type, id: book.id } });
    };

    const deleteFromCart = () => {
        dispatch({ type: 'DELETE_FROM_CART', payload: { type, id: book.id } });
    };

    return (
        <li className="flex gap-4">
            <Image
                src={book.cover}
                alt={book.title}
                placeholder={shimmerPlaceholder(64, 64)}
                width={64}
                height={64}
                style={{
                    width: '64px',
                    height: 'auto',
                }}
                className="rounded object-cover"
            />

            <div>
                <h3 className="text-sm text-gray-900">{book.title}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                        <dt className="inline">Author: </dt>
                        <dd className="inline">{book.author}</dd>
                    </div>

                    <div>
                        <dt className="inline">Price: </dt>
                        <dd className="inline">
                            $
                            {type === 'buy'
                                ? book.sellPrice
                                : `${book.rentPrice}/mo`}
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-1">
                <Button
                    variant="icon"
                    size="icon"
                    title="Remove book"
                    onClick={removeFromCart}
                    disabled={book.quantity <= 1}
                >
                    <HiOutlineMinus className="text-base" />
                </Button>

                <input
                    type="number"
                    disabled
                    className="w-10 rounded border bg-slate-100 text-center text-gray-700"
                    value={book.quantity}
                />

                <Button
                    variant="icon"
                    size="icon"
                    title="Add book"
                    onClick={addToCart}
                    disabled={book.quantity >= book.stock}
                >
                    <HiOutlinePlus className="text-base" />
                </Button>

                <Button
                    variant="icon"
                    size="icon"
                    title="Delete from Cart"
                    onClick={deleteFromCart}
                >
                    <HiOutlineTrash className="text-base" />
                </Button>
            </div>
        </li>
    );
}
