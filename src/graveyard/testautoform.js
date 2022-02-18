import React from "react";
/*import { createSchema } from 'react-hook-form-auto';
import { Autoform } from 'react-hook-form-auto';*/
import { createSchema, Autoform } from "rhfa-material-ui";

const client = createSchema("client", {
  name: {
    type: "string",
    required: true,
    max: 32,
  },
  age: {
    type: "number",
  },
});
