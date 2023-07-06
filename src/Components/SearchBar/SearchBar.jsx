import {TextField } from "@mui/material";

const SearchBar = () => {
    return (
      
            <TextField
                id="search"
                type="search"
                label="Search Products"
                sx={{ width: { xs: 350, sm: 500, md: 800 }, }}
            />
       
    )
}

export default SearchBar