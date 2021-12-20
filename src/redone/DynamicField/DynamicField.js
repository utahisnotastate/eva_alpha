import React from "react";
import DynamicTextField from "./Fields/DynamicTextField";
import DynamicRadioGroup from "./Fields/DynamicRadioGroup";

export default function DynamicField({ type, index, options, label }) {
  switch (type) {
    case "text":
      return <DynamicTextField key={index} label={label} />;
    case "textarea":
      return <DynamicTextField key={index} multiline label={label} />;

    case "radio":
      return <DynamicRadioGroup key={index} label={label} options={options} />;
    case "date":
      return <DynamicTextField key={index} label={label} />;

    case "number":
      return <DynamicTextField key={index} label={`default`} />;

    case "normal_abnormal":
      return <DynamicTextField key={index} label={label} />;
    case "select":
      return <DynamicTextField key={index} label={label} />;

    default:
      return <DynamicTextField key={index} label={`default`} />;
  }
}
