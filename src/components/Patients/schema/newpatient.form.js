import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import { JsonForms } from '@jsonforms/react'
import ReactModal from 'react-modal'
import { useModal } from 'react-modal-hook'
import schema from './schema.json'

export default function NewPatientForm() {
	const [patient, setPatient] = useState(schema)
	return (
		<JsonForms
			schema={schema}
			data={patient}
			renderers={materialRenderers}
			cells={materialCells}
			onChange={({ data }) => setPatient(data)}
		/>
	)
}
