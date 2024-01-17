import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Index() {
  return (
    <>
      <Navbar />
      <Box heigth={30} />
      <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', gap: 2, width: '98vw',  }}>
      <Sidenav />
        <Container  sx={{display: "flex", flexDirection: 'column',  gap: 2,  marginTop: 10 }}>
          <Box sx={{ display: "flex", gap: 4,  width: '100%', justifyContent: 'center' }}>
          <Grid sx={{ display: "flex",width: '90%', gap: 2}}>
              <Card sx={{ minWidth: '50%', }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Ola
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: '50%' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Ola
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid sx={{ display: "flex", flexDirection: "column", gap: 2, width: '50%'}}>
              <Card >
                <CardContent >
                  <Typography variant="h5" component="div">
                    Ola
                  </Typography>
                </CardContent>
              </Card>
              <Card >
                <CardContent >
                  <Typography variant="h5" component="div">
                    Ola
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Box>

          <Box sx={{ display: "flex", gap: 2,  width: '100%', justifyContent: 'center'}}>
            <Grid sx={{ display: "flex", gap: 2, width: '93%', }}>
              <Card sx={{ width: '100%'}}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Ola
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid sx={{ display: "flex", flexDirection: "column", gap: 5, width: '50%'}}>
              <Card sx={{ height: '280px'}}>
                <CardContent >
                  <Typography variant="h5" component="div">
                    Ola
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
