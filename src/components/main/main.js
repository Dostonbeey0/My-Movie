import React, {useEffect, useState} from 'react';

import {Box, Stack, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {colors} from "../constants/colors";
import Category from "../category/category";
import {ApiService} from "../../api-service/api-servise";
import Videos from "../videos/videos";

const Main = () => {
    const [selectCategory, setselectCategory] = useState('New')
    const [videos, setvideos] = useState([])
    const handleToggle = category => setselectCategory(category);

    // console.log(videos)
    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setvideos(data.items))
    }, [selectCategory])

    return (
        <Stack>
            <Category handleToggle={handleToggle} selectCategory={selectCategory}/>
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' sx={{fontWeight: "bold", mb: 2}}>
                        <span style={{color:colors.beige}}>{selectCategory}</span> <span style={{color: colors.purple}}>Videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    );
}

export default Main;