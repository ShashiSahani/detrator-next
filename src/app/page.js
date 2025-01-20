import React from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Avatar,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  return (
    <Box padding="10px">

      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          padding: "10px",
          border: "2px solid #008000",
          backgroundColor: "#f5f5f5",
        }}
      >
        
        <Typography sx={{ fontWeight: "bold" }}>Brand Name</Typography>

       
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            placeholder=""
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography height="50px" width="50px" borderRadius="100%"  sx={{ bgcolor: "#0096FF",   border: "2px solid blue", }}></Typography>
          <Typography
            variant="body1"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            John
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"

        flexDirection={{ xs: "column", sm: "row" }}
        sx={{ padding: "20px", gap: "20px",  border: "1px solid #000",height:"80vh",
          backgroundColor: "white", }}
      >
        <Box flex={1} sx={{ border: "1px solid #ccc", padding: "20px",   backgroundColor: "#FFF8DC",  }}></Box>

        <Box
          flex={1}
          sx={{
            border: "1px solid #ccc",
            padding: "20px",
            display: { xs: "none", sm: "block",backgroundColor: "#ffe3e2", },
          }}
        ></Box>
      </Box>
    </Box>
  );
}
