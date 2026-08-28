const PreviewCard = ({
  title = "Preview",
  children,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-6 py-4">
        <h2 className="font-semibold">
          {title}
        </h2>

        <span className="text-sm text-zinc-500">
          Live
        </span>
      </div>

      <div className=" p-8">
        {children}
      </div>
    </div>
  );
};

export default PreviewCard;