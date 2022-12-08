import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

export default function EVAFieldArray({ name }) {
	return (
		<FieldArray name={name}>
			{({ fields }) =>
				fields && fields.length > 0
					? fields.map((name, index) => (
							<Field
								key={index}
								name={`${name}.value`}
								component="input"
								type="text"
								label={name.label}
							/>
					  ))
					: null
			}
		</FieldArray>
	)
}

/*
<FieldArray name="complaints">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={name}>
                    <label>Cust. #{index + 1}</label>
                    <Field
                      name={`${name}.firstName`}
                      component="input"
                      placeholder="First Name"
                    />
                    <Field
                      name={`${name}.lastName`}
                      component="input"
                      placeholder="Last Name"
                    />
                    <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: "pointer" }}
                    >
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
 */
