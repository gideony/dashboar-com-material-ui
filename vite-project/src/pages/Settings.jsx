import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar"
import List from "../settings/List";

export default function Settings() {
    return (
        <>
            <Navbar />
            
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 , height: '100vh' }}>
                <br />
                <br />
                < List/>
                </Box>
            </Box>
        </>
    )
}
