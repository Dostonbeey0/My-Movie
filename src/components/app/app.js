import React from 'react';
import Box from "@mui/material/Box";
import Navbar from "../navbar/navbar";
import Main from "../main/main";
import Channel from "../channel/channel";
import {Routes,Route} from "react-router-dom"
import VideoDetil from "../video-ditel/video-detil";
import Videos from "../videos/videos";
import Search from "../search/search";

const App=()=> {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/channel/:id'} element={<Channel/>}/>
        <Route path={'/videos/:id'} element={<Videos/>}/>
        <Route path={'/video/:id'} element={<VideoDetil/>}/>
        <Route path={'/search/:id'} element={<Search/>}/>
      </Routes>
    </Box>  );
}

export default App;