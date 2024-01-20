import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import "../Dash.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from '@mui/icons-material/Payments';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box heigth={30} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          width: "98vw",
        }}
      >
        <Sidenav />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Grid sx={{ display: "flex", width: "90%", gap: 2 }}>
              <Card sx={{ minWidth: "50" + "%", height: 150, color: "white" }} className="gradient">
                <Stack spacing={2} >
                  <div>
                    <CreditCardIcon className="iconstyle1" />
                  </div>
                  <div className="paddingall">
                    <Typography gutterBottom variant="h5" component="div">
                      R$ 785.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Ganhos totais
                    </Typography>
                  </div>
                </Stack>
              </Card>
              <Card sx={{ minWidth: "50" + "%", height: 150, color: "white" }} className="gradientlight" >
                <Stack spacing={2} >
                  <div>
                    <CreditCardIcon className="iconstyle1" />
                  </div>
                  <div className="paddingall">
                  <Typography gutterBottom variant="h5" component="div">
                      R$ 785.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Ordem total
                    </Typography>
                  </div>
                </Stack>
              </Card>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "50%",
              }}
            >
              <Card>
                <Stack spacing={2} direction="row">
                  <div>
                    <PaymentsIcon className="iconstyle" />
                  </div>
                  <div className="paddingall">
                    <span className="pricetitle">R$ 1.597</span>
                    <br />
                    <span className="pricesubtitle">Renda total</span>
                  </div>
                </Stack>
              </Card>
              <Card>
                <Stack spacing={2} direction="row">
                  <div>
                    <PaymentsIcon className="iconstyle" />
                  </div>
                  <div className="paddingall">
                    <span className="pricetitle">R$ 1.597</span>
                    <br />
                    <span className="pricesubtitle">Renda total</span>
                  </div>
                </Stack>
              </Card>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Grid sx={{ display: "flex", gap: 2, width: "93%" }}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    3
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                width: "50%",
              }}
            >
              <Card sx={{ height: "280px" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    4
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
