import { confirm } from 'devextreme/ui/dialog';
import notify from 'devextreme/ui/notify';

export class NotificationUtility {
    static info(message: string) {
        notify(message, 'info', 5000);
    }

    static warning(message: string) {
        notify(message, 'warning', 5000);
    }

    static error(message = 'An error has occurred. Please try again.') {
        notify(message, 'error', 5000);
    }

    static success(message: string) {
        notify(message, 'success', 5000);
    }

    static confirm(message: string, title: string): Promise<boolean> {
        return confirm(message, title);
    }
}
