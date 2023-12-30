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
import AddCart from './AddCart';

export default function BookCard({ book }: { book: BookType }) {
    const { cover, title, genre, id, author, sellPrice, rentPrice } = book;

    return (
        <Card className="flex flex-col duration-1000 animate-in fade-in *:p-2">
            <CardHeader className="items-center">
                <Link href={`/store/${id}`}>
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
                        className="size-60 cursor-pointer rounded-md"
                    />
                </Link>
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
                        href={`/store?search=${author
                            .toLowerCase()

                            .replace(/\s+/g, '+')}`}
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
            <CardFooter className="mt-auto *:justify-between">
                <AddCart book={book} type="buy" simplified />
            </CardFooter>
        </Card>
    );
}
