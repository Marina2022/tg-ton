import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import {Container, Grid, styled} from "@mui/material";
import Typography from "@mui/material/Typography";

const MainLayout = () => {

  const classes = {
    root: {
      display: 'flex',
      background: '#000',
      color: '#fff',
      minHeight: '100vh'
    }
  }

  
  const CustomContainer = styled(Container)(({ theme }) => ({
    // padding: theme.spacing(4),    
    
    [theme.breakpoints.up('md')]: { 
      maxWidth: 1324,
    }

    // добавьте свои стили здесь
  }));

  return (
      <>
        <Typography sx={classes.root} component="main" >
          <CustomContainer>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Sidebar/>
              </Grid>
              <Grid item xs={9}>
                <Typography component="div" sx={{width: '100%'}}>
                  <Outlet/>
                </Typography>
              </Grid>
            </Grid>
          </CustomContainer>
        </Typography>
      </>
  );
};

export default MainLayout;