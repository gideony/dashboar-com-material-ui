import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function Home() {
    return (
        <>
            <Navbar />
            <Box heigth={40} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 /* height: '100vh' */ }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction="vh">
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                                    <CardContent>
                                        <div>
                                            <CreditCardIcon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            R$ 450,14
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                        total de ganhos
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 59 + "%", height: 150 }} className="gradient">
                                    <CardContent>
                                        <div>
                                            <CreditCardIcon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            R$ 9.450
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                        total de ordem
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Stack spacing={2} direction="row">
                                        <div className="iconstyle">
                                            <AccountBalanceWalletIcon />
                                        </div>
                                        <div className="paddingall">
                                            <span className="pricetitle">R$ 40.254,32</span>
                                            <br />
                                            <span className="pricesubtitle">Total de Renda </span>
                                        </div>
                                    </Stack>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Stack spacing={2} direction="row">
                                        <div className="iconstyle">
                                            <AccountBalanceWalletIcon />
                                        </div>
                                        <div className="paddingall">
                                            <span className="pricetitle">R$ 40.254</span>
                                            <br />
                                            <span className="pricesubtitle">Total de Renda </span>
                                        </div>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box heigth={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
