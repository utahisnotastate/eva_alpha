import React from 'react'
import { Field } from 'react-final-form'
import _ from 'lodash'

export default function NewItem({ fields }) {
	return (
		<div>
			{fields && fields.length > 0
				? fields.map((field, index) => (
						<div key={index}>
							<Field
								name={`${_.camelCase(field.label)}`}
								component={field.component}
								label={field.label}
								type={field.type}
								placeholder={field.placeholder}
							/>
						</div>
				  ))
				: null}
		</div>
	)
}
