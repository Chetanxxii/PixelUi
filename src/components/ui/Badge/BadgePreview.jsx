import Badge from "./Badge";

const BadgePreview = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>

      <Badge variant="success">
        Success
      </Badge>

      <Badge variant="warning">
        Warning
      </Badge>

      <Badge variant="danger">
        Danger
      </Badge>

      <Badge variant="outline">
        Outline
      </Badge>
    </div>
  );
};

export default BadgePreview;