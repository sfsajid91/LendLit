import { BookType } from '@/types/book';

// eslint-disable-next-line no-unused-vars
const users = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        name: 'Maria Com Com',
        email: 'mcomcom@hitmail.com',
        image_url: '/users/maria-com-com.jpg',
    },
    {
        id: 'd0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a',
        name: 'José da Silva',
        email: 'josedasilva@gmail.com',
        image_url: '/users/joao-da-silva.jpg',
    },
];

const books: BookType[] = [
    {
        id: 'e0cdfaa6-ceee-4dd9-bfc6-cbcfeceffa8a',
        title: 'The Great Gatsby',
        description:
            "The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner's Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
        author: 'F. Scott Fitzgerald',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642164/lendlit/books/rcowf1uvszlmzr0ovtlh.jpg',
        genre: 'Novel',
        pages: 256,
        isRented: false,
        stock: 34,
        rentPrice: 24,
        sellPrice: 230,
        sold: 12,
        ISBN: '1-86092-049-7',
    },
    {
        id: 'e0cdfaa6-deee-4dd8-bfe6-cbcfereffapb',
        title: 'To Kill a Mockingbird',
        description:
            "To Kill a Mockingbird is a novel by Harper Lee, published in 1960. It explores issues of racism, morality, and the innocence of childhood. The story is set in the fictional town of Maycomb, Alabama, during the Great Depression, and it follows the Finch family's struggles and challenges.",
        author: 'Harper Lee',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642164/lendlit/books/rcowf1uvszlmzr0ovtlh.jpg',
        genre: 'Classic',
        pages: 336,
        isRented: false,
        stock: 25,
        rentPrice: 18,
        sellPrice: 180,
        sold: 8,
        ISBN: '1-86092-061-6',
    },
    {
        id: 'e0cdfaa6-deee-4dd8-bfe6-cbcfeceffa8b',
        title: 'To Kill a Mockingbird',
        description:
            'To Kill a Mockingbird is a novel by Harper Lee, published in 1960. It is widely considered one of the greatest American novels. The story is set in the fictional town of Maycomb, Alabama, during the Great Depression, and it explores themes of racial injustice and moral growth.',
        author: 'Harper Lee',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642163/lendlit/books/m9x1vc0nodqktgilqslk.jpg',
        genre: 'Classic',
        pages: 336,
        isRented: true,
        stock: 20,
        rentPrice: 18,
        sellPrice: 200,
        sold: 8,
        ISBN: '1-86092-050-5',
    },

    {
        id: 'e0cdfaa6-dffe-4dd8-bfe6-cbcfeceffa8a',
        title: 'Murder!',
        description:
            'Stories in the Travelman Short Stories series take the reader to places of mystery, fantasy, horror, romance, and corners of the universe yet unexplored.',
        author: 'Arnold Bennett',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642163/lendlit/books/m9x1vc0nodqktgilqslk.jpg',
        genre: 'Crime',
        pages: 198,
        isRented: true,
        stock: 7,
        rentPrice: 15,
        sellPrice: 120,
        sold: 10,
        ISBN: '1-86092-050-3',
        renterIds: ['d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa'],
    },
    {
        id: 'e0cdfaa6-aeee-4dd9-bfe6-cbcfeceffa8a',
        title: "Alice's Adventures in Wonderland",
        description:
            "Alice's Adventures in Wonderland (commonly Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll, a mathematics don at Oxford University. It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures.",
        author: 'Lewis Carroll',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642164/lendlit/books/u89ndrgaqquhuspcgslw.jpg',
        genre: 'Children',
        pages: 128,
        isRented: false,
        stock: 12,
        rentPrice: 10,
        sellPrice: 100,
        sold: 15,
        ISBN: '1-86092-051-X',
    },
    {
        id: 'e0cdfaa6-aeee-4dd9-bfe6-mmcfeceffa8a',
        title: 'Pride and Prejudice',
        description:
            'Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.',
        author: 'Jane Austen',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642164/lendlit/books/aaknjh3gdboidhdjdjxx.jpg',
        genre: 'Classic',
        pages: 280,
        isRented: false,
        stock: 20,
        rentPrice: 15,
        sellPrice: 120,
        sold: 10,
        ISBN: '1-86092-052-8',
    },
    {
        id: 'e0cdfaa6-veee-4dd9-bfe6-cbcfeceffa8a',
        title: 'War and Peace',
        description:
            "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment;",
        author: 'Leo Tolstoy',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642163/lendlit/books/uliva7t1hxrnlndwuiu1.jpg',
        genre: 'Historical Fiction',
        pages: 928,
        isRented: false,
        stock: 15,
        rentPrice: 20,
        sellPrice: 250,
        sold: 10,
        ISBN: '1-86092-053-6',
    },
    {
        id: 'e0cdfaa6-beee-4dd9-fffd-cbcfeceffa8b',
        title: 'The Man',
        description:
            'The story of a brilliant man whose unflinching dedication to independence of thought and transparency in business sparked an entire industry--and whose personal tribulations humbled and strengthened him.\n\n Through it all, Alfred Best remained the eternal optimist.',
        author: 'AM Best',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642163/lendlit/books/qjmfeib4gpfbw90z6x2j.jpg',
        genre: 'Biography',
        pages: 700,
        isRented: true,
        stock: 10,
        rentPrice: 15,
        sellPrice: 120,
        sold: 10,
        ISBN: '1-86092-054-4',
        renterIds: [
            'd0cdfaa6-beee-4dd9-bfe6-cbcfeceffa',
            '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        ],
    },
    {
        id: 'e0cdfaa6-beee-4dd9-eerr-cbcfeceffa8c',
        title: 'The Alchemist',
        description:
            'The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
        author: 'Paulo Coelho',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642165/lendlit/books/yuzhqfaluneoiz4aazk7.jpg',
        genre: 'Fiction',
        pages: 280,
        isRented: false,
        stock: 0,
        rentPrice: 15,
        sellPrice: 120,
        sold: 1,
        ISBN: '1-86092-055-2',
    },
    {
        id: 'e0cdfaa6-beee-2dd9-bfe6-cbcfeceffa8d',
        title: 'Moby Dick',
        description:
            "Herman Melville's Moby Dick is the story of Captain Ahab's self-destructive obsession with the white whale called Moby Dick. It is told through the narration of Ishmael, a sailor new to Ahab's ship, the Pequod. The plot of the novel follows Ahab's manic drive to kill the whale, even as it endangers his crew.",
        author: 'Herman Melville',
        cover: 'https://res.cloudinary.com/sfsajid-development/image/upload/v1705642164/lendlit/books/i6owjarf79kwsodyidvq.jpg',
        genre: 'Novels',
        pages: 320,
        isRented: false,
        stock: 10,
        rentPrice: 15,
        sellPrice: 120,
        sold: 1,
        ISBN: '1-86092-056-0',
    },
];

export const getAllBooks = () => {
    return books;
};

export const getBookById = (id: string) => {
    return books.find((book) => book.id === id);
};

export const pageSize = 16;

export const getFilteredBooks = (search: string, currentPage: number) => {
    const filteredBooks = books.filter((book) => {
        const titleMatch = book.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const authorMatch = book.author
            .toLowerCase()
            .includes(search.toLowerCase());
        return titleMatch || authorMatch;
    });

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    return paginatedBooks;
};

export const getTotalPages = (search: string) => {
    const filteredBooks = books.filter((book) => {
        const titleMatch = book.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const authorMatch = book.author
            .toLowerCase()
            .includes(search.toLowerCase());
        return titleMatch || authorMatch;
    });

    const totalPages = Math.ceil(filteredBooks.length / pageSize);
    return totalPages;
};
