import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../util/useAuth';

const pages = [
	{ page: 'Home', path: '/' },
	{ page: 'Education', path: '/education' },
	{ page: 'Experience', path: '/experience' },
	{ page: 'Technologies', path: '/technologies' },
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const navigate = useNavigate();
	const user = useAuth();
	const settings = user.isAuth()
		? [
				{ page: 'Contact', path: '/contact' },
				{ page: 'Project', path: '/project' },
		  ]
		: [
				{ page: 'Contact', path: '/contact' },
				{ page: 'Login', path: '/auth' },
		  ];

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem('user');
		handleCloseUserMenu();
		navigate('/');
	};

	return (
		<AppBar position="relative">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						Jasmin Adilovic
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							style={{ backgroundColor: 'green' }}
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<Link to={page.path} key={page.page}>
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography variant="h6" color="black" textAlign="center">
											{page.page}
										</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						style={{ marginRight: 10 }}
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						Jasmin Adilovic
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Link
								key={page.page}
								style={{ textDecoration: 'none', color: 'white' }}
								to={page.path}
							>
								<Button
									variant="outlined"
									color="inherit"
									onClick={handleCloseNavMenu}
									sx={{ mr: 5, my: 2, color: 'white', display: 'block' }}
								>
									{page.page}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Contact Info">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar sx={{ bgcolor: 'orange' }}>
									<MenuOpenIcon />
								</Avatar>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((item) => (
								<Link to={item.path} key={item.page}>
									<MenuItem onClick={handleCloseUserMenu}>
										<Typography variant="h6" color="black" textAlign="center">
											{item.page}
										</Typography>
									</MenuItem>
								</Link>
							))}
							{user.isAuth() && (
								<MenuItem onClick={handleLogout}>
									<Typography variant="h6" color="black" textAlign="center">
										Logout
									</Typography>
								</MenuItem>
							)}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
