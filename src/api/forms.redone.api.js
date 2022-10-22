import API_URL from './api_url'
import axios from 'axios'

/*
 * {
 * 	type: "string" reviewofsystems/physicalexam
 * 	title: "string" title of the form
 * 	active: "boolean" is the form active
 * 	details: {
 * 		fields: []
 * }
 * }
 *
 * */

export const createNewPhysicalExamForm = (title) => {
	const newform = {
		title,
		type: 'physical_exam',
		active: true,
		details: {
			fields: [],
		},
	}
	console.log(newform)

	axios
		.post(`${API_URL}/forms/`, newform)
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
}
