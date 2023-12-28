import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { generatePagination } from '@/lib/utils';

type BookPaginationProps = {
    totalPages: number;
    currentPage: number;
};

export default function BookPagination({
    totalPages,
    currentPage,
}: BookPaginationProps) {
    const allPages = generatePagination(currentPage, totalPages);

    return (
        <Pagination>
            <PaginationContent>
                {
                    // Only show previous button if there is a previous page
                    currentPage > 1 && (
                        <PaginationPrevious
                            href={
                                currentPage === 2
                                    ? '/store'
                                    : `/store?page=${currentPage - 1}`
                            }
                        />
                    )
                }
                {allPages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    return (
                        <PaginationLink
                            key={index}
                            href={page === 1 ? '/store' : `/store?page=${page}`}
                            isActive={page === currentPage}
                        >
                            {page}
                        </PaginationLink>
                    );
                })}

                {
                    // Only show next button if there is a next page
                    currentPage < totalPages && (
                        <PaginationNext
                            href={`/store?page=${currentPage + 1}`}
                        />
                    )
                }
            </PaginationContent>
        </Pagination>
    );
}
