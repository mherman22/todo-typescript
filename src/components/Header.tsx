import { ReactNode } from "react";

interface HeaderProps {
    title: string;
    children: ReactNode;
}
export const Header = ({title, children}:HeaderProps) => {
    return (
        <span className="header" title={title}>{children}</span>
    );
}