import CopyButton from "./CopyButton";

const UsageBlock = ({ title = "Usage", code }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6 py-4">
        <h3 className="font-medium text-white">{title}</h3>
        <CopyButton code={code} />
      </div>

      <div className="bg-zinc-950 p-6">
        <pre className="overflow-x-auto text-sm leading-7 text-zinc-100">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default UsageBlock;