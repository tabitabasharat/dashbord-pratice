import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Content from "../Content/Content";
import logo from "../../assets/MenuSideDrawer/Group.png";
import blocks from "../../assets/MenuSideDrawer/Home.png";
import msg from "../../assets/MenuSideDrawer/Message.png";
import crt from "../../assets/MenuSideDrawer/Buy.png";
import activity from "../../assets/MenuSideDrawer/Activity.png";
import time from "../../assets/MenuSideDrawer/Time Circle.png";
import wallet from "../../assets/MenuSideDrawer/Wallet.png";
import ppl from "../../assets/MenuSideDrawer/Friends.png";
import setting from "../../assets/MenuSideDrawer/Settings.png";
import "./SideDrawer.css";
import logout from "../../assets/MenuSideDrawer/Log Out.png";
import home from "../../assets/MenuSideDrawer/Group.png";
import placeABidIMG from "../../assets/Main/live auction 2.png";
import placeABidIMG1 from "../../assets/Main/live auction 1.png";
import { Container, Col, Card, Button, Row, ProgressBar } from "react-bootstrap";
import girl from "../../assets/Main/HBgirl1.svg";
import girl1 from "../../assets/Main/HBimg2.svg";
import girl2 from "../../assets/Main/HBimg3.svg";
import girl3 from "../../assets/Main/HBimg4.svg";
import girl5 from "../../assets/Main/HBimg6.svg";
import girl6 from "../../assets/Main/HBimg7.svg";
import arrowbtn from "../../assets/Main/ph_caret-down.png";

const images = [
  { src: girl, name: "Stretch Of Time" },
  { src: girl1, name: "Arcade Land" },
  { src: girl2, name: "Shinsekai Portal" },
  { src: girl3, name: "Paper Cut" },
  { src: girl5, name: "Cyber Brokers" },
  { src: girl6, name: "Akuma Origins" },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  
  "& .MuiDrawer-paper": {
    backgroundColor: 'red',
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
        ...openedMixin(theme),
        backgroundColor: 'red',
      },

   
  }),
  ...(!open && {
    ...closedMixin(theme),
"& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: '#0B0D21',
    },

  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isSubTabClicked, setIsSubTabClicked] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sidebarimges = [home, blocks, msg, crt, activity, time, setting];
  const sidebrimg = [wallet, ppl, setting];
  const sideevents = [
    { text: "Pending Event", Path: "/Pending" },
    { text: "Approved Event", Path: "/Approve" },
    { text: "Upcoming Event", Path: "/Upcoming" },
  ];
  const handleSubTabClick = () => {
    setIsSubTabClicked(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: " #0B0D21",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              // backgroundColor:"#161A42",
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div>
              <input
                type="search"
                placeholder="Search by creator or collection"
                className="search-input"
              />
            </div>
            <div></div>
            <div></div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" >
        <div
        //   className="drawer-bg"
        //   sx={{
        //     backgroundColor: "#0B0D21",
        //   }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                  //   sx={{
                  //     minWidth: 0,
                  //     mr: open ? 3 : "auto",
                  //     justifyContent: "center",
                  //   }}
                  >
                    <img
                      key={index}
                      src={sidebarimges[index]}
                      alt={`img-${index}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        margin: "10px",
                      }}
                    />
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {sideevents.map(({ text, Path }, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to={Path}
                  // component={Link}
                  onClick={handleSubTabClick}
                >
                  {/* {" "}
                sx=
                {{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }} */}
                  <ListItemIcon
                  //   sx={{
                  //     minWidth: 0,
                  //     mr: open ? 3 : "auto",
                  //     justifyContent: "center",
                  //   }}
                  >
                    <img
                      key={index}
                      src={sidebrimg[index]}
                      alt={`img-${index}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        margin: "10px",
                      }}
                    />
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            <img src={logout} className="logout-btn" />
          </List>
        </div>
      </Drawer>
      {/* <Content/> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#0B0D21" }}
      >
        <DrawerHeader />
        {/* <div>
          <div className="main-text-font">
            <h3>Popular NFT’s Live Auction</h3>
            <p>Show More <img src={arrowbtn}/> </p>
          </div>
          <div className="d-flex bid-imges justify-content-start align-items-center">
            <div>
              <img src={placeABidIMG} />
            </div>
            <div>
              <img src={placeABidIMG1} />
            </div>
          </div>
        </div> */}
        <div>
          <p className="top-sellers">⭐ Top Sellers</p>
          <div></div>
          <ProgressBar now={40} className=""/>
        </div>
        {/* <div>
          <p className="hotbid-text">🔥 Hot Bids</p>
          <Container>
              <Row className="nfts-boxes-divs-stlye">
                {images.map((img, index) => (
                    <Col key={index} className="p-0 crd-derction ">
                      <Card className="image-card">
                        <Card.Img variant="top" src={img.src} alt={img.name} />
                        <Card.Body>
                          <Card.Title className="title-names mb-0">
                            {img.name}
                          </Card.Title>
                          <div className="card-info">
                            <Card.Text className="d-flex ether-text mb-0">
                                <p className="mb-0">0.045 ETH</p>
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
          </Container>
        </div>  */}
      </Box>
    </Box>
  );
}
