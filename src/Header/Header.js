import React from 'react'

/** Material Components */
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/** styles */
import { useStyles } from './Header.styles';


export default function Header() {
  const classes = useStyles();
    return (
     <AppBar className={classes.root} position='sticky'>
       <IconButton>
        <MenuIcon />
       </IconButton>
     </AppBar>
    )
}
