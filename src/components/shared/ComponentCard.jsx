import { Link } from "react-router";

const ComponentCard = ({ component }) => {
  return (
    <Link
      to={
        component.status === "Ready"
          ? `/components/${component.id}`
          : "#"
      }
      className={`group rounded-3xl border p-6 transition-all duration-300 ${
        component.status === "Ready"
          ? "border-zinc-200 bg-white hover:-translate-y-1 hover:shadow-xl"
          : "cursor-not-allowed border-zinc-100 bg-zinc-50"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-lg font-bold text-white">
          {component.title[0]}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            component.status === "Ready"
              ? "bg-green-100 text-green-700"
              : "bg-zinc-200 text-zinc-600"
          }`}
        >
          {component.status}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {component.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-600">
        {component.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
    {component.category}
  </span>

  {component.status === "Ready" && (
    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
      Open →
    </span>
  )}
</div>
    </Link>
  );
};

export default ComponentCard;