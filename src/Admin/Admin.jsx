import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GroupIcon from '@mui/icons-material/Group';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import QueueIcon from '@mui/icons-material/Queue';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

const drawerWidth = 240;

const Admin = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const menu = [
        { name: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
        { name: "Products", path: "/admin/products", icon: <Inventory2Icon /> },
        { name: "Users", path: "/admin/users", icon: <GroupIcon /> },
        { name: "Orders", path: "/admin/orders", icon: <BorderAllIcon /> },
        { name: "Add Products", path: "/admin/product/create", icon: <QueueIcon /> },
    ];

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Toolbar />
            <List>
                {menu.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <Link to={item.path} style={{ textDecoration: 'none' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                                <ListItemText
                                    primary={item.name}
                                    sx={{ fontWeight: 'bold', color: 'white' }}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account" sx={{ color: 'white' }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex',}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#2c3e50',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth } ,flexShrink: { sm: 0 } }}
                aria-label="sidebar"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={toggleDrawer}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            bgcolor: '#34495e',
                            color: 'white',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            bgcolor: '#34495e',
                            color: 'white',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    bgcolor: '#ecf0f1',
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Admin;
