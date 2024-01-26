import Logo from '@/ui/Logo';
import React from 'react';

type EmailTemplateProps = {
    name: string;
    verificationUrl: string;
};

const VerificationEmail: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    verificationUrl,
}) => (
    <div>
        <Logo />
        <h1>Welcome, {name}!</h1>
        <h4 className="bg-slate-500">
            <a href={verificationUrl}>Verify your email, </a>
        </h4>
    </div>
);

export default VerificationEmail;
