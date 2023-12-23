import { Card, CardContent, CardHeader } from '@/components/ui/card';
import shimmerPlaceholder from '@/lib/shimmer';
import { BookType } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';

export default function BookCard({
    cover,
    title,
    genre,
    id,
    author,
}: BookType) {
    return (
        <Card>
            <CardHeader className="items-center p-2">
                <Image
                    src={cover}
                    alt={title}
                    placeholder="blur"
                    blurDataURL={shimmerPlaceholder(250, 250)}
                    width={250}
                    height={250}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    className="size-60"
                />
            </CardHeader>
            <CardContent className="space-y-2 p-2 *:duration-300">
                <h4 className="text-xs font-semibold uppercase text-primary">
                    {genre}
                </h4>
                <h4>
                    <Link href={`/store/${id}`}>{title}</Link>
                </h4>
                <h4>
                    <Link
                        href={`/author/${author
                            .toLowerCase()
                            .replace(/[^\w\s]/g, '')
                            .replace(/\s+/g, '-')}`}
                        className="text-xs text-gray-500 hover:text-primary/90"
                    >
                        {author}
                    </Link>
                </h4>
            </CardContent>
        </Card>
    );
}
