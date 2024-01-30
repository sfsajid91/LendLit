'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { resetPasswordAction } from '@/lib/actions/authActions';
import {
    passwordSchema,
    type PasswordSchemaType,
} from '@/lib/schema/passwordSchema';
import { AlertDestructive, AlertSuccess } from '@/ui/alerts';
import { useState } from 'react';

type Message = {
    message: string;
    success: boolean | undefined;
};

export default function ResetPasswordForm({ email }: { email: string }) {
    const form = useForm<PasswordSchemaType>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState<Message>({
        message: '',
        success: undefined,
    });

    const toggleShowPassword = (isChecked: boolean) => {
        setShowPassword(isChecked);
    };

    const onSubmit = async (values: PasswordSchemaType) => {
        setLoading(true);
        setMessage({
            message: '',
            success: undefined,
        });

        const newValues = {
            ...values,
            email,
        };

        const result = await resetPasswordAction(newValues);

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

        if (result?.errors) {
            result.errors.map((error) => {
                form.setError(error.field as keyof PasswordSchemaType, {
                    type: 'manual',
                    message: error.message,
                });
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
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="items-top flex space-x-2">
                    <Checkbox
                        id="showpassword"
                        onCheckedChange={toggleShowPassword}
                    />
                    <label
                        htmlFor="showpassword"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Show Password
                    </label>
                </div>

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
