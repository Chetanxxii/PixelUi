import { useId } from "react";

const Checkbox = ({
  label = "Checkbox",
  checked = false,
  onChange,
  disabled = false,
}) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className="h-5 w-5 rounded border-zinc-300 text-zinc-900 focus:ring-2 focus:ring-zinc-300"
      />

      <span className="text-sm text-zinc-700">{label}</span>
    </label>
  );
};

export default Checkbox;