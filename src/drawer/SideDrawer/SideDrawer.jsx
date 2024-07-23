import * as React from "react";
import { useState } from "react";
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
import {
  Container,
  Col,
  Card,
  Button,
  Row,
  ProgressBar,
} from "react-bootstrap";
import girl from "../../assets/Main/HBgirl1.svg";
import girl1 from "../../assets/Main/HBimg2.svg";
import girl2 from "../../assets/Main/HBimg3.svg";
import girl3 from "../../assets/Main/HBimg4.svg";
import girl5 from "../../assets/Main/HBimg6.svg";
import girl6 from "../../assets/Main/HBimg7.svg";
import arrowbtn from "../../assets/Main/ph_caret-down.png";
import notify from "../../assets/Nav/notification.png";
import ether from "../../assets/Nav/ETH.png";
import likes from "../../assets/MenuSideDrawer/History Bid (1).png";
import Dropdown from "react-bootstrap/Dropdown";
import profile from "../../assets/Nav/unsplash_pmACe385Ruo.png";
import crdname from "../../assets/Main/Rectangle 1400.png";
import crdname1 from "../../assets/Main/Rectangle 1400 (1).png";
import crdname2 from "../../assets/Main/Rectangle 1400 (2).png";
import crdname3 from "../../assets/Main/Rectangle 1400 (3).png";
import crdname4 from "../../assets/Main/Rectangle 1400 (4).png";
import crdname5 from "../../assets/Main/Rectangle 1400 (5).png";
import verifiedtick from "../../assets/Main/Verification.png";
import proflieimg from "../../assets/sideBoxImages/Avatar.png";
import greenether from "../../assets/sideBoxImages/Green Ethereum.png";
import rightarrow from "../../assets/sideBoxImages/rightarrow.png";
import rightarrowshown from "../../assets/sideBoxImages/Arrow.png";
import crdimg1 from '../../assets/sideBoxImages/unsplash_9hz5xn0S2qg.png'
import crdimg2 from '../../assets/sideBoxImages/unsplash_fyZOY0HiF9A.png'
import idarrow from '../../assets/Nav/ph_caret-down.png'
import { BarChart } from "../CHartjs/BarChart";
import Test from "../CHartjs/Test";

const images = [
  { src: girl, name: "Stretch Of Time" },
  { src: girl1, name: "Arcade Land" },
  { src: girl2, name: "Shinsekai Portal" },
  { src: girl3, name: "Paper Cut" },
  { src: girl5, name: "Cyber Brokers" },
  { src: girl6, name: "Akuma Origins" },
];

const profileinfo = [
  { amount: "120", text: "Asset" },
  { amount: "10k", text: "Followers" },
  { amount: "70k", text: "Likes" },
  { amount: "60", text: "Biding" },
];

const topimages = [
  { src: crdname, name: "@dicar", price: "$232,102" },
  { src: crdname1, name: "@astroo2", price: "$172,023" },
  { src: crdname2, name: "@micle", price: "$92,002" },
  { src: crdname3, name: "@11 eror D.", price: "$88,024" },
  { src: crdname4, name: "@astroo2", price: "$172,023" },
  { src: crdname5, name: "@astroo2", price: "$172,023" },
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
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#0B0D21",
    },
  }),
}));

