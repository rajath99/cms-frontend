// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import Tooltip from '@mui/material/Tooltip';
// // import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';
// // import { Link } from 'react-router-dom';

// // // ICONS
// // import LoginIcon from '@mui/icons-material/Login';
// // import { useSelector } from 'react-redux';
// // import { useTheme } from '@emotion/react';
// // import { AuthContext } from '../../../context/AuthContext';


// // import("./Navbar.css")


// // function Navbar() {
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState(null);
// //   const { authenticated, user } = React.useContext(AuthContext);
// //   const  [dashboardLink, setDashboardLink] = React.useState('/')
// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null);
// //   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
// //   };
// //   const theme = useTheme();

// //   return (
// //     <AppBar style={{
// //       backgroundColor: theme.palette.background.paper,
// //       color: theme.palette.text.primary,
// //       padding: '20px 0',
// //       textAlign: 'center',
// //       marginTop: 'auto',
// //     }}
// //      position="static">
// //       <Container maxWidth="xl">
// //         <Toolbar disableGutters>
// //           <Link className="nav-list" style={{textDecoration:"none"}} to={'/'}>
// //             <Typography
// //               variant="h6"
// //               sx={{
// //                 mr: 2,
// //                 display: { xs: 'none', md: 'flex' },
// //                 fontFamily: 'monospace',
// //                 fontWeight: 700,
// //                 letterSpacing: '.3rem',
// //                 color: 'inherit',
// //                 alignItems:"center"
// //               }}
// //               className='text-beautify'
// //             >
// //               <div className="flex items-center">
// //   <img
// //     src="./images/static/school_management_system.jpeg"
// //     alt="School Logo"
// //     className="h-24 w-24 rounded-full object-cover mr-4 float-left"
// //   />
// //   <span className="text-xl font-semibold">
// //     Campus Management System
// //   </span>
// // </div>          
// //             </Typography>

// //           </Link>


// //           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //             <IconButton
// //               size="large"
// //               aria-label="account of current user"
// //               aria-controls="menu-appbar"
// //               aria-haspopup="true"
// //               onClick={handleOpenNavMenu}
// //               color="inherit"
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               id="menu-appbar"
// //               anchorEl={anchorElNav}
// //               anchorOrigin={{
// //                 vertical: 'bottom',
// //                 horizontal: 'left',
// //               }}
// //               keepMountedH
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'left',
// //               }}
// //               open={Boolean(anchorElNav)}
// //               onClose={handleCloseNavMenu}
// //               sx={{ display: { xs: 'block', md: 'none' } }}
// //             >
           

            

// //              {!authenticated && <><MenuItem onClick={handleCloseNavMenu}>
// //                 <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
// //                   <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
// //                     Register
// //                   </Box>
// //                 </Button>
// //               </MenuItem>
              
// //               <MenuItem onClick={handleCloseNavMenu}>
// //               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
// //                 <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
// //                 <LoginIcon sx={{ marginRight: "5px" }} />
// //                  Login
// //                 </Box>
// //               </Button>
// //             </MenuItem>
// //             </>
// //               }
             

             

// //             </Menu>
// //           </Box>

// //           <Link className="nav-list" to={'/'}>
// //             <Typography
// //               variant="h5"
// //               noWrap
// //               component="a"
// //               sx={{
// //                 mr: 2,
// //                 display: { xs: 'flex', md: 'none' },
// //                 flexGrow: 1,
// //                 fontFamily: 'monospace',
// //                 fontWeight: 700,
// //                 letterSpacing: '.3rem',
// //                 color: 'inherit',
// //                 textDecoration: 'none',
// //               }}
// //               className='text-beautify'
// //             >
// //               SMS
// //             </Typography></Link>


      
// //           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
// //           {!authenticated && 
// //           <>
         
// //             <Link className="nav-list" to={'/login'}>
// //               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
// //                 <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
// //                   <LoginIcon sx={{ marginRight: "5px" }} />
// //                   Login
// //                 </Box>
// //               </Button>
// //             </Link>
          
// //             <Link className="nav-list" to={'/register'}>
// //               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
// //                 <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
// //                   Register
// //                 </Box>
// //               </Button>
// //             </Link>
// //           </>}
          


// //            {authenticated && 
// //            <Link className="nav-list" to={'/logout'}>
// //            <Button className='button-beautify button-beautify-danger' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white',  }} >
// //                <Box sx={{display: 'flex', flexDirection: 'row'}} className="button-box">
// //                Log Out
// //                </Box>
// //              </Button>
// //            </Link>
// //            }
            
// //             {authenticated && <Link className="nav-list" to={`${user.role.toLowerCase()}`}>
// //               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white'}} >
// //               <Box sx={{display: 'flex', flexDirection: 'row',color:"#fff",zIndex:999}} className="button-box">
// //                 Dashboard
// //                 </Box>
// //               </Button>
// //             </Link>}
            
// //           </Box>
// //         </Toolbar>
// //       </Container>
// //     </AppBar>
// //   );
// // }
// // export default Navbar;



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link } from 'react-router-dom';

// // ICONS
// import LoginIcon from '@mui/icons-material/Login';
// import { useSelector } from 'react-redux';
// import { useTheme } from '@emotion/react';
// import { AuthContext } from '../../../context/AuthContext';


// import("./Navbar.css")


// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const { authenticated, user } = React.useContext(AuthContext);
//   const  [dashboardLink, setDashboardLink] = React.useState('/')
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const theme = useTheme();

