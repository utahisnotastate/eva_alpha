import React, {useEffect, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";



export default function RadioChoicesInput(props) {
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <RadioGroup value={value} onChange={handleChange}>
            {props.choices.map(choice => (
                <FormControlLabel value={choice.value} control={<Radio />} label={choice.label} />
            ))}
        </RadioGroup>
    )

}