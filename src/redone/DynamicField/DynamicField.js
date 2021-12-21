import React from "react";
import DynamicTextField from "./Fields/DynamicTextField";
import DynamicRadioGroup from "./Fields/DynamicRadioGroup";
import DynamicPresentNotPresentField from "./Fields/DynamicPresentNotPresentField";
import DynamicNormalAbnormal from "./Fields/DynamicNormalAbnormal";
import DynamicNumberField from "./Fields/DynamicNumber";

export default function DynamicField({ type, index, options, label, name }) {
  switch (type) {
    case "text":
      return (
        <DynamicTextField key={index} index={index} label={label} name={name} />
      );
    case "textarea":
      return <DynamicTextField key={index} multiline label={label} />;

    case "radio":
      return <DynamicRadioGroup key={index} label={label} options={options} />;
    case "date":
      return <DynamicTextField key={index} label={label} />;

    case "number":
      return <DynamicNumberField key={index} label={label} />;

    case "normal_abnormal":
      return <DynamicNormalAbnormal key={index} label={label} />;

    case "present_not_present":
      return <DynamicPresentNotPresentField key={index} label={label} />;
    case "select":
      return <DynamicTextField key={index} label={label} />;

    default:
      return <DynamicTextField key={index} label={`default`} />;
  }
}
