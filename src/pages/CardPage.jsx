import DocsLayout from "../components/layout/DocsLayout";

import CardPreview from "../components/ui/Card/CardPreview";
import { cardCode } from "../components/ui/Card/CardCode";

import PreviewCard from "../components/shared/PreviewCard";
import CodeBlock from "../components/shared/CodeBlock";
import PropsTable from "../components/shared/PropsTable";

const cardProps = [
  {
    name: "children",
    type: "ReactNode",
    default: "-",
  },
  {
    name: "className",
    type: "string",
    default: '""',
  },
];

const CardPage = () => {
  return (
    <DocsLayout
      title="Card"
      description="Composable card layouts for dashboards, pricing, blogs and more."
    >
      <PreviewCard title="Live Preview">
        <CardPreview />
      </PreviewCard>

      <CodeBlock title="Card.jsx" code={cardCode} />

      <PropsTable props={cardProps} />
    </DocsLayout>
  );
};

export default CardPage;