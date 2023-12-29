'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Debounce the search input to avoid unnecessary requests
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term.trim()) {
            params.set('search', term.trim());
        } else {
            params.delete('search');
        }

        // replacing the url with the new search term
        replace(`${pathname}?${params.toString()}`);
    }, 500);
    return (
        <>
            <Input
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search"
                type="text"
                defaultValue={searchParams.get('search')?.toString()}
            />
        </>
    );
}
