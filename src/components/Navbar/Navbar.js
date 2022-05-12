import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { navbarStyles } from './styles';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEle, setAnchorEle] = React.useState(null);
    const open = Boolean(anchorEle);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClick = (event) => {
      setAnchorEle(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null); setAnchorEle(null); 
    };

    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar  src ="https://mui.com/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            variant="permanent"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate('profile')}> <Avatar  src ="https://mui.com/static/images/avatar/1.jpg" /> Jamie Doe </MenuItem>
            <MenuItem onClick={() => navigate('profile')} > <PersonIcon/>  Profile View</MenuItem>
            <MenuItem onClick={() => navigate('profile')} > <SettingsIcon/> Settings View </MenuItem>
            <MenuItem onClick={handleClose}> <LogoutIcon/> Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
        <Drawer
          sx={navbarStyles.drawer}
          variant="permanent"
          anchor="start"
      >
      <Typography variant="h3" align="center" style={{ backgroundColor: "purple" }}> TAMK </Typography>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
        <Avatar sx={{ width: 200, height: 200 }} src ="https://mui.com/static/images/avatar/1.jpg" />        
        <Typography variant="h4" sx={{ flexGrow: 1 }}> Jamie Doe </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1 }}> Engineer </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="start"
          justifyContent="start"
        >
        <Button button onClick={() => navigate('/')} > <HomeIcon/>  Home </Button>

        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEle}
        variant="permanent"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        open={Boolean(anchorEle)}
        onClose={handleClose}
      >
        <MenuItem button onClick={() => navigate('profile')} > <PersonIcon/>  Profile View </MenuItem>
        <MenuItem onClick={() => navigate('profile')} > <SettingsIcon/> Settings View </MenuItem>
        <MenuItem onClick={handleClose}> <LogoutIcon/> Logout </MenuItem>
      </Menu>

        </Grid>
      </Drawer>      
    </Box>
    );
};

export default Navbar
