import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import GridContainer from '../../../basestyledcomponents/Grid/GridContainer'
import GridItem from '../../../basestyledcomponents/Grid/GridItem'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		padding: 15,
	},
	labeltext: {
		color: '#000000',
	},
	inputfield: {
		padding: 20,
	},
	options: {
		width: 200,
		padding: 20,
	},
})

export default function AddressForm(props) {
	const address = useSelector((state) => state.patient.patientaddress)
	const { register, handleSubmit, setValue, getValues, reset, control } =
		useFormContext()
	let { id } = useParams()
	const classes = useStyles()
	const onSubmit = (data) => console.log(data)
	const [formfields, setFormFields] = useState([
		{ label: 'Address One', name: 'address.address_one' },
		{ label: 'Address Two', name: 'address.address_two' },
		{ label: 'City', name: 'address.city' },
		{ label: 'State', name: 'address.state' },
		{ label: 'Zip Code', name: 'address.zip_code' },
	])

	return (
		<GridContainer className={classes.root}>
			{formfields.map((formfield) => (
				<GridItem key={formfield.label}>
					<div>
						<Controller
							name={formfield.name}
							as={
								<TextField
									label={formfield.label}
									className={classes.inputfield}
								/>
							}
							control={control}
						/>
					</div>
				</GridItem>
			))}
		</GridContainer>
	)
}

/*
  useEffect(() => {
    async function setFormFields() {
      const result = {
        address,
      };
      const currentvalues = getValues();
      console.log(currentvalues);
      console.log(address);
      //reset(address);
    }
    setFormFields();
  }, [address]);

useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/address/`);
            console.log(result);

            return result.data;
        };
        fetchData().then(response => {
            if(response === undefined) {
                console.log('new patient so settings arent there');
            } else {
                reset({
                        address_one: response[0].address_one,
                        address_two: response[0].address_two,
                        city: response[0].city,
                        state: response[0].state,
                        zip_code: response[0].zip_code,
                    }
                );

            }
        }).catch(error => console.log(error));
    }, []);
reset({
                gender: result.data[0].gender,
                race: result.data[0].race,
                marital_status: result.data[0].marital_status,
                employment_status: result.data[0].employment_status,
                email: result.data[0].email
            });
 */
