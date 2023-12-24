import { getAllBooks } from '@/lib/fake-data';
import BookCard from '@/ui/book/BookCard';

export default function StorePage() {
    const books = getAllBooks();
    return (
        <div className="grid w-full grid-cols-1 justify-between gap-4 px-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
}
