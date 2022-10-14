import React from 'react';
import {useLocation} from "react-router-dom";
import {Box, Typography} from"@mui/material";


const AboutCharacter = () => {
    const location= useLocation();

    const char= location?.state?.item;
    return (
        <>
            <Box>
                <Typography>{char.name}</Typography>
            </Box>
        </>
    );
};

export default AboutCharacter;