const mockdata = [
	{
		fields: [
			{
				autoComplete: 'on',
				autoFocus: false,
				classes: {
					root: 'my-class',
					input: 'my-input',
				},
				color: 'secondary',
				defaultValue: 'default value',
				disabled: true,
				error: false,
				FormHelperTextProps: {
					variant: 'outlined',
				},
				fullWidth: true,
				helperText: 'Enter some text here',
				hiddenLabel: false,
				id: 'input-1',
				InputLabelProps: {
					shrink: true,
				},
				inputProps: {
					maxLength: 10,
				},
				InputProps: {
					disableUnderline: true,
				},
				inputRef: null,
				label: 'Input label',
				maxRows: 5,
				minRows: 2,
				multiline: true,
				name: 'input-name',
				onChange: "() => console.log('Input changed')",
				placeholder: 'Enter text here...',
				required: true,
				rows: 3,
				rowsMax: 10,
				select: true,
				SelectProps: {
					native: true,
				},
				size: 'small',
				type: 'password',
				value: 'some value',
			},
			{
				autoComplete: 'off',
				autoFocus: true,
				classes: {
					root: 'my-other-class',
					input: 'my-other-input',
				},
				color: 'primary',
				defaultValue: '',
				disabled: false,
				error: true,
				FormHelperTextProps: {
					error: true,
				},
				fullWidth: false,
				helperText: 'Error message goes here',
				hiddenLabel: true,
				id: 'input-2',
				InputLabelProps: {
					shrink: false,
				},
				inputProps: {
					minLength: 3,
				},
				InputProps: {
					disableUnderline: false,
				},
				inputRef: null,
				label: 'Some label',
				maxRows: 4,
				minRows: 1,
				multiline: true,
				name: 'some-name',
				onChange: "() => console.log('Input changed')",
				placeholder: 'Some placeholder...',
				required: false,
				rows: 2,
				rowsMax: 8,
				select: false,
				SelectProps: {
					native: false,
				},
				size: 'large',
				type: 'email',
				value: 'random value',
			},
		],
	},
]

export default mockdata
