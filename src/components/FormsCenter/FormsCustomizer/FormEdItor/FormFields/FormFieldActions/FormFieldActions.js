import React from "react";
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {useFormContext} from "react-hook-form";
import Button from '../../../../../basestyledcomponents/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CancelIcon from '@material-ui/icons/Cancel';
import move from 'lodash-move'



export default function FormFieldActions(props) {
    const dispatch = useDispatch();

    const handleMove = (index, newposition) => {
        let sortedarray = move(props.formfields, index, newposition)
        console.log(sortedarray);
        // dispatch({type: 'move_field', index: index, newposition: newposition  });
        dispatch({type: 'load_updated_array', newarray: sortedarray});
    }
    return (
        <Grid item xs={4}>
            <Grid container direction={`row`} justify={`space-around`}>
            <Grid item>
                {props.index === 0 ? null : (<Button justIcon round color={`primary`}><ArrowUpwardIcon/></Button>)}

            </Grid>
            <Grid item>
                {props.length === props.index + 1 ? null: (<Button justIcon round color={`primary`} onClick={() => handleMove(props.index, props.index + 1)}><ArrowDownwardIcon/></Button>)}

            </Grid>
            <Grid item>
                <Button justIcon round color={`primary`}><CancelIcon/></Button>
            </Grid>
        </Grid>
        </Grid>
    )
}