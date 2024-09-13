import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from "@mui/material/IconButton";
import {Box, Fade, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
const WithMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
      <Box>

        <IconButton onClick={handleClick} id="fade-button" variant="contained" sx={{color: 'white', border: 'gray 1px solid', padding: '2px'}}>

          <MoreHorizIcon color="white"/>
        </IconButton>
              
          <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
          >
            <MenuItem sx={{color: 'black'}} onClick={handleClose}>Profile</MenuItem>
            <MenuItem sx={{color: 'black'}} onClick={handleClose}>My account</MenuItem>
            <MenuItem sx={{color: 'black'}} onClick={handleClose}>Logout</MenuItem>
          </Menu>
        
      </Box>
  );
};

export default WithMenu;