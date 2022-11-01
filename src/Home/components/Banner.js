import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { Toast } from "../../utils"
import { config } from "../../config";
import bannerImg from "../assets/banner.png"

const CardWrapper = styled("div")(({ theme }) => ({
  padding: "29px",
  display:'flex',
  flexDirection: 'row',
  width:'80%',
  marginLeft:'10%',
  marginTop:'50px',
  [theme.breakpoints.down('md')] : {
    flexDirection: 'column',
    marginTop:'30px',
    width:'100%',
    marginLeft:'0%',
  }
}));

const CustomCardHeader = styled(Typography)(({ theme }) => ({
  // width: '70%',
  // textDecoration: "underline",
  // textDecorationColor: "#0abcf9",
  textDecorationThickness: "2px",
  textUnderlinePosition: "under",
  color: "white",
  fontSize: '40px',
  marginBottom:'50px',
  [theme.breakpoints.down('md')]: {
    width:'100%',
    fontSize: '30px',
    marginBottom:'20px',
  }
}))

const UnderlineTypography = styled(Typography)(({ theme }) => ({
  // textDecoration: "underline",
  textDecorationColor: "#0abcf9",
  textDecorationThickness: "1px",
  textUnderlinePosition: "under",
  cursor: 'pointer'
}))

export default function Banner() {

  return (
    <CardWrapper>
      <div className='banner_header'>
        <CustomCardHeader>
          Discover, buy Bored Ape, and claim your BUSD
        </CustomCardHeader>
        <div style={{font:'20px', color:'white', opacity:'0.7', padding:'12px'}}>
          Discover the most outstanding NTFs in all topics of life.
          Creative your NTFs and sell them
        </div>
      </div>
      <div className='banner_image_container'>
        <img src={bannerImg} className='banner_img'/>
      </div>
    </CardWrapper>
  );
}
