import React from 'react'
import Card from '../../../components/basestyledcomponents/Card/Card'
import CardHeader from '../../../components/basestyledcomponents/Card/CardHeader'
import CardBody from '../../../components/basestyledcomponents/Card/CardBody'
import CardIcon from '../../../components/basestyledcomponents/Card/CardIcon'
import CardText from '../../../components/basestyledcomponents/Card/CardText'
import DynamicField from '../../DynamicField/DynamicField'

export default function FormPreview({ activeEditForm }) {
	// add a value prop to each item in the fields array
	const fields = activeEditForm.details.fields.map((field) => {
		return { ...field, value: '' }
	})
	return (
		<Card>
			<CardHeader>
				<CardText>{activeEditForm.title}</CardText>
			</CardHeader>
			<CardBody>
				{fields && fields.length > 0 ? (
					fields.map((field, index) => {
						return (
							<div key={index}>
								<DynamicField index={index} field={field} />
							</div>
						)
					})
				) : (
					<CardText>No fields to preview</CardText>
				)}
				}
			</CardBody>
		</Card>
	)
}

/*
{activeEditForm.details.fields.map((field, index) => {
					return (
						<div key={index}>
							<DynamicField index={index} field={field} />
						</div>
					)
				})}
 */
