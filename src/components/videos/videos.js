import React from 'react';
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import VideoCard from "../video-card/video-card";
import Loader from "../loader/loader";
import ChannelCard from "../channel-card/channel-card";

const Videos = ({videos}) => {
if(videos.length === 0) return <Loader/>
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'start'}
            alignItems={'center'}
            gap={2}
        >
            {videos.map((item) => (
                <Box sx={{mx:'auto'}} key={item.id.videoId}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard video={item}/>}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;