import { Button } from '@/components/ui/button';
import Link from 'next/link';
import VerifyResetPasswordToken from './verify';

type ResetPasswordPageProps = {
    searchParams: {
        token: string;
    };
};

export default function ResetPasswordPage({
    searchParams: { token },
}: ResetPasswordPageProps) {
    return (
        <>
            {!token && (
                <div className="space-y-4 text-center">
                    <h1 className="text-xl font-semibold">
                        Invalid Verification Link
                    </h1>
                    <p>
                        The verification link you clicked is invalid or has
                        expired.
                    </p>
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                </div>
            )}
            {token && <VerifyResetPasswordToken token={token} />}
        </>
    );
}
