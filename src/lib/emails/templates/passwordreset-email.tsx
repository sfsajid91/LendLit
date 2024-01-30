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

export default function PasswordResetEmail({
    verificationUrl,
    name,
}: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>LendLit Password Reset</Preview>
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
                                Reset your password
                            </Heading>
                            <Text>
                                Hi <strong>{name}</strong>,
                                <br />
                                <span className="mt-2">
                                    We received a request to reset your
                                    password. If you did not make this request,
                                    please ignore this email. Otherwise, you can
                                    reset your password using this link:
                                </span>
                            </Text>
                            <br />
                            <Section className="my-4 text-center">
                                <Link
                                    href={verificationUrl}
                                    className="inline-flex items-center justify-center rounded bg-[#b93c5f] px-4 py-2 font-semibold text-white"
                                >
                                    Reset Password
                                </Link>
                            </Section>

                            <Text>
                                <br />
                                This link will expire in 30 minutes after you
                                receive this email.
                            </Text>

                            <Text className="mt-4">
                                Once you click the link, you&apos;ll be prompted
                                to choose a new, strong password for your
                                account.
                                <br />
                                We&apos;re always happy to help!
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
