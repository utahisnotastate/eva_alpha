import React, { Component } from 'react'
import GridContainer from '../../../basestyledcomponents/Grid/GridContainer'
import GridItem from '../../../basestyledcomponents/Grid/GridItem'
import Card from '../../../basestyledcomponents/Card/Card'
import axios from 'axios'
import Autosuggest from 'react-autosuggest'
import './surgicalhistory.css'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import { useFormikContext, FieldArray, Field, Form } from 'formik'
import { TextField } from 'formik-mui'
import Timeline from '../../../basestyledcomponents/TimeLineStyled/Timeline'

export default function RequestsFieldArray() {
	const { values } = useFormikContext()
	return (
		<FieldArray name="details.requests">
			{({ push, remove, form }) => {
				return (
					<div>
						<Button
							variant="contained"
							color="primary"
							onClick={() => push({})}>
							Add Request
						</Button>
						{values.requests && values.requests.length > 0
							? values.requests.map((request, index) => (
									<div key={index}>
										<Typography>{index}</Typography>
										<Field
											name={`requests.${index}.type`}
										/>
										<Field
											name={`requests.${index}.status`}
										/>
										<Field
											name={`requests.${index}.description`}
										/>
										<Button
											variant="contained"
											color="primary"
											onClick={() => remove(index)}>
											Remove
										</Button>
									</div>
							  ))
							: null}
					</div>
				)
			}}
		</FieldArray>
	)
}

/*
* <FieldArray name="details.requests">
			{({ push, remove, form }) => {
				return (
					<div>
						<Button
							variant="contained"
							color="primary"
							onClick={() => push({})}>
							Add Request
						</Button>
						{values.requests && values.requests.length > 0
							? values.requests.map((request, index) => (
									<div key={index}>
										<Typography>{index}</Typography>
										<Field
											name={`requests.${index}.type`}
										/>
										<Field
											name={`requests.${index}.status`}
										/>
										<Field
											name={`requests.${index}.description`}
										/>
										<Button
											variant="contained"
											color="primary"
											onClick={() => remove(index)}>
											Remove
										</Button>
									</div>
							  ))
							: null}
					</div>
				)
			}}
		</FieldArray>
*
* */
