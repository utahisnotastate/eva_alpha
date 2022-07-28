import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EditField from "./EditField";
import styled from "@mui/system/styled";
import Button from "@mui/material/Button";

const Item = styled("div")(({ theme }) => ({
    //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    backgroundColor: "lightgray",
    //border: "1px solid",
    //borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    //borderRadius: "4px",
    textAlign: "center"
}));

export default function FormBuilder({fields, inputs}) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    {fields && fields.length > 0 ? (
                        fields.map((field, index) => (
                            <Item key={index}>
                                <EditField
                                    label={field.label}
                                    type={`text`}
                                    options={field.options}
                                />
                            </Item>
                        ))
                    ) : (
                        <p>Add a field below</p>
                    )}
                </Grid>
            </Grid>
            <p style={{ textAlign: "center" }}>Add Field</p>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ backgroundColor: "lightgray" }}>
                {inputs.map((input, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    const mergedarray = [
                                        ...fields,
                                        { type: input.type, label: input.label }
                                    ];
                                    console.log(mergedarray);
                                    setFields(mergedarray);
                                }}>
                                {input.buttonlabel}
                            </Button>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}