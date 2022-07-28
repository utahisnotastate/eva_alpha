import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";


export default function EditField({ label, type, options }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                bgcolor: "background.paper",
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: 1,
                fontWeight: "bold",
                margin: "5px"
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    m: 3,
                    minWidth: { md: 350 }
                }}>
                <Button variant="outlined" color={`error`} startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Box sx={{ color: "primary.main", fontSize: 22, minWidth: "100%" }}>
                    <TextField
                        label={label}
                        fullWidth
                        variant="outlined"
                        helperText="Please enter your name"
                    />
                    <TextField
                        label="Helper Text"
                        fullWidth
                        variant="outlined"
                        helperText="Please enter a description for the field and what to record"
                    />
                </Box>
                <Box
                    sx={{
                        mt: 1.5,
                        p: 0.5,
                        //backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        borderRadius: "5px",
                        color: "primary.main",
                        fontWeight: "medium",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: 12,
                        alignItems: "center",
                        "& svg": {
                            fontSize: 21,
                            mr: 0.5
                        }
                    }}>
                    {options && options.length > 0
                        ? options.map((option, index) => (
                            <TextField label={option.label} margin="normal" fullWidth />
                        ))
                        : null}
                    <p>Options</p>
                </Box>
            </Box>
        </Box>
    );
}