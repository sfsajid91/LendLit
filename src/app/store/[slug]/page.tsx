import { getBookById } from '@/lib/fake-data';
import shimmerPlaceholder from '@/lib/shimmer';
import AddCart from '@/ui/book/AddCart';
import PriceRadio from '@/ui/book/PriceRadio';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiOutlineBookOpen, HiOutlineTruck } from 'react-icons/hi2';
import { TbBooks } from 'react-icons/tb';

type PageProps = {
    params: {
        slug: string;
    };
    searchParams: {
        status?: 'buy' | 'rent';
    };
};

export default function BookDetails({
    params: { slug },
    searchParams: { status },
}: PageProps) {
    const book = getBookById(slug);
    if (!book) return notFound();
    const currentStatus = status || 'buy';

    return (
        <div className="grid gap-8 md:grid-cols-2">
            {/* <!-- images - start --> */}
            <div className="relative h-auto overflow-hidden">
                <Image
                    src={book?.cover as string}
                    alt={book?.title as string}
                    width={400}
                    height={600}
                    placeholder={shimmerPlaceholder(400, 400)}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    className="rounded-lg object-cover object-center"
                />

                {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                        sale
                    </span> */}
            </div>
            {/* <!-- images - end --> */}

            {/* <!-- content - start --> */}
            <div className="md:py-4 ">
                {/* <!-- name - start --> */}
                <div className="mb-2 md:mb-3">
                    <h4 className="text-xs font-semibold uppercase text-primary">
                        {book?.genre}
                    </h4>
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                        {book?.title}
                    </h2>
                    <h4>
                        <Link
                            href={`/store?search=${book?.author
                                .toLowerCase()

                                .replace(/\s+/g, '+')}`}
                            className="text-sm text-gray-500 hover:text-primary/90"
                        >
                            {book?.author}
                        </Link>
                    </h4>
                </div>
                {/* <!-- name - end --> */}

                <div className="my-2 space-y-2">
                    <h4 className="flex gap-2 text-sm">
                        <HiOutlineBookOpen className="text-2xl text-primary" />{' '}
                        <span>Pages: {book?.pages}</span>
                    </h4>
                    <h4 className="flex gap-2 text-sm">
                        <TbBooks className="text-2xl text-primary" />{' '}
                        <span>Sold: {book?.sold}</span>
                    </h4>
                </div>

                {/* <!-- rating - start --> */}
                {/* <div className="mb-6 flex items-center md:mb-10">
                        <div className="-ml-1 flex gap-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>

                        <span className="ml-2 text-sm text-gray-500">4.2</span>

                        <a
                            href="#"
                            className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                            view all 47 reviews
                        </a>
                    </div> */}
                {/* <!-- rating - end --> */}

                {/* <!-- price - start --> */}
                <div className="mb-4">
                    <div className="flex items-end gap-2">
                        <span className="text-xl font-bold md:text-2xl">
                            $
                            {currentStatus === 'buy'
                                ? book?.sellPrice
                                : `${book?.rentPrice}/mo`}
                        </span>
                        {/* <span className="mb-0.5 text-red-500 line-through">
                            $30.00
                        </span> */}
                    </div>

                    <span className="text-sm text-gray-500">
                        incl. VAT plus shipping
                    </span>
                    <PriceRadio />
                </div>
                {/* <!-- price - end --> */}

                {/* <!-- shipping notice - start --> */}
                <div className="mb-6 flex items-center gap-2 text-gray-500">
                    <HiOutlineTruck className="text-2xl" />
                    <span className="text-sm">2-4 day shipping</span>
                </div>
                {/* <!-- shipping notice - end --> */}

                {/* Add Cart */}
                <AddCart book={book} type={currentStatus} />

                {/* <!-- description - start --> */}
                <div className="mt-10 md:mt-16 lg:mt-20">
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                        Description
                    </h3>

                    <p className="text-gray-500">{book?.description}</p>
                </div>
                {/* <!-- description - end --> */}
            </div>
            {/* <!-- content - end --> */}
        </div>
    );
}
