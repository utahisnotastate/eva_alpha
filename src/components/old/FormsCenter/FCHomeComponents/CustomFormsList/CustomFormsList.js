import React from 'react'
import List from '@material-ui/core/List'
import { useSelector } from 'react-redux'
import CustomFormsListItem from './CustomFormsListItem'

export default function CustomFormsList(props) {
	const [forms, setForms] = useSelector((state) => state.forms)
	/*
    <CustomFOrmsList
    forms={}
        typeOfFormToShow={`physical_exam}
    />
     */
	return (
		<List>
			{forms && forms.length > 0
				? forms.map((form) => (
						<CustomFormsListItem
							key={form.id}
							active={form.active}
							id={form.id}
							title={form.title}
							url={props.url}
						/>
				  ))
				: null}
		</List>
	)
}
