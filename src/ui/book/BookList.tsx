import { getFilteredBooks } from '@/lib/fake-data';
import BookCard from './BookCard';

type PageProps = {
    search: string;
    currentPage: number;
};

export default async function BookList({ search, currentPage }: PageProps) {
    const books = await getFilteredBooks(search, currentPage);
    return (
        <div className="grid w-full grid-cols-1 justify-between gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
}
