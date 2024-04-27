import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import {ApiService} from "../../api-service/api-servise";
import {colors} from "../constants/colors";
import Videos from "../videos/videos";

const Search = () => {

    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${id}`).then(data => setVideos(data.items))
    }, [id])
    return (
        <Box p={2} mt={'50px'} sx={{height: '120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold', mb:'20px' , ml:'15px'}}>
                    <strong className='id-search-text'>Search for results <span style={{color: colors.purple}}>{id}</span> videos</strong>
                </Typography>
                <Videos videos={videos}/>
            </Container>
        </Box>
    );
}

export default Search;