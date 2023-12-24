import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import shimmerPlaceholder from '@/lib/shimmer';
import { BookType } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';
import { LuHeart } from 'react-icons/lu';

export default function BookCard({
    cover,
    title,
    genre,
    id,
    author,
    sellPrice,
    rentPrice,
}: BookType) {
    return (
        <Card className="flex flex-col *:p-2">
            <CardHeader className="items-center">
                <Image
                    src={cover}
                    alt={title}
                    placeholder={shimmerPlaceholder(250, 250)}
                    width={250}
                    height={250}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    className="size-60"
                />
            </CardHeader>
            <CardContent className="space-y-0.5 *:duration-300">
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
                <div className="flex items-center justify-between text-sm">
                    <span title={`$${sellPrice}`}>
                        Buy for{' '}
                        <span className="text-primary">${sellPrice}</span>
                    </span>
                    <span className="text-right" title={`$${rentPrice}/mo`}>
                        Rent for{' '}
                        <span className="text-primary">${rentPrice}/mo</span>
                    </span>
                </div>
            </CardContent>
            <CardFooter className="group mt-auto justify-between">
                <Button
                    className="rounded-full border-primary hover:bg-primary hover:text-white"
                    variant="outline"
                    size="lg"
                    title="Quick add"
                >
                    Quick add
                </Button>
                <Button
                    variant="secondary"
                    className="rounded-full border-primary opacity-0 transition hover:bg-primary hover:text-white group-hover:opacity-100"
                    size="icon"
                    title="Add to Favorites"
                >
                    <LuHeart className="text-2xl" />
                </Button>
            </CardFooter>
        </Card>
    );
}
