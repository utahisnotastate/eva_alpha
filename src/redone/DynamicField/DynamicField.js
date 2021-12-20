import React from "react";
import DynamicTextField from "./Fields/DynamicTextField";

export default function DynamicField({ type, index, options, label }) {
  switch (type) {
    case "text":
      return <DynamicTextField key={index} label={`text`} />;
    case "textarea":
      return <DynamicTextField key={index} multiline label={`multiline`} />;

    case "radio":
      return <DynamicTextField key={index} label={`radio`} />;
    case "date":
      return <DynamicTextField key={index} label={`date`} />;

    case "number":
      return <DynamicTextField key={index} type={`number`} label={`number`} />;
    case "present_not_present":
      return <DynamicTextField key={index} label={`present_not_present`} />;

    case "normal_abnormal":
      return <DynamicTextField key={index} label={`normal_abnormal`} />;
    case "select":
      return <DynamicTextField key={index} label={`select`} />;

    default:
      return <DynamicTextField key={index} label={`default`} />;
  }
}
