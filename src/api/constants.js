//practice settings details field

const defaultsettings = {
	announcments: [],
	employees: [],
	location: {
		address_one: '',
		address_two: '',
		city: '',
		state: '',
		zip: '',
	},
	clinical: {
		taxId: '',
		npi: '',
	},
	schedule: {
		opens: '',
		closes: '',
	},
}

//appointment details field

const appointment = {
	scheduling: {
		status: '',
		scheduled_on: '',
		scheduled_by: '',
		cancellation: {
			reason: '',
			cancelled_on: '',
			cancelled_by: '',
		},
	},
	appointment_start: '',
	appointment_end: '',
	actual_start: '',
	actual_end: '',
	claim: {
		id: '434534',
	},
	encounter: {
		complaints: [],
		review_of_systems: [],
		physical_exams: [],
		assessments: [],
		plan: [],
		follow_up: [],
		summary: '',
	},
}

const patient_details = {
	demographics: {
		date_of_birth: '4/20/1969',
		name: {
			first: 'Jimbo',
			last: 'Thingy',
			middle: 'sdf',
			prefferd_name: 'Jim',
		},
		address: {
			address_one: '23423 fake steet',
			address_two: 'Apt 2',
			city: 'Nowhere',
			state: 'State',
			zip: '232323',
		},
		contact_methods: [{ type: 'cell', value: '123456789' }],
	},
	appointments: [],
	requests: [],
	insurances: [],
	history: {
		medical: [],
		surgical: [],
		family: [],
		social: [],
		allergies: [],
	},
	medications: [],
	diagnosis: [],
}

const request_details = {
	type: '',
	requested_started: '',
	request_closed: '',
	status: '',
	description: '',
	updates: [],
}

export { defaultsettings, appointment, patient_details, request_details }
