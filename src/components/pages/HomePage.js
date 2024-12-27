import { Typography, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid2';

import MyLogoHeader from "../MyLogoHeader";


function HomePage() {

  return (
    <>
        <Grid container spacing={0}>
            <Grid 
                size={8}
                sx={{ backgroundColor: '#B3CAF2', height: '100vh'}}
            >
                <MyLogoHeader/>
                <Grid container direction={"column"} sx={{ alignItems: 'center', justifyContent: "space-evenly" }} >
                    <Grid item>
                        <Typography variant="body">
                            test test test
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid
                size={4}
                sx={{ 
                    backgroundColor: '#FCFCFC',
                  }}
            >
            </Grid>
        </Grid>
    </>
        /* <ArticleTextWrapper>

            <MySectionTitle style={{marginBottom: '20px'}}>
                Caitlin Cowen
            </MySectionTitle>

            <MyParagraph>
                Hi, I haven't dovoted time to create a homepage, 
                but I wanted to get my contact info on here. :)
            </MyParagraph>
            <Aside>
                <IconButton onClick={() => window.open('mailto:c.cowen111@gmail.com')}>
                    <EmailIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => window.open('https://github.com/ccowen')}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </Aside> 

        </ArticleTextWrapper>*/

  )
}

export default HomePage;