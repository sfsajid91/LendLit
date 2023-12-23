export type BookType = {
    id: string;
    title: string;
    description: string;
    author: string;
    cover: string;
    genre: string;
    pages: number;
    isRented: boolean;
    stock: number;
    rentPrice: number;
    sellPrice: number;
    sold: number;
    ISBN: string;
    renterIds?: string[];
};
