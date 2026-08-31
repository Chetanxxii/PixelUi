export const inputCode = `const Input = ({
  type = "text",
  placeholder = "Enter text...",
  disabled = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-200 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500"
    />
  );
};

export default Input;`;

export const inputUsage = `import Input from "../components/ui/Input";

export default function Demo() {
  return (
    <Input placeholder="Email address" />
  );
}`;