'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { forgotPasswordAction } from '@/lib/actions/authActions';
import { emailSchema, type EmailSchemaType } from '@/lib/schema/emailSchema';
import { AlertDestructive, AlertSuccess } from '@/ui/alerts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Message = {
    message: string;
    success: boolean | undefined;
};

export default function ForgotPassword() {
    const form = useForm<EmailSchemaType>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: '',
        },
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<Message>({
        success: undefined,
        message: '',
    });

    const onSubmit = async (values: EmailSchemaType) => {
        setLoading(true);
        setMessage({
            message: '',
            success: undefined,
        });
        const result = await forgotPasswordAction(values);
        if (result?.errors) {
            const errors = result.errors.email as string[];
            form.setError('email', {
                type: 'manual',
                message: errors[0],
            });
        }

        if (!result?.success && result.message) {
            setMessage({
                message: result?.message as string,
                success: false,
            });
        }

        if (result.success && result.message) {
            setMessage({
                message: result?.message as string,
                success: true,
            });
        }

        setLoading(false);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-4"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@lendlit.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {message.success && <AlertSuccess message={message.message} />}

                {message.success === false && (
                    <AlertDestructive message={message.message} />
                )}

                <Button
                    loading={loading}
                    size="lg"
                    type="submit"
                    className="w-full"
                >
                    Reset Password
                </Button>
            </form>
        </Form>
    );
}
