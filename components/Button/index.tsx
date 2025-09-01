"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full px-4 py-2 rounded-md text-white font-medium ${
        disabled || loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
      }
            focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
