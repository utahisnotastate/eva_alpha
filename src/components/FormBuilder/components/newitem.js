import React from 'react'
import { Form, Field } from 'react-final-form'

export default function AddNewItem({ push, label, blankitem }) {
	return (
		<div>
			<button type="button" onClick={() => push(blankitem)}>
				Add {label}
			</button>
		</div>
	)
}
