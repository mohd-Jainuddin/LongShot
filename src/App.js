import * as React from "react";
import './App.css';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AttractionsIcon from "@mui/icons-material/Attractions";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img src= alt='logo'/>
      <div className="first_div">
        <p>project</p>
        <h4>My First Project</h4>
      </div>
      {/* <Toolbar /> */}
      <Divider />
      <List>
        {["Dashboard", "Recipes"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <DashboardIcon /> : <ArticleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Blog",
          "Templates",
          "Favorites",
          "Custom Template",
          "Integrations",
          "Semrush",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <ArticleIcon />
                ) : index === 1 ? (
                  <ArtTrackIcon />
                ) : index === 2 ? (
                  <FavoriteIcon />
                ) : index === 3 ? (
                  <CircleIcon />
                ) : index === 4 ? (
                  <IntegrationInstructionsIcon />
                ) : (
                  <AttractionsIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
        <div className="header top">
          <p className="para">keyword Explorer &gt; Keyword Overview</p>
          Keyword: shopping in barcelona
          <p className="para">Database: United States</p>
        </div>
      </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <div className="container">
            <div className="big_box"></div>
            <div className="three_box">
              <div className="box">
                <p>intel</p>
                <button>Commercial</button>
              </div>
              <div className="box">
                <p>Results</p>
                <h2>313M</h2>
              </div>
              <div className="box box3">
                <div>
                  <p>CPC</p>
                  <h2>$0.12</h2>
                </div>
                <div>
                  <p>Com.</p>
                  <h2>0.24</h2>
                </div>
              </div>
            </div>
          </div>
        </Typography>
        <Typography paragraph>para 2</Typography>
      </Box>
    </Box>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
