const Badge = ({
  children,
  variant = "default",
}) => {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors";

  const variants = {
    default: "bg-zinc-900 text-white",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    outline: "border border-zinc-300 text-zinc-700",
  };

  return (
    <span className={`${base} ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;