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
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.allusers.rows);

  const logOut = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(AllUser());
  }, []);

  return (
    <div style={{ marginTop: "150px", maxHeight: "450px", overflow: "scroll" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button onClick={logOut} variant="contained">
          Logout
        </Button>
      </div>
      <div className="table">
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

export default Home;
