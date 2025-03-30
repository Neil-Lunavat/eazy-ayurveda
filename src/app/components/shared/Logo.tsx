import Link from "next/link";
import { FC } from "react";

interface LogoProps {
    className?: string;
}

const Logo: FC<LogoProps> = ({ className = "" }) => {
    return (
        <Link
            href="/"
            className={`font-bold text-2xl flex items-center ${className}`}
        >
            <span className="text-green-700">Nature</span>
            <span className="text-gray-900">Vitality</span>
        </Link>
    );
};

export default Logo;
