import RegistrationForm from '@/ui/forms/RegistrationForm';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Registration',
    description: 'Register to your account',
};

export default function RegistrationPage() {
    return (
        <>
            <div className="mb-6">
                <h4 className="text-center text-2xl font-bold text-gray-700">
                    Register to your account
                </h4>
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="text-blue-500 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
            <RegistrationForm />
        </>
    );
}
