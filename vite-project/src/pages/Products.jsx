import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar"
import ProductsList from "../products/ProductsList";

export default function Products() {
  return (
    <>
      <Navbar />
      
      <Box sx={{
          width: "100vw",
          height: "100%",

        }} />
        <Box sx={{ display: "flex" }} 
          
        >
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductsList />
          </Box>
      </Box>
    
    
    </>
  )
}
