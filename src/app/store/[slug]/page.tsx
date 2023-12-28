import { getBookById } from '@/lib/fake-data';

type PageProps = {
    params: {
        slug: string;
    };
};

export default function BookDetails({ params: { slug } }: PageProps) {
    const book = getBookById(slug);
    return (
        <div className="px-4">
            <h1>Book: {slug}</h1>
        </div>
    );
}
