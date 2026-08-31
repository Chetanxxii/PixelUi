export const badgeCode = `const Badge = ({
  children,
  variant = "default",
}) => {
  const variants = {
    default: "bg-zinc-900 text-white",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    outline: "border border-zinc-300 text-zinc-700",
  };

  return (
    <span className={variants[variant]}>
      {children}
    </span>
  );
};`;

export const badgeUsage = `import Badge from "../components/ui/Badge";

export default function Demo() {
  return (
    <Badge variant="success">
      Success
    </Badge>
  );
}`;