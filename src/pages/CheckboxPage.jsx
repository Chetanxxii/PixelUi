import DocsLayout from "../components/layout/DocsLayout";

import CheckboxPreview from "../components/ui/Checkbox/CheckboxPreview";
import { checkboxCode } from "../components/ui/Checkbox/CheckboxCode";

import PreviewCard from "../components/shared/PreviewCard";
import CodeBlock from "../components/shared/CodeBlock";
import PropsTable from "../components/shared/PropsTable";

const checkboxProps = [
  { name: "label", type: "string", default: '"Checkbox"' },
  { name: "checked", type: "boolean", default: "false" },
  { name: "disabled", type: "boolean", default: "false" },
  { name: "onChange", type: "function", default: "-" },
];

const CheckboxPage = () => {
  return (
    <DocsLayout
      title="Checkbox"
      description="Accessible checkbox with label support."
    >
      <PreviewCard title="Live Preview">
        <CheckboxPreview />
      </PreviewCard>

      <CodeBlock title="Checkbox.jsx" code={checkboxCode} />

      <PropsTable props={checkboxProps} />
    </DocsLayout>
  );
};

export default CheckboxPage;