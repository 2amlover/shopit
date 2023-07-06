import { Typography } from '@mui/material'
import React from 'react'


const CopyRight = (props) => {
    return (
        <a >

            <Typography variant="body1" fontWeight="bold" color="text.secondary" align="center" {...props} style={{ color: '#1976d2',  }}>
                {'2023 '}
               
                {' © '}
                Developed By 2amlover
            </Typography>
        </a>
    )
}

export default CopyRight