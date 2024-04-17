import { Paper, Stack } from "nms-creative-ui";
import React from "react";

const PaperElevation = () => {
  return (
    <Stack direction="row" spacing={2} sx={{flexWrap:"wrap", alignItems:"center", display:"flex", justifyContent:"center"}}>
   
        <Paper elevation={0} sx={{ padding: "48px" }}></Paper>
  


        <Paper sx={{ padding: "48px !important" }}></Paper>
  
    
        <Paper elevation={3} sx={{ padding: "48px !important" }}></Paper>
    
    </Stack>
  );
};

export default PaperElevation;
