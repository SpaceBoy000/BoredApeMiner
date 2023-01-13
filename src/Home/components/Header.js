import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";
import Connect from "./Connect";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

import { Link } from 'react-router-dom'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { config } from "../../config"

import TwitterIcon from '@mui/icons-material/Twitter';  
import TelegramIcon from '@mui/icons-material/Telegram';
import { FaDiscord } from 'react-icons/fa';
import { BscscanIcon } from "../../components/Icons";
import { SiBinance } from 'react-icons/si';
import logoImg from "../assets/logo_color.png";


const Wrapper = styled("div")(({ theme }) => ({
  // position: "fixed",
  // zIndex: "40",
  // left: 0,
  // top: 0,
  // right: 0,
  // background: "#141618",
  // boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
  paddingTop:'20px',
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const AdvPanel = styled("div")(({ theme }) => ({
  background: theme.palette.purple.main,
  textAlign: 'center',
  color: 'white',
  padding: '10px 0 10px 0'
}));

const Item = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 20px',
  textAlign: 'center',
  fontSize: "20px",
  color: theme.palette.text.secondary,
  // border: "solid white 2px",
  borderRadius: "1.25rem",
  background: "#000000b8",
  minWidth: '150px',
  alignSelf: 'center',
}));

const ItemConnect = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0 20px 0',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    padding: '10px 0',
    display: 'none'
  },
}));

export default function Header() {
  const [mobile, setMobile] = useState(false);

  return (
    <Wrapper>
      { mobile === true ? (
        <div>
          <div className="mobile_head">
            <div className="mobile_herader_content">
              <div style={{alignSelf:"center", marginBottom:"30px"}}>
                <img src="./favicon.png" alt="ETH Snowball" width="64px"/>
                {/* <img src={ logoImg } alt="ETH Snowball" width="64px"/> */}
              </div>
              <div className="mobile_four_btn">
                <div onClick= {() => {
                  setMobile(true)
                }}>
                  <a href="https://auditlink" target="_blank"
                    className="swap_btn"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight:"bolder"
                    }}
                  >
                    Audit
                  </a>
                </div>
                <div onClick= {() => {
                  setMobile(true)
                }}>
                  <a href={ config.scanLink } target="_blank"
                    className="swap_btn"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight:"bolder"
                    }}
                  >
                    Contract
                  </a>
                </div>
                <div onClick={() => {
                  setMobile(true)
                }}>
                  <a href="/whitepaper.pdf" target="_blank"
                    className="stable_btn"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight:"bolder"
                    }}
                  >
                    <span> Whitepaper </span>
                    {/* <TwitterIcon/> */}
                  </a>
                </div>
                {/* <div onClick={() => {
                  setMobile(true)
                }}>
                  <a href="https://lottery.wcminer.com/" target="__blank"
                    className="bridge_btn"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight:"bolder"
                    }}
                  >
                    Lottery
                  </a>
                </div> */}
              </div>
              <div style={{flex:1}}></div>
              <div
                className="mobile_connect"
              >
                <Connect />
              </div>
            </div>
            <div
              className="empty_mobile"
              onClick={() => {
                setMobile(false)
              }}
            ></div>
          </div>
        </div>
      )
      : null }
   
      <Grid container spacing={2}>
        <Grid item xs={9} sm={3.5}>
          <div style={{textAlign:"center", display:'flex', alignItems:'center'}}>
            {/* <img src="./favicon.png" alt="" style={{ padding: '5px 20px', maxHeight: "64px"}} /> */}
            <img src={ logoImg } alt="" style={{ padding: '5px 20px', maxHeight: "64px"}} />
            {/* <Typography variant="h5" textAlign="center" color='white'>
              Bored Ape Miner
            </Typography> */}
          </div>
        </Grid>
        <Grid className="header_menu" item xs={12} sm={5}>
          <Item>
            <a href="https://auditlink" target="_blank"
              style={{
                textDecoration: 'none',
                fontWeight: "bolder",
                color:"white"
              }}
            >
                <span>Audit </span>
                {/* <TwitterIcon/> */}
            </a>
          </Item>
          <Item>
            <a href={ config.scanLink } target="_blank"
              style={{
                textDecoration: 'none',
                fontWeight: "bolder",
                color:"white"
              }}
            >
                <span>Contract </span>
                {/* <SiBinance/> */}
            </a>
          </Item>
          <Item>
            <a href="/whitepaper.pdf" target="_blank"
              style={{
                textDecoration: 'none',
                fontWeight: "bolder",
                color:"white"
              }}
            >
                <span>Whitepaper</span>
                {/* <FaDiscord/> */}
            </a>
          </Item>
          {/* <Item style={{border: "solid white 4px"}}>
            <a href="https://lottery.wcminer.com/" target="__blank"
              style={{
                textDecoration: 'none',
                fontWeight: "bolder",
                color:"white"
              }}
            >
              <span>Lottery </span>
            </a>
          </Item> */}
        </Grid>
        <Grid item xs={3} sm={3.5} sx={{alignSelf:"center"}}>
          <ItemConnect>
            <Connect />
          </ItemConnect>
          <div
            className="mobile_btn"
            onClick={() => {
              setMobile(true)
            }}
            style={{color:'white'}}
          >
            <GiHamburgerMenu/>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
