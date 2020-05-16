import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({isAuth,loginUser,handleLogout}) => {
    const classes = useStyles();

    return (
        <div className={s.header}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Social Network
                        </Typography>
                        {isAuth
                        ? <span className={s.logout}>{loginUser} <ExitToAppIcon onClick={()=>{handleLogout()}}/></span>
                        :<NavLink to="/login" className={s.login}>
                                <Button color="inherit" >Login</Button>
                            </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}
export default Header;