import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Auth } from "../../redux/action/auth";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    let data = {
      email,
      password,
    };
    dispatch(Auth(data, navigate));
  };

  return (
    <div className="login">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            error={email === ""}
            helperText={email === "" ? "Required!" : " "}
          />
        </div>
        <div>
          <TextField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            error={password === ""}
            helperText={password === "" ? "Required!" : " "}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button onClick={onSubmit} variant="contained">
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
