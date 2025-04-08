import type { MouseEventHandler } from "react";

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const DemoButton = ({
  onClick,
  label,
  variant = "primary",
  disabled,
}: Props) => {
  const baseClasses = "px-4 py-2 rounded font-medium";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      data-testid="demo-button"
    >
      {label}
    </button>
  );
};

export default DemoButton;
