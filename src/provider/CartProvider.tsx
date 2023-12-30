'use client';

/* eslint-disable no-case-declarations */
import type { CartAction, CartContextType, CartState } from '@/types/cart';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

const defaultState: CartState = {
    buyCart: [],
    rentCart: [],
    total: 0,
    quantity: 0,
};

const CartContext = createContext<CartContextType>({
    state: defaultState,
    dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
    const { buyCart, rentCart, total, quantity } = state;
    switch (action.type) {
        case ADD_TO_CART: {
            const {
                payload: { type, book },
            } = action;

            const cart = type === 'buy' ? buyCart : rentCart;

            if (book.stock <= 0) return state;

            const existingItem = cart.find((item) => item.id === book.id);

            if (existingItem) {
                if (existingItem.quantity >= book.stock) return state;
                const updatedCart = cart.map((item) => {
                    if (item.id === book.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });

                return {
                    ...state,
                    [`${type}Cart`]: updatedCart,
                    total:
                        total +
                        (type === 'buy' ? book.sellPrice : book.rentPrice),
                    quantity: quantity + 1,
                };
            }
            return {
                ...state,
                [`${type}Cart`]: [...cart, { ...book, quantity: 1 }],
                total:
                    total + (type === 'buy' ? book.sellPrice : book.rentPrice),
                quantity: quantity + 1,
            };
        }

        case DELETE_FROM_CART: {
            const {
                payload: { id, type },
            } = action;
            const cart = type === 'buy' ? buyCart : rentCart;

            const itemToRemove = cart.find((item) => item.id === id);

            if (itemToRemove) {
                const updatedCart = cart.filter((item) => item.id !== id);

                // total price of the item to be removed
                const subTotal =
                    itemToRemove.quantity *
                    (type === 'buy'
                        ? itemToRemove.sellPrice
                        : itemToRemove.rentPrice);

                return {
                    ...state,
                    [`${type}Cart`]: updatedCart,
                    total: total - subTotal,
                    quantity: quantity - itemToRemove.quantity,
                };
            }
            return state;
        }

        case REMOVE_FROM_CART: {
            const {
                payload: { type, id },
            } = action;

            const cart = type === 'buy' ? buyCart : rentCart;

            const itemToRemove = cart.find((item) => item.id === id);

            if (itemToRemove) {
                const updatedCart =
                    itemToRemove.quantity > 1
                        ? cart.map((item) => {
                              if (item.id === id) {
                                  return {
                                      ...item,
                                      quantity: item.quantity - 1,
                                  };
                              }
                              return item;
                          })
                        : cart.filter((item) => item.id !== id);

                const subTotal =
                    type === 'buy'
                        ? itemToRemove.sellPrice
                        : itemToRemove.rentPrice;

                return {
                    ...state,
                    [`${type}Cart`]: updatedCart,
                    total: total - subTotal,
                    quantity: quantity - 1,
                };
            }
            return state;
        }

        case CLEAR_CART:
            return defaultState;

        case UPDATE_CART: {
            const { payload } = action;
            return {
                ...state,
                ...payload,
            };
        }

        default:
            return state;
    }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, defaultState);

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            dispatch({ type: UPDATE_CART, payload: JSON.parse(cart) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart: () => CartContextType = () => useContext(CartContext);

export const clearCart: () => CartAction = () => ({ type: CLEAR_CART });

export { CartProvider };
