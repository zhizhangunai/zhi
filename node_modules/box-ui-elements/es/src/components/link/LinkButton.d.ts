import * as React from 'react';
import { LinkBaseProps } from './LinkBase';
export interface LinkButtonProps extends LinkBaseProps {
    children: React.ReactChild;
    className?: string;
    size?: 'large';
}
declare const LinkButton: ({ className, size, ...rest }: LinkButtonProps) => JSX.Element;
export default LinkButton;