//   return (
//     <AppBar style={{
//       backgroundColor: theme.palette.background.paper,
//       color: theme.palette.text.primary,
//       padding: '20px 0',
//       textAlign: 'center',
//       marginTop: 'auto',
//     }}
//      position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Link className="nav-list" style={{textDecoration:"none"}} to={'/'}>
//             <Typography
//               variant="h6"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 alignItems:"center"
//               }}
//               className='text-beautify'
//             >
//               <div className="flex items-center">
//   <img
//     src="./images/static/school_management_system.jpeg"
//     alt="School Logo"
//     className="h-32 w-32 rounded-full object-cover mr-4"
//   />
//   <span className="text-xl font-semibold">
//      CAMPUS MANAGEMENT SYSTEM
//   </span>
// </div>          
//             </Typography>

//           </Link>


//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMountedH
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
           

            

//              {!authenticated && <><MenuItem onClick={handleCloseNavMenu}>
//                 <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
//                   <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
//                     Register
//                   </Box>
//                 </Button>
//               </MenuItem>
              
//               <MenuItem onClick={handleCloseNavMenu}>
//               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
//                 <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
//                 <LoginIcon sx={{ marginRight: "5px" }} />
//                  Login
//                 </Box>
//               </Button>
//             </MenuItem>
//             </>
//               }
             

             

//             </Menu>
//           </Box>

//           <Link className="nav-list" to={'/'}>
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'flex', md: 'none' },
//                 flexGrow: 1,
//                 fontFamily: "Inter, sans-serif",
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: '#1976d2',
//                 textDecoration: 'underline wavy red',
//                 textDecorationThickness: '3px',
//                 textUnderlineOffset: '6px',
//                 transition: 'all 0.3s ease',
//                 transition: 'all 0.3s ease',
//                '&:hover': {
//                 color: '#d32f2f',                  // hover color
//                 textDecorationColor: '#d32f2f'
//                 }
//               }}
//             }
//               className='text-beautify'
//             >
//               SMS
//             </Typography></Link>


      
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
//           {!authenticated && 
//           <>
         
//             <Link className="nav-list" to={'/login'}>
//               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
//                 <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
//                   <LoginIcon sx={{ marginRight: "5px" }} />
//                   Login
//                 </Box>
//               </Button>
//             </Link>
          
//             <Link className="nav-list" to={'/register'}>
//               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', }} >
//                 <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
//                   Register
//                 </Box>
//               </Button>
//             </Link>
//           </>}
          


//            {authenticated && 
//            <Link className="nav-list" to={'/logout'}>
//            <Button className='button-beautify button-beautify-danger' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white',  }} >
//                <Box sx={{display: 'flex', flexDirection: 'row'}} className="button-box">
//                Log Out
//                </Box>
//              </Button>
//            </Link>
//            }
            
//             {authenticated && <Link className="nav-list" to={`${user.role.toLowerCase()}`}>
//               <Button className='button-beautify button-beautify-one' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white'}} >
//               <Box sx={{display: 'flex', flexDirection: 'row',color:"#fff",zIndex:999}} className="button-box">
//                 Dashboard
//                 </Box>
//               </Button>
//             </Link>}
            
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

// ICONS
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from '@emotion/react';
import { AuthContext } from '../../../context/AuthContext';

import("./Navbar.css")

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { authenticated, user } = React.useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();

  return (
    <AppBar
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO + TITLE */}
          <Link className="nav-list" style={{ textDecoration: "none" }} to={'/'}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                alignItems: "center",
              }}
              className='text-beautify'
            >
              <div className="flex items-center">
                <img
                  src="./images/static/school_management_system.jpeg"
                  alt="School Logo"
                  className="h-32 w-32 rounded-full object-cover mr-4"
                />
                <span className="text-xl font-semibold">
                  CAMPUS MANAGEMENT SYSTEM
                </span>
              </div>
            </Typography>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {!authenticated && (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      className='button-beautify button-beautify-one'
                      sx={{ my: 2, color: 'white' }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
                        Register
                      </Box>
                    </Button>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      className='button-beautify button-beautify-one'
                      sx={{ my: 2, color: 'white' }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
                        <LoginIcon sx={{ marginRight: "5px" }} />
                        Login
                      </Box>
                    </Button>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          {/* MOBILE TITLE */}
          <Link className="nav-list" to={'/'}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#1976d2',
                textDecoration: 'underline wavy red',
                textDecorationThickness: '3px',
                textUnderlineOffset: '6px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#d32f2f',
                  textDecorationColor: '#d32f2f',
                },
              }}
              className='text-beautify'
            >
              SMS
            </Typography>
          </Link>

          {/* DESKTOP ACTION BUTTONS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
            {!authenticated && (
              <>
                <Link className="nav-list" to={'/login'}>
                  <Button
                    className='button-beautify button-beautify-one'
                    sx={{ my: 2, color: 'white' }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
                      <LoginIcon sx={{ marginRight: "5px" }} />
                      Login
                    </Box>
                  </Button>
                </Link>

                <Link className="nav-list" to={'/register'}>
                  <Button
                    className='button-beautify button-beautify-one'
                    sx={{ my: 2, color: 'white' }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
                      Register
                    </Box>
                  </Button>
                </Link>
              </>
            )}

            {authenticated && (
              <Link className="nav-list" to={'/logout'}>
                <Button
                  className='button-beautify button-beautify-danger'
                  sx={{ my: 2, color: 'white' }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row' }} className="button-box">
                    Log Out
                  </Box>
                </Button>
              </Link>
            )}

            {authenticated && (
              <Link className="nav-list" to={`${user.role.toLowerCase()}`}>
                <Button
                  className='button-beautify button-beautify-one'
                  sx={{ my: 2, color: 'white' }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', color: "#fff", zIndex: 999 }} className="button-box">
                    Dashboard
                  </Box>
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
