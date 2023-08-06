import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {

  return (
    <>
      <Box sx={{ width: "75%", margin: "auto", pt: 5 , pb:3, borderBottom:"1px solid #164678" }}>
        <Grid container spacing={3} sx={{alignItems:"center"}}>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Box>
              <img src="./img/logo.png" alt={"logo"} width={120} height={120} />
            </Box>
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Box sx={{textAlign:"right"}}>
              <Typography variant="h5" component="div" sx={{color:"#164678" ,fontWeight:"600"}}>
                ACME CARE CLINIC
              </Typography>

              <Typography variant="p" component="div" sx={{color:"#164678" ,fontWeight:"500"}}>
              123 Maple Street, Houston, TX, 77002
              </Typography>

              <Typography variant="p" component="div" sx={{color:"#164678" ,fontWeight:"400"}}>
              example@example.com
              </Typography>

              <Typography variant="p" component="div" sx={{color:"#164678" ,fontWeight:"400"}}>
              (123) 1234567
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
