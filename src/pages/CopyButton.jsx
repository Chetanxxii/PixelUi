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
      className="rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100"
    >
      {copied ? "Copied!" : "Copy Code"}
    </button>
  );
};

export default CopyButton;