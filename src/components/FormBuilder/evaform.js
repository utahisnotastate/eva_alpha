import React, { useRef } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { FormGenerator } from 'formik-generator-materialui'
import { TextField } from 'formik-mui'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default function EVAForm() {
	const fields = useSelector((state) => state.activeform.fields)
	const form = useSelector((state) => state.activeform.form)
	const formRef = useRef(null)
	return <FormGenerator formRef={formRef} fields={fields} />
}
