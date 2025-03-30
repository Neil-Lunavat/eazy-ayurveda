import { FC, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`text-gray-800 hover:text-green-700 font-medium transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;