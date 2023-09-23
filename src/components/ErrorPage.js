import { Box, Typography } from '@mui/material';
import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorPage(props) {
    return (
        <Box
            display={props.display || 'flex'}
            justifyContent={props.justifyContent || 'center'}
            alignItems={props.alignItems || 'center'}
            margin={props.margin || '1rem auto'}
            gap={props.gap || '8px'}
            flex={props.flex || 'auto'}
            width={props.width || 'auto'}
            sx={{
                padding: '1rem',
                flexDirection: { xs: 'column', sm: 'row' },
                color: props.type === 'info' ? '#f5a922' : '#DC2941',
                border:
                props.type === 'info' ? '1px solid #f5a922' : '1px solid #DC2941',
                borderRadius: '8px',
                background:
                props.type === 'info'
                    ? 'rgba(245, 169, 34, .1)'
                    : 'rgba(220, 41, 65, .25)',
            }}
            >
            <ErrorOutlineIcon sx={{ fontSize: '24px' }} />

            <Typography
                variant="h2"
                component="h2"
                sx={{
                fontSize:
                    props.type === 'info'
                    ? { xs: '12px', sm: '14px' }
                    : { xs: '14px', sm: '16px' },
                fontFamily: 'Poppins',
                textAlign: 'center',
                }}
            >
                {props.errorMessage || 'Loading Error in your'}
            </Typography>
        </Box>
    )
}

export default ErrorPage;