import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

type EmailTemplateProps = {
    verificationUrl: string;
    name: string;
};

export default function VerificationEmail({
    verificationUrl,
    name,
}: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>LendLit Email Verification</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container className="mx-auto my-auto bg-slate-400 p-5 text-gray-800">
                        <Section className="bg-white px-8 py-4">
                            <Img
                                src="https://res.cloudinary.com/sfsajid-development/image/upload/v1706298818/lendlit/LOGO.png"
                                alt="LendLit Logo"
                                className="mx-auto my-6 h-auto w-full max-w-[200px]"
                            />

                            <Heading className="text-xl font-bold text-gray-800">
                                Verify your email address
                            </Heading>
                            <Text>
                                Hi <strong>{name}</strong>,
                                <br />
                                <span className="mt-2">
                                    Welcome to Lendlit! We&apos;re excited to
                                    have you join our community. To complete
                                    your registration and unlock the full
                                    potential of Lendlit, please verify your
                                    email address by clicking the link below:
                                </span>
                            </Text>
                            <br />
                            <Section className="my-4 text-center">
                                <Link
                                    href={verificationUrl}
                                    className="inline-flex items-center justify-center rounded bg-[#b93c5f] px-4 py-2 font-semibold text-white"
                                >
                                    Verify Email
                                </Link>
                            </Section>

                            <Text>
                                <br />
                                This link will expire in 24 hours after you
                                receive this email.
                            </Text>

                            <Text className="mt-4">
                                Once your email is verified, you&apos;ll be able
                                to:
                                <ul className="list-inside list-disc">
                                    <li key="list_1">
                                        Browse and search for lending and
                                        borrowing opportunities
                                    </li>
                                    <li key="list_2">
                                        Post your own listings to borrow or lend
                                        items
                                    </li>
                                    <li key="list_3">
                                        Communicate with other members securely
                                    </li>
                                    <li key="list_4">And much more!</li>
                                </ul>
                                Happy borrowing and lending!
                                <br />
                                <span className="mt-1">The Lendlit Team</span>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
