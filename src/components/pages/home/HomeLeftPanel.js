import { Typography, Box, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';

import MyPlatformHandles from "../../MyPlatformHandles";

function HomeLeftPanel() {
  
  return (
    <Grid sx={{margin: '64px'}}>
        <Typography variant="h3" gutterBottom>
            Hi! I'm Caitlin Cowen
        </Typography>
        <Typography variant="body1" gutterBottom>
            I'm a creative, detail-oriented professional with a unique blend of education and experience in 
            <Box fontWeight='700' component="span" display='inline'>
                {" data engineering, design, and music theory. "}
            </Box>
            I have experience transforming complex data into engaging, user-friendly 
            <Box fontWeight='700' component="span" display='inline'>
                {" data visualizations "}
            </Box>
            to improve user experiences and drive busineess insights.
        </Typography>
        <Typography variant="h5" gutterBottom>
            {"Click "}
            <Link href="/about-me">
                here
            </Link>
             {" for a little more about me. On a more formal note, find me on LinkedIn or Github:"}
        </Typography>
        <MyPlatformHandles/>
    </Grid>
  );
}

export default HomeLeftPanel;