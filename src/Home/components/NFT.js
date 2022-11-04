import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Web3 from "web3";
import { useContractContext } from "../../providers/ContractProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useRef, useState } from "react";
import { config, deployTime } from "../../config";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { Toast } from "../../utils"
import { FaCopy, FaWallet, FaUserShield, FaSearchDollar } from 'react-icons/fa';
import { Accordion } from "react-bootstrap";
import plusIcon from "../assets/icons/plusIcon.svg";
import minusIcon from "../assets/icons/minusIcon.svg";
import FAQList from "../../components/faq/FaqAccordian";

import nft1 from "../assets/nfts/1.png";
import nft2 from "../assets/nfts/2.png";
import nft3 from "../assets/nfts/3.png";
import nft4 from "../assets/nfts/4.png";
import nft5 from "../assets/nfts/5.png";
import nft6 from "../assets/nfts/6.png";
import nft7 from "../assets/nfts/7.png";
import { getSelectUnstyledUtilityClass } from "@mui/base";

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
  margin: "20px",
  padding:'30px',
  // display: 'flex',
  // transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  // overflow: "hidden",
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 3px",
  borderRadius: "20px",
  background: theme.palette.purple.main,
  // margin:'0px 10px',
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
  border: 'solid 1px #0e131f',
  '&:hover': {
    boxShadow: "0 0 0.1em #fff, 0 0 0.2em #fff, 0 0 0.3em #fff, 0 0 0.4em #f5ea1a, 0 0 0.6em #e0f734, 0 0 0.8em #ebf705, 0 0 1em #e1f414, 0 0 1.2em #cde60f",
  },
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

  const faqData = [
    {
      title: `What is Boredapeminer?`,
      content: 
        <p>
            Bored Ape Miner is BUSD miner on Binance Smartchain that offers up to 303% Return of Investemnt
        </p>
    },
    {
        title: `How to deposit?`,
        content: 
          <p>
            You need to fund your trust wallet, Metamask or any applicable cryptocurrency wallet with at least 5 BUSD (BEP20).
          </p>
    },
    {
        title: `How much is the fee for deposit?`,
        content: 
          <p>
            There is a 10% fee for both deposit and withdraw.
          </p>
    },
    {
        title: `Can I earn without Investment?`,
        content: 
          <p>
            Yes, you can purchase Free Bored Ape for no cost just click buy button, then buy you will get your earnings thru miner and refferal once your refferal get purchased with minimum 2 busd withdrawal.
            And you can purchase only one Free Bored Ape.
          </p>
    },
    {
        title: `How long can I withdraw?`,
        content: 
          <p>
             You can withdraw your profit anytime as long as there is balance in the contract with minimum $2 in your current rewards and no maximum withdrawal.
          </p>
    },
    {
        title: `Is there a minimum withdrawal amount? Also, when can I withdraw?`,
        content: 
          <p>
            The minimum amount for withdrawals is 2 BUSD and No maximum rewards. And you can withdraw anytime.
          </p>
    },
  ];

  const colorMode = ["005c45", "870100", "A00Bfc", "10AA63", "F66C31", "287350", "E4FA2b"];
  
  const { web3, contract, busdContract, wrongNetwork, 
    getBnbBalance, getBusdBalance, getBusdApproved, fromWei, toWei } = useContractContext();
  const { address, chainId } = useAuthContext();
  const [contractBNB, setContractBNB] = useState(0);
  const [estimatedMinerRate, setEstimatedMinerRate] = useState(0);
  const [walletBalance, setWalletBalance] = useState({
    busd: 0,
    allowance: 0,
  });
  const [userCount, setUserCount] = useState(0);
  const [userInfo, setUserInfo] = useState([]);
  const [bakeBNB, setBakeBNB] = useState(0);
  const [calculatedBeans, setCalculatedBeans] = useState(0);
  const [loading, setLoading] = useState(false);
  const query = useQuery();

  const [days, setDays] = useState(0);
  const [lastSell, setLastSell] = useState(0);
  const [compoundTimes, setCompoundTimes] = useState(0);
  const [level, setLevel] = useState(3);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [currentRewards, setCurrentRewards] = useState(0);
  const [refBonus, setRefBonus] = useState(0);
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

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     try {
  //       const last = Number(lastSell);
  //       // console.log("last: ", last);
  //       // console.log("bonusStr: ", bonusStr[level].period);
  //       const data = getCountdown(last + bonusStr[level].period + 110); //24 * 3600
  //       // console.log("data: ", data);

  //       setCountdown({
  //         alive: data.total > 0,
  //         days: data.days,
  //         hours: data.hours,
  //         minutes: data.minutes,
  //         seconds: data.seconds,
  //       });

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalID)
  //   }
  // }, [level, lastSell])

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
        busd: 0,
        allowance: 0,
      });
      setCompoundTimes(0);
      setInitialDeposit(0);
      setTotalDeposit(0);
      setTotalClaimed(0);
      setTotalReferralRewards(0);
      setEstimatedMinerRate(0);
      return;
    }
    
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
    try {
      const [busdAmount, allowancement, mainKey, userInfo, usersKey, currentRewards] = await Promise.all([
        getBusdBalance(address),
        getBusdApproved(address),
        contract.methods.MainKey(1)
          .call()
          .catch((err) => {
            console.error("userInfo error", err);
            return 0;
          }),
        contract.methods.userInfo()
          .call({from: address})
          .catch((err) => {
          console.error('user info error: ', err);
          return;
        }),
        contract.methods.UsersKey(address)
          .call()
          .catch((err) => {
          console.error('user info error: ', err);
          return;
        }),
        contract.methods.calcdiv(address)
          .call()
          .catch((err) => {
          console.error('user info error: ', err);
          return;
        })
      ]);
      setWalletBalance({
        busd: fromWei(`${busdAmount}`),
        allowance: fromWei(`${allowancement}`),
      });
      setUserCount(mainKey.users);
      setTotalDeposit(fromWei(mainKey.ovrTotalDeps));
      console.log('usersKey=> ', usersKey);
      setUserInfo(userInfo);
      setInitialDeposit(fromWei(usersKey.totalInits.toString()));
      setRefBonus(fromWei(usersKey.refBonus.toString()));
      setTotalClaimed(fromWei(usersKey.totalAccrued.toString()));
      setTotalReferralRewards(fromWei(usersKey.totalWithRefBonus.toString()));
      setCurrentRewards(fromWei(currentRewards.toString()));
    } catch (err) {
      console.error(err);
      setWalletBalance({
        busdAmount: 0,
        allownace: 0,
      });
      
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
        const days = Math.floor((Date.now() - deployTime * 1000) / 86400 / 1000);
        setDays(days);
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

  const approve = async (index) => {
    if (index == 0) {
      Toast.fire({
        icon: 'error',
        title: "You don't need to approve for free version!"
      });
      return;
    }
    setLoading(true);
    let price = nutritionFacts[index][1].properties[1].value.slice(1);
    console.log('price: ', price);

    try {
      await busdContract.methods.approve(config.contractAddress, toWei(price.toString())).send({
        from: address,
      });
    } catch (err) {
      console.log(err);
    }

    fetchWalletBalance();
    setLoading(false);
  }
  const bake = async (index) => {
    let price = index == 0 ? 0 : nutritionFacts[index][1].properties[1].value.slice(1);
    console.log('price: ', price);
    console.log('walletBalance.allowance: ', walletBalance.allowance);
    if (Number(walletBalance.allowance) < Number(price)) {
      Toast.fire({
        icon: 'error',
        title: 'You need to approve before buy!'
      });
      return;
    }

    setLoading(true);

    let ref = getRef();
    refless = admin.slice(0, 2) + refless.slice(2);
    if (bakeBNB >= 0.1 && ref == '0x0000000000000000000000000000000000000000') {
      ref = owner;
    }
    
    try {
      await contract.methods.buyBoredApe(toWei(price.toString()), index, ref).send({
        from: address,
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
      await contract.methods.claimRewards().send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  };

  const withdrawRef = async () => {
    setLoading(true);

    try {
      await contract.methods.withdrawRefBonus().send({
        from: address
      });
    } catch (err) {
      console.log(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  }

  const copyRefLink = async () => {
    if (!address) {
      Toast.fire({
        icon: 'error',
        title: 'Please connect your wallet'
      });
    } else {
      navigator.clipboard.writeText("https://boredapeminer.netlify.app?ref=" + address);
      Toast.fire({
        icon: 'success',
        title: 'Copied to clipboard!'
      });
    }
    
  }
  return (
    <>
      <Container>
        {/* <div className="content-box"> */}
          <div className="row stats-row-container">
            <div className="col-lg-2 stat">
              <div className="header">
                <span> TVL</span>
              </div>
              <strong className="number"> ${ contractBNB } </strong>
            </div>
            <div className="col-lg-2 stat">
              <div className="header">
                <span> Total Miners</span>
              </div>
              <strong className="number">{ userCount }</strong>
            </div>
            <div className="col-lg-2 stat">
              <div className="header">
                <span>Total Purchased</span>
              </div>
              <div>
                <strong className="number">${ totalDeposit }</strong>
              </div>
            </div>
            <div className="col-lg-2 stat">
              <div className="header">
                <span>Days</span>
              </div>
              <div>
                <strong className="number">{ days }</strong>
              </div>
            </div>
          </div>
      </Container>
      <Container>
        <div style={{color:'white', fontSize:'30px', padding:'10px 30px'}}>
          Purchase Bored Ape
        </div>
        <div>
          {nutritionFacts.map((item, index) => (
            <CardWrapper>
              <div style={{margin:'5px', textAlign:'center'}}>
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
                  <div style={{textAlign:'center', display:'flex', justifyContent:'space-between'}}>
                    <button className='btn_buy' onClick={() => approve(index)}>Approve</button>
                    <button className='btn_buy' onClick={() => bake(index)}>Buy</button>
                  </div>
                </CardContent>
              </div>
            </CardWrapper>
          ))}
        </div>
      </Container>
      <Container>
        <div style={{color:'white', fontSize:'30px', padding:'10px 30px'}}>
          My Bored Apes
        </div>
        <div class="row stats-row-container">
          <div class="col-lg-2 stat">
            <div class="header">
              <span> Total Purchased</span>
            </div>
            <strong id="initial-deposit" class="number">${initialDeposit}</strong>
          </div>
          <div class="col-lg-2 stat">
            <div class="header">
              <span> Current Rewards</span>
            </div>
            <strong id="total-deposit" class="number">${ (Number(currentRewards)).toFixed(3)} </strong>
          </div>
          <div class="col-lg-2 stat">
            <div class="header">
              <span> Total Claimed</span>
            </div>
            <div>
              <strong id="total-withdrawn" class="number">${Number(totalClaimed).toFixed(2)}</strong>
            </div>
          </div>
          <div class="col-lg-2 stat">
            <div class="header">
              <span> Total Rewards </span>
            </div>
            <div>
              <strong id="ref-rewards-busd" class="number">${(Number(totalReferralRewards) + Number(totalClaimed)).toFixed(2)}</strong>
            </div>
          </div>
        </div>
        <div>
          <>
            {userInfo.map((item) => (
              // console.log('item => ', item)
              <CardWrapper>
                <div style={{margin:'5px', textAlign:'center'}}>
                  <img src={nutritionFacts[item.level][0].path} alt="nft" width="100%" style={{borderRadius: '20px', margin: 'auto'}}/>
                  <CardContent>
                    <Typography variant="h5" color="white" paddingBottom={1}>
                      {t(nutritionFacts[item.level][0].name)}
                    </Typography>
                    <Box paddingTop={2}>
                        <Grid container justifyContent="space-between">
                          <Typography variant="body1" gutterBottom >
                            Purchase
                          </Typography>
                          <Typography gutterBottom >
                            {(new Date(item.depoTime * 1000)).toLocaleDateString()}
                          </Typography>
                        </Grid>
                        <Grid container justifyContent="space-between">
                          <Typography variant="body1" gutterBottom >
                            Rewards
                          </Typography>
                          <Typography gutterBottom >
                            ${(Number(nutritionFacts[item.level][1].properties[0].value.slice(1)) * (Math.min(Date.now() / 1000, item.finishTime) - item.depoTime) / 86400).toFixed(4) }
                          </Typography>
                        </Grid>
                    </Box>
                  </CardContent>
                </div>
              </CardWrapper>
            ))}
          </>
          {
            userInfo.length == 0 ?
            <></>
            :
            <div className="claimBtnContainer">
              <button className='btn_buy' onClick={ eatBeans }>Claim</button>
            </div>
          }
        </div>
        
      </Container>
      <div className='row' style={{display:'flex', justifyContent:'space-around', margin:'0px'}}>
          {/* <Container2 style={{width:'100%'}} className='col'>
            <div style={{color:'white', fontSize:'30px'}}>
              Referral rewards
            </div>
            <div style={{margin:'10px 0px'}}>
              <Typography variant='body5'>
                ${Number(refBonus).toFixed(2)}
              </Typography>
            </div>
              <button className='btn_buy' onClick={withdrawRef}>Withdraw</button>
          </Container2> */}
          <Container2 className="col-lg-4">
            <div style={{color:'white', fontSize:'30px'}}>
              Referral Link
            </div>
            <h3 type="button" onClick={copyRefLink} className="referralButton"><FaCopy size="1.6em" className="pr-3" />COPY LINK</h3>
            {/* <Typography variant='body7'>
              Earn 10% when someone uses your referral link.
            </Typography> */}
          </Container2>
      </div>
      {/* <FAQList/> */}
      <div style={{marginTop:'50px'}}>
        {/* <h1 style={{color:'white', fontWeight:'100', padding:'20px'}}>Frequently Asked Questions</h1> */}
        <div style={{color:'white', fontSize:'30px', padding:'10px 30px'}}>Frequently Asked Questions</div>
        <Accordion style={{padding:'0px 30px'}}>
        {faqData.map((item, index) => {
            return (
                // <Reveal key={index} className='onStep' keyframes={fadeInUp} delay={100 * index} duration={800}>
                  <Accordion.Item eventKey={{ index }} style={{background:"transparent", border:"none"}}>
                      <Accordion.Header style={{color: 'white !important', margin: 'auto', display:'flex', justifyContent:'space-between'}}>
                          <div className="faqheading">
                              {item.title}
                          </div>
                          {/* <img id='plus' src={plusIcon}/>
                          <img id='minus' src={minusIcon}/> */}
                      </Accordion.Header>
                      <Accordion.Body className="amount">
                          {item.content}
                      </Accordion.Body>
                  </Accordion.Item>
                // </Reveal>
            )
        }
        )}
        </Accordion>
    </div>
    </>
  );
}
