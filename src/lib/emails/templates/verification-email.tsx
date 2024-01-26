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

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export default function VerificationEmail({
    verificationUrl,
    name,
}: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>LendLit Email Verification</Preview>
            <Tailwind>
                <Body className="bg-white px-2 font-sans">
                    <Container className="mx-auto bg-slate-400 p-5 text-gray-800">
                        <Section className="bg-white">
                            <Section className="flex items-center justify-center bg-[#6c2c72]/70 py-5">
                                <Img
                                    src={`${baseUrl}/logo.png`}
                                    width="133"
                                    height="31"
                                    alt="LendLit Logo"
                                    className="mx-auto block"
                                />
                            </Section>
                            <Section className="px-9 py-6">
                                <Heading className="text-xl font-bold text-gray-800">
                                    Verify your email address
                                </Heading>
                                <Text>
                                    Hi {name},
                                    <br />
                                    Welcome to Lendlit! We&apos;re excited to
                                    have you join our community. To complete
                                    your registration and unlock the full
                                    potential of Lendlit, please verify your
                                    email address by clicking the link below:
                                    <br />
                                    <Link
                                        href={verificationUrl}
                                        className="inline-flex items-center justify-center rounded px-4 py-2 font-bold text-[#b93c5f]"
                                    >
                                        Verify Email
                                    </Link>
                                    <br />
                                    This link will expire in 24 hours after you
                                    receive this email.
                                </Text>

                                <Text className="mt-4">
                                    Once your email is verified, you&apos;ll be
                                    able to:
                                    <ul className="list-inside list-disc">
                                        <li>
                                            Browse and search for lending and
                                            borrowing opportunities
                                        </li>
                                        <li>
                                            Post your own listings to borrow or
                                            lend items
                                        </li>
                                        <li>
                                            Communicate with other members
                                            securely
                                        </li>
                                        <li>And much more!</li>
                                    </ul>
                                    <br />
                                    <br />
                                    Happy borrowing and lending!
                                    <br />
                                    The Lendlit Team
                                </Text>
                            </Section>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
