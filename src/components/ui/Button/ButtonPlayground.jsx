import { useMemo, useState } from "react";
import Button from "./Button";
import { ArrowRightIcon, PlusIcon } from "../../shared/icons";

const ButtonPlayground = () => {
  const [variant, setVariant] = useState("primary");
  const [size, setSize] = useState("md");
  const [disabled, setDisabled] = useState(false);

  const [fullWidth, setFullWidth] = useState(false);
const [loading, setLoading] = useState(false);
const [icon, setIcon] = useState("none");

  const generatedCode = useMemo(() => {
  let props = [];

  if (variant !== "primary")
    props.push(`variant="${variant}"`);

  if (size !== "md")
    props.push(`size="${size}"`);

  if (disabled) props.push("disabled");

  if (loading) props.push("loading");

  if (fullWidth) props.push("fullWidth");

  if (icon === "left")
    props.push("leftIcon={<PlusIcon />}");

  if (icon === "right")
    props.push("rightIcon={<ArrowRightIcon />}");

  return `<Button ${
    props.join(" ")
  }>
  Get Started
</Button>`;
}, [
  variant,
  size,
  disabled,
  loading,
  fullWidth,
  icon,
]);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Variant</label>

          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3"
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Size</label>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3"
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />

            Disabled
          </label>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
  <div>
    <label className="mb-2 block text-sm font-medium">
      Icon
    </label>

    <select
      value={icon}
      onChange={(e) => setIcon(e.target.value)}
      className="w-full rounded-xl border border-zinc-300 px-4 py-3"
    >
      <option value="none">None</option>
      <option value="left">Left Icon</option>
      <option value="right">Right Icon</option>
    </select>
  </div>

  <div className="flex items-end">
    <label className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={loading}
        onChange={(e) => setLoading(e.target.checked)}
      />

      Loading
    </label>
  </div>

  <div className="flex items-end">
    <label className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={fullWidth}
        onChange={(e) => setFullWidth(e.target.checked)}
      />

      Full Width
    </label>
  </div>
</div>

      {/* Live Preview */}
      <div className="flex justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
       <Button
  variant={variant}
  size={size}
  disabled={disabled}
  loading={loading}
  fullWidth={fullWidth}
  leftIcon={icon === "left" ? <PlusIcon /> : null}
  rightIcon={icon === "right" ? <ArrowRightIcon /> : null}
>
  Get Started
</Button>
      </div>

      {/* Generated Code */}
      <div className="overflow-hidden rounded-2xl border border-zinc-200">
        <div className="border-b border-zinc-800 bg-zinc-900 px-6 py-4">
          <h3 className="text-white">Generated JSX</h3>
        </div>

        <div className="bg-zinc-950 p-6 text-zinc-100">
          <pre>
            <code>{generatedCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonPlayground;