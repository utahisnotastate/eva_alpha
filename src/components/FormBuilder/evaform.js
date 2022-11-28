import React, { useRef, useState } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { FormGenerator } from 'formik-generator-materialui'
import { TextField } from 'formik-mui'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default function EVAForm() {
	const fields = useState([
		{
			title: 'Complaints',
			typeField: 'array',
			path: 'fields',
			subfield: [
				{
					title: 'Type',
					name: 'type',
					typeField: 'select',

					choices: [
						'text',
						'select',
						'checkbox',
						'radio',
						'textarea',
						'date',
						'time',
						'datetime-local',
						'number',
						'range',
						'email',
						'url',
						'tel',
						'search',
						'color',
						'file',
						'group',
					],
				},
				{ title: 'Label', name: 'label', typeField: 'text' },
			],
		},
	])
	return (
		<FormGenerator
			formRef={formRef}
			fields={fields}
			initialValues={{ fields: fields }}
		/>
	)
}
