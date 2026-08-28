const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    outline:
      "border border-zinc-300 hover:bg-zinc-100",
    ghost:
      "hover:bg-zinc-100",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyle =
    disabled
      ? "opacity-50 cursor-not-allowed"
      : "cursor-pointer";

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabledStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;