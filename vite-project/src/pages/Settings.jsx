import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar"

export default function Settings() {
    return (
        <>
            <Navbar />
            <Box heigth={30} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 , height: '100vh' }}>
                    <h1>Settings</h1>
                </Box>
            </Box>
        </>
    )
}
