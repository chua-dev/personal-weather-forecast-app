import { CircularProgress, Box } from '@mui/material';
import React from 'react';

function LoadingPage(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <CircularProgress sx={{ color: 'rgba(255,255,255, .8)' }} />
            {props.children}
        </Box>
    )
}

export default LoadingPage;