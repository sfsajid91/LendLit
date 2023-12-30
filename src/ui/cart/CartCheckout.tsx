export default function CartCheckout({
    type,
    subtotal,
    shipping,
}: {
    type: 'buy' | 'rent';
    subtotal: number;
    shipping: number;
}) {
    return (
        <div className="flex justify-end border-t">
            <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>${subtotal}</dd>
                    </div>

                    <div className="flex justify-between">
                        <dt>Shipping</dt>
                        <dd>${shipping}</dd>
                    </div>

                    {/* <div className="flex justify-between">
                        <dt>Discount</dt>
                        <dd>-£20</dd>
                    </div> */}

                    {type === 'rent' && (
                        <div className="flex justify-between !text-base font-medium">
                            <dt>Monthly</dt>
                            <dd>${subtotal}</dd>
                        </div>
                    )}

                    <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>${shipping + subtotal}</dd>
                    </div>
                </dl>

                <div className="flex justify-end">
                    <a
                        href="#"
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                        Checkout
                    </a>
                </div>
            </div>
        </div>
    );
}
