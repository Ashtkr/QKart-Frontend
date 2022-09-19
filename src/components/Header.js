import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";


  const Header = ({ children, hasHiddenAuthButtons }) => {
    const history = useHistory();
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img> 
        </Box>
        <Box>{children}</Box>
        {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
            variant="text"
            onClick={() => history.push("/")}
        >
          Back to explore
        </Button>
        ) : localStorage.length === 0 ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <Button 

                  variant="text"
                onClick={() => history.push("/login")}
              >
                LOGIN
              </Button>
              <Button 
                  className="button"
                  variant="contained"
                  onClick={() => history.push("/register")}
              >
                REGISTER
              </Button>
            </Stack>
          ) : (
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
                <p>{localStorage.getItem("username")}</p>
                <Button 
                  className="button"
                  variant="contained"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload(); 
                    history.push("/")
                  }}
                >
                  LOGOUT
                </Button>
            </Stack>
        )} 
      </Box>
    );
};

export default Header;
