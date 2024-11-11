import { ButtonType } from '@widgets/custom-button/enums';

export class ButtonOptions {
    text?: string;
    type?: ButtonType;
    width?: number | string;
    isLoading?: boolean;
    disabled?: boolean;
    visible?: boolean;
    onClick?: () => void;
}
