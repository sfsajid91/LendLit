'use client';

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
import { signinAction } from '@/lib/actions/authActions';
import { signinSchema, type SigninSchemaType } from '@/lib/schema/signinSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

export default function LoginForm() {
    const form = useForm<SigninSchemaType>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleShowPassword = (isChecked: boolean) => {
        setShowPassword(isChecked);
    };

    async function onSubmit(values: SigninSchemaType) {
        setLoading(true);
        const result = await signinAction(values);
        if (result?.errors) {
            result.errors.map((error) => {
                form.setError(error.field as keyof SigninSchemaType, {
                    type: 'manual',
                    message: error.message,
                });
            });
        }
        setLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
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
                        // checked={showPassword}
                        onCheckedChange={toggleShowPassword}
                    />
                    <label
                        htmlFor="showpassword"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Show Password
                    </label>
                </div>

                <Button
                    loading={loading}
                    size="lg"
                    type="submit"
                    className="w-full"
                >
                    Login
                </Button>
            </form>
        </Form>
    );
}
