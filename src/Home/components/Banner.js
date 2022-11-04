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
  margin: '50px 0px',
  display:'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')] : {
    flexDirection: 'column',
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
  margin:'50px 0px',
  [theme.breakpoints.down('md')]: {
    width:'100%',
    fontSize: '30px',
    margin:'20px 0px',
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
    <CardWrapper className="row">
      <div className='col left_box'>
        <CustomCardHeader>
          Discover, buy CryptoPunk, and claim your BUSD
        </CustomCardHeader>
        <div style={{font:'20px', color:'white', opacity:'0.7'}}>
          Discover the most outstanding CryptoPunk in all topics of life. 
          Creative your CryptoPunk and sell them.
        </div>
      </div>
      <div className='col right_box' >
        <img src={bannerImg} width='100%'/>
      </div>
    </CardWrapper>
  );
}
