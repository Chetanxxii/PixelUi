import { useState } from "react";

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
  onClick={handleCopy}
  className={`rounded-lg px-4 py-2 text-sm transition ${
    copied
      ? "bg-green-600 text-white"
      : "border border-zinc-300 bg-white hover:bg-zinc-100"
  }`}
>
  {copied ? "Copied!" : "Copy Code"}
</button>
  );
};

export default CopyButton;