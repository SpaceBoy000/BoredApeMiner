import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import nft1 from "../assets/nfts/1.png";
import nft2 from "../assets/nfts/2.png";
import nft3 from "../assets/nfts/3.png";
import nft4 from "../assets/nfts/4.png";
import nft5 from "../assets/nfts/5.png";
import nft6 from "../assets/nfts/6.png";
import nft7 from "../assets/nfts/7.png";

const Container = styled('div')(({theme}) => ({
  // minWidth: 250,
  margin: "50px 30px 30px 20px",
  // display: 'flex',
  // overflowX:'scroll',
  // transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  // overflow: "hidden",
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 3px",
  borderRadius: "20px",
  background: theme.palette.purple.main,
  // marginBottom: 24,
}));

const Container2 = styled('div')(({theme}) => ({
  // minWidth: 250,
  margin: "50px 20px 30px 20px",
  // display: 'flex',
  // transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  // overflow: "hidden",
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 3px",
  borderRadius: "20px",
  background: theme.palette.purple.main,
  // marginBottom: 24,
}));

const CardWrapper = styled("div")(({ theme }) => ({
  minWidth: 250,
  width: '250px',
  margin: "10px",
  display: 'inline-block',
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  // overflow: "hidden",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 3px",
  borderRadius: "20px",
  background: theme.palette.purple.main,
  marginBottom: 24,
  [theme.breakpoints.down('md')]: {
    width:'audto',
  }
}));

export default function NFT() {
  const { t, i18n } = useTranslation();

  const nutritionFacts = [
    [
      {
        path: nft1,
        name: 'Free'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$0.01',
          },
          {
            label: t("Price"),
            value: "free",
          },
          {
            label: t("Life Span"),
            value: 'forever',
          },
          {
            label: t("Total Income"),
            value: 'no limit',
          }
        ]
      },
    ],
    [
      {
        path: nft2,
        name: 'Common'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$0.25',
          },
          {
            label: t("Price"),
            value: "$5",
          },
          {
            label: t("Life Span"),
            value: '30 Days',
          },
          {
            label: t("Total Income"),
            value: '$7.5',
          }
        ]
      },
    ],
    [
      {
        path: nft3,
        name: 'Uncommon'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$1.1',
          },
          {
            label: t("Price"),
            value: "$20",
          },
          {
            label: t("Life Span"),
            value: '30 Days',
          },
          {
            label: t("Total Income"),
            value: '$33',
          }
        ]
      },
    ],
  ];

  return (
    <Container>
      <div style={{color:'white', fontSize:'30px', padding:'10px 30px'}}>
        My Bored Apes
      </div>
      {/* <div class="content-box"> */}
      <div class="row stats-row-container">
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-bank"></i>
                <span> Initial Deposit</span>
              </div>
              <strong id="initial-deposit" class="number">$3265</strong>
              {/* <div>
                <strong class="busd">BUSD</strong>
              </div> */}
            </div>
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-bank"></i>
                  <span> Current Rewards</span>
              </div>
              <strong id="total-deposit" class="number">$300</strong>
              {/* <div>
                <strong class="busd">BUSD</strong>
              </div> */}
            </div>
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-wallet2"></i>
                  <span> Total Claimed</span>
              </div>
              <div>
                <strong id="total-withdrawn" class="number">$1000</strong>
              </div>
              {/* <div>
                <strong class="busd">BNB</strong>
              </div> */}
            </div>
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-people"></i>
                  <span> Referral Rewards </span>
              </div>
              <div>
                <strong id="ref-rewards-busd" class="number">$136</strong>
              </div>
              {/* <div>
                <strong class="busd">BNB</strong>
              </div> */}
            </div>
          </div>
        {/* </div> */}
      <div>
        {nutritionFacts.map((item) => (
          <CardWrapper>
            <div style={{margin:'5px'}}>
              <img src={item[0].path} alt="nft" width="100%" style={{borderRadius: '20px'}}/>
              <CardContent>
                <Typography variant="h5" color="white" paddingBottom={1}>
                  {t(item[0].name)}
                </Typography>
                <Box paddingTop={2}>
                  {item[1].properties.map((f) => (
                      <Grid container key={f.label} justifyContent="space-between">
                      <Typography variant="body1" gutterBottom >
                        {f.label}
                      </Typography>
                      <Typography gutterBottom >{f.value}</Typography>
                    </Grid>
                  ))}
                </Box>
                <div style={{textAlign:'center'}}>
                  <button className='btn_buy' onClick={() => {}}>Claim</button>
                </div>
              </CardContent>
            </div>
          </CardWrapper>
        ))}
      </div>
    </Container>
  );
}
