const PropsTable = ({ props }) => {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Props
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 text-left">
              <th className="pb-3">Prop</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Default</th>
            </tr>
          </thead>

          <tbody>
            {props.map((item) => (
              <tr
                key={item.name}
                className="border-b border-zinc-100 last:border-none"
              >
                <td className="py-4 font-medium">
                  {item.name}
                </td>

                <td className="text-zinc-600">
                  {item.type}
                </td>

                <td className="text-zinc-600">
                  {item.default}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropsTable;