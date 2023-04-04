import { LinkButtonProps } from './LinkButton';
export interface LinkPrimaryButtonProps extends LinkButtonProps {
    className?: string;
}
declare const LinkPrimaryButton: ({ className, ...rest }: LinkPrimaryButtonProps) => JSX.Element;
export default LinkPrimaryButton;
