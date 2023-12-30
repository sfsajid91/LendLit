'use client';

import { useCart } from '@/provider/CartProvider';
import CartItem from '@/ui/cart/CartItem';
import CartCheckout from './CartCheckout';

export default function CartItemsList() {
    const {
        state: { buyCart, rentCart },
    } = useCart();

    return (
        <div className="mt-8 space-y-8">
            {buyCart.length > 0 && (
                <div className="rounded shadow *:px-2 *:py-2">
                    <h2 className="border-b font-semibold text-gray-900">
                        Buying Cart
                    </h2>

                    <ul className="space-y-4">
                        {buyCart.map((book) => (
                            <CartItem key={book.id} book={book} type="buy" />
                        ))}
                    </ul>

                    <CartCheckout
                        subtotal={buyCart.reduce(
                            (acc, book) => acc + book.sellPrice * book.quantity,
                            0
                        )}
                        shipping={5 * buyCart.length}
                        type="buy"
                    />
                </div>
            )}

            {rentCart.length > 0 && (
                <div className="rounded shadow *:px-2 *:py-2">
                    <h2 className="border-b font-semibold text-gray-900">
                        Rent Cart
                    </h2>
                    <ul className="space-y-4">
                        {rentCart.map((book) => (
                            <CartItem key={book.id} book={book} type="rent" />
                        ))}
                    </ul>

                    <CartCheckout
                        subtotal={rentCart.reduce(
                            (acc, book) => acc + book.rentPrice * book.quantity,
                            0
                        )}
                        shipping={5 * rentCart.length}
                        type="rent"
                    />
                </div>
            )}
        </div>
    );
}
