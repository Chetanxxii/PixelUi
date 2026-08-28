import Input from "./Input";

const InputPreview = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <Input placeholder="Your name" />

      <Input type="email" placeholder="Email address" />

      <Input placeholder="Disabled input" disabled />
    </div>
  );
};

export default InputPreview;