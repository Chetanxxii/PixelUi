import DocsLayout from "../components/layout/DocsLayout";

import BadgePreview from "../components/ui/Badge/BadgePreview";
import { badgeCode } from "../components/ui/Badge/BadgeCode";

import PreviewCard from "../components/shared/PreviewCard";
import CodeBlock from "../components/shared/CodeBlock";
import PropsTable from "../components/shared/PropsTable";

const badgeProps = [
  {
    name: "variant",
    type: "string",
    default: '"default"',
  },
];

const BadgePage = () => {
  return (
    <DocsLayout
      title="Badge"
      description="Small status indicators with multiple variants."
    >
      <PreviewCard title="Live Preview">
        <BadgePreview />
      </PreviewCard>

      <CodeBlock
        title="Badge.jsx"
        code={badgeCode}
      />

      <PropsTable props={badgeProps} />
    </DocsLayout>
  );
};

export default BadgePage;