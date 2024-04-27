import React from 'react';
import {Stack} from "@mui/material";
import {colors} from "../constants/colors";
import {Link} from "react-router-dom";
import {logo} from "../constants/constants"
import SearchBar from "../search-bar/search-bar";
import Box from "@mui/material/Box";



const Navbar=()=> {
  return (
    <Stack direction={'row'}
           justifyContent={'space-between'}
           alignItems={'center'}
           p={'2'}
           sx={{position:"sticky",zIndex:999,backgroundColor:colors.blue,p:1,}}>
      <Link to={'/'}>
        <img src={logo} alt="movie" height={60}/>

      </Link>
        <SearchBar/>
        <Box/>


    </Stack>
  );
}

export default Navbar;