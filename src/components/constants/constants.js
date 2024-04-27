import {
    Checkroom, DeveloperMode, FaceRetouchingNatural,
    FitnessCenter,
    GraphicEq,
    Home,
    LiveTv, MusicNote,
    OndemandVideo,
    School,
    SportsEsports,
    TheaterComedy
} from "@mui/icons-material";

export const logo='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Movies%21_logo.svg/1200px-Movies%21_logo.svg.png'

export const category = [
    {name:'New', icon:<Home/>},
    {name:'Movie', icon:<OndemandVideo/>},
    { name: 'Live', icon: <LiveTv /> },
    { name: 'Gaming', icon: <SportsEsports /> },
    { name: 'Education', icon: <School /> },
    { name: 'Sport', icon: <FitnessCenter /> },
    { name: 'Comedy', icon: <TheaterComedy /> },
    { name: 'Podcast', icon: <GraphicEq /> },
    { name: 'Fashion', icon: <Checkroom /> },
    { name: 'Crypto', icon: <DeveloperMode /> },
    { name: 'Gym', icon: <FitnessCenter /> },
    { name: 'Beauty', icon: <FaceRetouchingNatural /> },
    { name: 'Music', icon: <MusicNote /> },

]