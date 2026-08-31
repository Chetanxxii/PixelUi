export const checkboxCode = `import Checkbox from "./Checkbox";

<Checkbox
  label="Accept terms"
  checked={checked}
  onChange={setChecked}
/>`;


export const checkboxUsage = `import { useState } from "react";
import Checkbox from "../components/ui/Checkbox";

export default function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Accept terms"
      checked={checked}
      onChange={setChecked}
    />
  );
}`;