import React from 'react';
import {Card, CardMedia, CardContent, Typography, Avatar, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {colors} from "../constants/colors";
import moment from "moment";
import {Link} from "react-router-dom";



const VideoCard = ({video}) => {
    return (
        <Card
            sx={{width: {xs:'100%', sm: '350px', md: '320px'},margin:'auto', justifyContent:'space-evenly', boxShadow: 'none',backgroundColor:colors.beige, borderRadius: 0}}
        >
          <Link to={`/video/${video.id.videoId}`}>
              <CardMedia
                  image={video?.snippet?.thumbnails?.high?.url}
                  alt={video?.snippet?.title}
                  sx={{width: {xs:'100%', sm: '350px', md: '320px'},  height: '180px'}}
              />
          </Link>
            <CardContent sx={{background: colors.beige, height: '200px', position: 'relative'}}>
                <Typography my={'5px'} sx={{color:'rgba(0,0,0,.8)', opacity: '.4'}}>
                    {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
                <Typography variant='subtitle1'sx={{color:'rgba(0,0,0,.8)'}} fontWeight={'bold'}>
                    {video?.snippet?.title.slice(0, 50)}
                </Typography>
                <Typography variant='subtitle2' sx={{ color:'rgba(0,0,0,.6)',opacity: '.8'}}>
                    {video?.snippet?.description.slice(0, 30)}
                </Typography>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >

                       <Link to={`/channel/${video.id.channelId}`}>
                           <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                           <Typography variant={'subtitle2'}  sx={{color:'rgba(0,0,0,.7)'}}>
                               {video?.snippet?.channelTitle}
                               <CheckCircle color={colors.purple} sx={{fontSize: '12px', ml: '5px'}}/>
                           </Typography>
                       </Link>
                    </Stack>
            </CardContent>
        </Card>
    )
}

export default VideoCard;