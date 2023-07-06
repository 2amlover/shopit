import React from 'react'
import { Container, Typography } from '@mui/material'
import Carousel from '../../Components/Carousel/Carousel'
import SearchBar from '../../Components/SearchBar/SearchBar'
import CopyRight from '../../Components/CopyRight/CopyRight'
import Category from '../../Components/Categoriescard/Category'


const HomePage = () => {
    return (
        <>
            <Container maxWidth='xl' style={{ display: 'flex', justifyContent: "center", padding: 0, flexDirection: "column", marginBottom: 70 }}>
                
                    <Carousel />
              
                <Container style={{ marginTop: 90, display: "flex", justifyContent: 'center' }}>
                 <SearchBar/>
                </Container>
                <Typography variant='h3' sx={{ textAlign: 'center', marginTop: 10, color: '#1976d2', fontWeight: 'bold' }}>Categories</Typography>
                <Category />
                <Container maxWidth='xl' style={{ marginTop: 90, display: "flex", justifyContent: 'center', flexGrow: 1, flexWrap: 'wrap', gap: 20, }}>
                   
                </Container>
            </Container >
            <CopyRight sx={{ mt: 80, mb: 10 }} />
        </ >
    )
}

export default HomePage