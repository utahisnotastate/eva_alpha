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

const defaultforms = [
	{
		form: 'registration',
		title: 'Registration',

		inputs: [You aren't full force going chiropractor'
			{
				type: 'text',
				label: 'Registration Label',
				defaultValue: 'test default',
				value: '',
			},
		],
	},
	{
		form: 'scheduling',
		title: 'Scheduling',
		inputs: [
			{
				type: 'text',
				label: 'Scheduling Label',
				defaultValue: 'test default',
				value: '',
			},
		],
	},
	{
		form: 'complaints',
		title: 'Add New Complaint',
		inputs: [
			{
				type: 'text',
				component: 'input',
				label: 'Complaints Label',
				placeholder: 'Enter Complaint',
				value: '',
			},
		],
	},
	{
		form: 'assessments',
		title: 'Add New Assessment',
		inputs: [
			{
				type: 'text',
				component: 'input',
				label: 'Complaints Label',
				placeholder: 'Enter Complaint',
				value: '',
			},
		],
	},
	{
		form: 'plans',
		title: 'Add New Plan',
		inputs: [
			{
				type: 'text',
				component: 'input',
				label: 'Plan label',
				placeholder: 'Enter Plan',
				value: '',
			},
		],
	},
	{
		form: 'reviewofsystems',
		title: 'Review of Systems',
		inputs: [
			{
				type: 'text',
				component: 'input',
				label: 'Plan label',
				placeholder: 'Enter Plan',
				value: '',
			},
		],
	},
	{
		form: 'physicalexam',
		title: 'Physical Exam',
		inputs: [
			{
				type: 'text',
				component: 'input',
				label: 'Plan label',
				placeholder: 'Enter Plan',
				value: '',
			},
		],
	},
]

export {
	defaultsettings,
	appointment,
	patient_details,
	request_details,
	defaultforms,
}
