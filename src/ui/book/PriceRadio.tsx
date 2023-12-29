'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PriceRadio() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange = (status: 'rent' | 'buy') => {
        const params = new URLSearchParams(searchParams);
        if (status === 'rent') {
            params.set('status', 'rent');
        } else {
            params.delete('status');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <RadioGroup
            onValueChange={(value) => handleChange(value as 'rent' | 'buy')}
            defaultValue="buy"
            className="grid-cols-2 py-2"
        >
            <div className="flex items-center space-x-2 *:cursor-pointer">
                <RadioGroupItem value="buy" id="option-buy" />
                <Label htmlFor="option-buy" className="w-full">
                    Buy
                </Label>
            </div>
            <div className="flex items-center space-x-2 *:cursor-pointer">
                <RadioGroupItem value="rent" id="option-rent" />
                <Label htmlFor="option-rent" className="w-full">
                    Rent
                </Label>
            </div>
        </RadioGroup>
    );
}
