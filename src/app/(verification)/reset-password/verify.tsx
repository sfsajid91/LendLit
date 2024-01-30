import { Button } from '@/components/ui/button';
import { getValidPasswordResetToken } from '@/lib/data/passwordreset-token';
import ResetPasswordForm from '@/ui/forms/ResetPasswordForm';
import Link from 'next/link';

type VerifyResetPasswordProps = {
    token: string;
};

export default async function VerifyResetPasswordToken({
    token,
}: VerifyResetPasswordProps) {
    try {
        const existingToken = await getValidPasswordResetToken(token);

        if (!existingToken) {
            return <VerificationFailed />;
        }

        return <ResetPasswordForm email={existingToken.email} />;
    } catch (error) {
        return <VerificationFailed />;
    }
}

function VerificationFailed() {
    return (
        <div className="space-y-4 text-center">
            <h4 className="text-center text-2xl font-semibold">
                Invalid Verification Link
            </h4>
            <p className="text-center">
                The verification link you clicked is invalid or has expired.
            </p>

            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
}
