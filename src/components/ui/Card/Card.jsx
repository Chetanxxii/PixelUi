const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-zinc-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="border-b border-zinc-200 p-6">
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

const CardDescription = ({ children }) => {
  return (
    <p className="mt-2 text-sm text-zinc-600">
      {children}
    </p>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

const CardFooter = ({ children }) => {
  return (
    <div className="border-t border-zinc-200 p-6">
      {children}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};