import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllUser } from "../../redux/action/users";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const users = useSelector((state) => state.users.allusers.rows);

  const onSubmit = async () => {
    let data = {
      first_name,
      last_name,
      email,
      password,
      dob,
      role,
      city,
      state,
    };
    let headers = {
      x_auth_token: localStorage.getItem("token"),
    };
    try {
      let res = await axios.post(
        "http://localhost:3333/v1/api/user/add",
        data,
        { headers: headers }
      );
      console.log(res);
      if (res.status == 200) {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setDOB("");
        setRole("");
        setCity("");
        setState("");
        handleClose(true);
        dispatch(AllUser());
      }
    } catch (err) {
      console.log("err-Admin", err);
    }
  };

  const logOut = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(AllUser());
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button onClick={logOut} variant="contained">
          Logout
        </Button>
      </div>
      <div
        className="Modal"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button onClick={handleOpen}>Create new user</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="" style={{ display: "flex" }}>
              <TextField
                id="first_name"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
                label="Firstname"
                variant="outlined"
                error={first_name === ""}
                helperText={first_name === "" ? "Required!" : " "}
              />
              <TextField
                id="last_name"
                value={last_name}
                onChange={(e) => setLastname(e.target.value)}
                label="Lastname"
                variant="outlined"
                error={last_name === ""}
                helperText={last_name === "" ? "Required!" : " "}
              />
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <TextField
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
                error={email === ""}
                helperText={email === "" ? "Required!" : " "}
              />
              <TextField
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="outlined"
                error={password === ""}
                helperText={password === "" ? "Required!" : " "}
              />
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <TextField
                id="dob"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                label="DOB"
                variant="outlined"
                error={dob === ""}
                helperText={dob === "" ? "Required!" : " "}
              />
              <TextField
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="City"
                variant="outlined"
                error={city === ""}
                helperText={city === "" ? "Required!" : " "}
              />
            </div>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <TextField
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                label="Stte"
                variant="outlined"
                error={state === ""}
                helperText={state === "" ? "Required!" : " "}
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <MenuItem value={"admin"}>Admin</MenuItem>
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"manager"}>Manager</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={onSubmit} variant="contained">
                Submit
              </Button>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="table" style={{ maxHeight: "450px", overflow: "scroll" }}>
        <Container fixed>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.first_name}
                      </TableCell>
                      <TableCell align="right">{row.last_name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.role}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
