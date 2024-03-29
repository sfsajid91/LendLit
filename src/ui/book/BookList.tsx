import { getFilteredBooks } from '@/lib/fake-data';
import BookCard from './BookCard';

type PageProps = {
    search: string;
    currentPage: number;
};

export default async function BookList({ search, currentPage }: PageProps) {
    const books = await getFilteredBooks(search, currentPage);
    return (
        <>
            {books.length > 0 && (
                <div className="grid w-full grid-cols-1 justify-between gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}

            {books.length <= 0 && (
                <div className="flex min-h-dvh items-center justify-center py-4">
                    <h4 className="text-2xl font-semibold">No books found</h4>
                </div>
            )}
        </>
    );
}
