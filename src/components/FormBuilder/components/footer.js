import React from 'react'
import CardFooter from '../../basestyledcomponents/Card/CardFooter'
import NewItem from '../newitem'

export default function Footer({ name, push, blankitem, label, ...rest }) {
	return (
		<CardFooter>
			<NewItem
				name={name}
				push={push}
				blankitem={blankitem}
				label={label}
				{...rest}
			/>
		</CardFooter>
	)
}
