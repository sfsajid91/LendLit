import type { BookType } from '@/types/book';
import React from 'react';

export type CartItem = BookType & { quantity: number };

export type CartState = {
    buyCart: CartItem[];
    rentCart: CartItem[];
    total: number;
    quantity: number;
};

export type CartAction =
    | {
          type: 'ADD_TO_CART';
          payload: {
              type: 'buy' | 'rent';
              book: BookType;
          };
      }
    | {
          type: 'REMOVE_FROM_CART';
          payload: {
              id: string;
              type: 'buy' | 'rent';
          };
      }
    | { type: 'CLEAR_CART' }
    | { type: 'UPDATE_CART'; payload: CartState }
    | {
          type: 'DELETE_FROM_CART';
          payload: { id: string; type: 'buy' | 'rent' };
      };

export type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};
