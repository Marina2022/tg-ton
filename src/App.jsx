import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
// import { ThemeProvider} from "@mui/material";
//import {createTheme} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainLayout from "./components/layout/MainLayout.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Notifications from "./pages/Notifications.jsx";
import Calls from "./pages/Calls.jsx";
import {TonConnectUIProvider} from "@tonconnect/ui-react";


const MyTheme = createTheme({

  palette: {
    primary: {
      main: '#f54f33'
    }, 
    text: {
      primary: '#ffffff'
    },
    background: {
      // paper: '',
      default: '#000'
    }    
  }
})

function App() {
  
  const manifestUrl = "https://alefmanvladimir.github.io/my-twa/tonconnect-manifest.json"
  

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <ThemeProvider theme={MyTheme}>
        <Router>
          <Routes>            
            <Route element={<MainLayout/>}>              
              <Route path='/calls' element={<Calls/>}/>              
              <Route path='/notifications' element={<Notifications/>}/>              
              <Route path='/profile' element={<Profile/>}/>              
              <Route path='/dashboard' element={<Dashboard/>}/>              
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </TonConnectUIProvider>
  )
}

export default App
