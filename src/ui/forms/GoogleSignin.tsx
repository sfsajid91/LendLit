import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleSignin() {
    return (
        <Button variant="outline" className="mt-4 w-full hover:bg-white">
            <FcGoogle className="mr-2 inline-block text-2xl" />
            Continue with Google
        </Button>
    );
}