export default function MiniDrawer() {
const hoverindex = 1;

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isSubTabClicked, setIsSubTabClicked] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(hoverindex);
  const [activeTab, setActiveTab] = useState(blocks);

  const handleListItemClick = (event, index) => {
    console.log("clicked", index);
    setSelectedItem((prevIndex) => (prevIndex === index ? null : index));
  };
  
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
    <Box sx={{ display: "flex", width: "100%" }}>
      <Drawer variant="permanent" className="main-drawer">
        <div className="drawer-bg">
          <List className="divider-stly">
            {["Inbox", "Starred", "Send email", "Drafts","rating","timing"].map((text, index) => (
              <ListItem
              key={index}
              disablePadding
              className="border-color-stly"
              sx={{ display: "block",
                // borderRight:" red
               }}
              selected={selectedItem === index}
              onClick={(event) => handleListItemClick(event, index)}

              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                            // className={`m-0 list-nav2 ${activeTab === "items" ? "active" : ""}`}
                            // onClick={() => setActiveTab("items")}
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      key={index}
                      src={sidebarimges[index]}
                      alt={`img-${index}`}
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 ,display:"flex",justifyContent:'center' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider  />
          <List className="d-flex justify-content-center align-items-center flex-column">
            {sideevents.map(({ text, Path }, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: "0px",
                  }}
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
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",

                    }}
                  >
                    <img
                      key={index}
                      src={sidebrimg[index]}
                      alt={`img-${index}`}
                      style={{
                        width: "24px",
                        height: "24px",
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
          <List className="d-flex align-items-center justify-content-center">
            <img src={logout} className="logout-btn" />
          </List>
        </div>
      </Drawer>
      {/* <Content/> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#0B0D21",
          paddingTop: "45px",
          paddingBottom: "79px",
          padding: "0px",
          paddingRight: "33.93px",
          
        }}
      >
        <Toolbar className="navbr">
          <Typography
            variant="h6"
            className="adjustment-of-buttons"
            noWrap
            component="div"
          >
            <div className="search-bar-1">
              <input
                type="search"
                placeholder="Search by creator or collection"
                className="search-input"
              />
            </div>
            <div className="butns-div-spacing">
              <button className="button-1-eth-price">
                <img src={ether} />
                <p className="mb-0">3,25 ETH</p>
              </button>
              <button className="notify-btn">
                <img src={notify} />
              </button>
              <button className="create-btn">
                <p className="mb-0">Create</p>
              </button>
              <button className="connect-wallet-btn">
                <p className="mb-0">Connect Wallet</p>
              </button>
              <p className="pipe">|</p>
                  <img src={profile} className="proflie-img" />
                  <div className="id-proflie">
                    <div>
                    <h3 className="mb-0 text-start">Musfiqur Rahman</h3>
                    <p className="mb-0 text-start">ryzenpixel@gmail.com</p>
                    </div>
                     <div>
                      <img src={idarrow} className="profile-arrow"/>
                    </div>
                  </div>
            </div>
          </Typography>
        </Toolbar>
        <div>
          <div className="main-text-font">
            <h3 className="mb-0">Popular NFT’s Live Auction</h3>
            <p className="shown">
              Show More <img src={arrowbtn} />{" "}
            </p>
          </div>
          <div className="d-flex bid-imges justify-content-start align-items-center">
            <div>
              <img src={placeABidIMG} />
            </div>
            <div>
              <img src={placeABidIMG1} />
            </div>
          </div>
        </div>
        <div>
          <p className="top-sellers">⭐ Top Sellers</p>
          <div className="top-box-stlying">
            {topimages.map((img, index) => (
              <div className="top-box-stlying-inner-div">
                <img src={img.src} />
                <div>
                  <h3 className="mb-0 text-white" key={index}>
                    {img.name} <img src={verifiedtick}  className="verifiedtick"/>
                  </h3>
                  <p className="mb-0 text-white">{img.price}</p>
                </div>
              </div>
            ))}
          </div>
          <ProgressBar now={30} className="progress-bar-stly" />
        </div>
        <div>
          <p className="hotbid-text"> <span>🔥</span> Hot Bids</p>
          <Container className="m-0">
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
                        <Card.Text className="d-flex justify-content-between align-items-center ether-text mb-0">
                          <p className="mb-0">0.045 ETH</p>
                          <img src={likes} />
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0B0D21",
          paddingTop: "43.65px",
          paddingRight: "44.07px",
          paddingBottom: "44.35px",
        }}
      >
        <aside className="side-profile">
          <div className="side-profile-bg-img">
            <h3>MyProfile</h3>
            <img src={proflieimg} />
            <p className="id-name">Musfiqur Rahman</p>
          </div>
          <div className="info ">
            {profileinfo.map((img, index) => (
              <div className="">
                <div className="price-box">{img.amount}</div>
                <p className="categories">{img.text}</p>
              </div>
            ))}
          </div>
          <div className="Balance">
            <h3>Your Balance</h3>
            <div className="balance-inner-div">
              <div className="ether-num">
                {" "}
                <img src={greenether} />
                <p>4,668 ETH</p>
              </div>
              <div className="add-dropdown">
                <p>
                  Add <img src={rightarrow} />
                </p>
              </div>
            </div>
          </div>
          {/* revenu */}
          <div>
            <div className="revenue-outer-div">
              <h3 className="reveenue">Revenue</h3>
              <Dropdown className="user-id-nfts-dropdown">
                <Dropdown.Toggle id="dropdown-basic-NFTS-Month" >
                  This Month
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="chartjsbar">
            <Test/>
            </div>
          </div>
          <div className="recnt-main">
            <div className="recent-activity-heading">
              <h3>Recent Activity</h3>
              <p>
                See All <img src={rightarrowshown} />
              </p>
            </div>
            <div className="recnt-activity-cards-bg1">
              <div>
                <img src={crdimg2} className="crd-lasr-side-profile" />
              </div>
              <div className="varint-btwn-divz">
                <div className="name-n-id">
                <h3>Crystal_Art</h3>
                <p>by <span> @rudepixxel</span></p>
                </div>
                <div className="bid-info">
                  <h4>New Bid</h4>
                  <h3>6.25 ETH</h3>
                  <p>3m ago</p>
                </div>
              </div>
            </div>
            <div className="recnt-activity-cards-bg">
            <div>
                <img src={crdimg1} className="crd-lasr-side-profile" />
              </div>
              <div className="varint-btwn-divz">
                <div className="name-n-id">
                <h3>Creative Art</h3>
                <p>
                  by <span>@songkang</span>
                </p>
                </div>
                <div className="bid-info">
                  <h4>New Bid</h4>
                  <h3>7.50 ETH</h3>
                  <p>3m ago</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </Box>
    </Box>
  );
}
