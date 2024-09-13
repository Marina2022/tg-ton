import {Box, Grid} from "@mui/material";
import TabsComponent from "../components/Tabs.jsx";
import WithMenu from "../components/WithMenu.jsx";
import {TonConnectButton} from "@tonconnect/ui-react";
import {useTonConnect} from "../hooks/useTonConnect.js";
// import WithMenu from "../components/WithMenu.jsx";

const Dashboard = () => {
  
  
  const data  = useTonConnect()

  console.log(data)
  
  return (
    <div>
      <Box sx={{marginTop: 3}}>

        <Grid container spacing={3}>

          <Grid item md={5} xs={12} sx={{height: '300px'}}>
            <TabsComponent/>
          </Grid>
          <Grid item md={5} xs={12}>middle</Grid>
          <Grid item md={2} xs={12}>
            <WithMenu/>
          </Grid>
        </Grid>
      </Box>
      
      <Box>
        <TonConnectButton/>
        
        <Box sx={{border: '1px yellow solid', padding: 10, color: 'white', marginTop:20}}>{data.network}</Box>
        
      </Box>

    </div>


  )
    ;
};

export default Dashboard;