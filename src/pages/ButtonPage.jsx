import DocsLayout from "../components/layout/DocsLayout";

import Button from "../components/ui/Button";
import { buttonCode } from "../components/ui/Button/ButtonCode";

import PreviewCard from "../components/shared/PreviewCard";
import CodeBlock from "../components/shared/CodeBlock";
import PropsTable from "../components/shared/PropsTable";
import ButtonPlayground from "../components/ui/Button/ButtonPlayground";

import UsageBlock from "../components/shared/UsageBlock";
import { buttonUsage } from "../components/ui/Button/ButtonCode";

const buttonProps = [
  {
    name: "variant",
    type: "string",
    default: '"primary"',
  },
  {
    name: "size",
    type: "string",
    default: '"md"',
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
  },
];

const ButtonPage = () => {
  return (
    <DocsLayout
      title="Button"
      description="Reusable buttons with multiple variants and sizes."
    >
      <PreviewCard title="Live Preview">
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard title="Playground">
  <ButtonPlayground />
</PreviewCard>

      <CodeBlock
        title="Button.jsx"
        code={buttonCode}
      />

      <UsageBlock
  title="Usage"
  code={buttonUsage}
/>

      <PropsTable props={buttonProps} />
    </DocsLayout>
  );
};

export default ButtonPage;