import { getTotalPages } from '@/lib/fake-data';
import BookList from '@/ui/book/BookList';
import BookPagination from '@/ui/book/BookPagination';
import Search from '@/ui/book/Search';

type PageProps = {
    searchParams: {
        search?: string;
        page?: string;
    };
};

export default async function StorePage({ searchParams }: PageProps) {
    const search = searchParams?.search || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await getTotalPages(search);

    return (
        <div className="px-4 py-2">
            <Search />
            <BookList search={search} currentPage={currentPage} />
            <div className="w-full py-4">
                {
                    // Only show pagination if there is more than one page
                    totalPages > 1 && (
                        <BookPagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                        />
                    )
                }
            </div>
        </div>
    );
}
