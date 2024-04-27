import React from 'react';
import {Box} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader=()=> {
    return (
        <Box
        sx={{ mt:30, ml:'46%'}}
        ><CircularProgress /></Box>
    );
}

export default Loader;