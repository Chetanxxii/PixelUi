import Button from "./Button";

const ButtonPreview = () => {
  return (
    <div className="flex flex-wrap gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
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

      <Button disabled>
        Disabled
      </Button>
    </div>
  );
};

export default ButtonPreview;