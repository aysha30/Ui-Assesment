    import React from 'react';
    import Drawer from '@material-ui/core/Drawer';
    import Hidden from '@material-ui/core/Hidden';
    import IconButton from '@material-ui/core/IconButton';
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemText from '@material-ui/core/ListItemText';
    import SortOutlinedIcon from '@material-ui/icons/SortOutlined';
    import Toolbar from '@material-ui/core/Toolbar';
    import Typography from '@material-ui/core/Typography';
    import { makeStyles} from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
        backgroundColor: "#fff",
        elevation: 0
    },
    toolbar: {
        marginBottom: 60
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
    }));

    function NavDrawer(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerMob = (
        <div>
        <List style={{padding: '50px 0px'}}>
            {['About', 'Services', 'Cuisine', 'Gallery', 'Contact', 'Book'].map((text, index) => (
            
            <ListItem style={{padding: '15px 50px 15px'}} button key={text}>
                <ListItemText style={(text ==='About')?{textDecoration: 'line-through red', color: "#959595"}:{textDecoration: 'none', color: "#959595"}} primary={text} />
            </ListItem>
            ))}
        </List>
        
        </div>
    );
    const drawer = (
        <div >
        <Typography style={{fontWeight: 'bold',fontFamily: 'Playfair Display, serif',paddingTop: 20,paddingLeft: 30,marginLeft: -80,paddingBottom: 30}} variant="h4">
            Lorem<br/>Ipsum
        </Typography>
        <List style={{paddingLeftt: 20, marginLeft: 30}}>
            {['About', 'Services', 'Cuisine', 'Gallery', 'Contact', 'Book'].map((text, index) => (
            
            <ListItem style={{padding: "10%"}} button key={text}>
                <ListItemText style={(text ==='About')?{textDecoration: 'line-through red', color: "#959595"}:{textDecoration: 'none', color: "#959595"}} primary={text} />
            </ListItem>
            ))}
        </List>

        <Button style={{textTransform: 'none', backgroundColor: "#fe4d50", color: "#fff", borderRadius: 50, padding: '15px 50px', fontSize: 15}}>
            Cart
        </Button>
        </div>
    );


    return (
        <div className={classes.root}>
        <Hidden smUp implementation="css">
            <Toolbar
                
                open={mobileOpen}
                onClose={handleDrawerToggle}
                modalprops={{
                keepMounted: true,
                }}
            >
            <Grid style={{width: "90vw"}} container direction="row" alignItems="center" justifyContent="space-between">
            <Grid item>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                style={{color: '#fe4d50'}}
                >
                    <SortOutlinedIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <Typography style={{fontWeight: 'bold',fontFamily: 'Playfair Display, serif', color: '#000'}} variant="h5" noWrap>
                    Lorem
                </Typography>
            </Grid>
            <Grid item>
                <IconButton
                color="inherit"
                edge="end"
                style={{color: '#fe4d50'}}
                >
                    <ShoppingCartOutlinedIcon />
                </IconButton>
            </Grid>
            </Grid>
            </Toolbar>
        </Hidden>
        
        <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, 
                }}
            >
                {drawerMob}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
            style={{outline:'none'}}
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
            </Hidden>
        </nav>
        
        </div>
    );
    }



    export default NavDrawer;
