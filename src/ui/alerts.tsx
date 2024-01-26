import { LuAlertCircle } from 'react-icons/lu';

import { Alert, AlertDescription } from '@/components/ui/alert';

type AlertType = {
    message: string;
};

export function AlertDestructive({ message }: AlertType) {
    return (
        <Alert variant="destructive">
            <LuAlertCircle className="h-4 w-4" />
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}

export function AlertSuccess({ message }: AlertType) {
    return (
        <Alert variant="success">
            <LuAlertCircle className="h-4 w-4" />
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}
