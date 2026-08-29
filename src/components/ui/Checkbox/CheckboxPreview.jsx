import { useState } from "react";
import Checkbox from "./Checkbox";

const CheckboxPreview = () => {
  const [terms, setTerms] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div className="space-y-4">
      <Checkbox
        label="Accept terms and conditions"
        checked={terms}
        onChange={setTerms}
      />

      <Checkbox
        label="Subscribe to newsletter"
        checked={newsletter}
        onChange={setNewsletter}
      />

      <Checkbox
        label="Disabled checkbox"
        checked={true}
        disabled
      />
    </div>
  );
};

export default CheckboxPreview;