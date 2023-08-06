import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Avatar,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";

const Resrvation = () => {
  // variable
  let data;
  //  state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [Gender, setGender] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [branshName, setBranshName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  // function
  const handelSubmite = (e) => {
    e.preventDefault();

    data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      phone: phone,
      Gender: Gender,
      doctorName: doctorName,
      branshName: branshName,
      date: date,
      time: time,
    };
    localStorage.setItem("Reavaration", JSON.stringify(data));

    toast.success("your resrvation add successfly");
  };

  useEffect(() => {
    if (localStorage.getItem("Reavaration") != null) {
    }
  }, []);

  return (
    <>
      <Box className="mainSection pb-5">
        {/* heading  */}
        <Header />
        {/* body of page */}

        <Box sx={{ mt: 5, width: "75%", margin: "auto" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              color: "#164678",
              fontWeight: "600",
              textAlign: "center",
              mt: 3,
            }}
          >
            Doctor Appointment Request Form
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#164678",
              fontWeight: "400",
              textAlign: "center",
              mt: 2,
            }}
          >
            Fill the form below and we will get back soon to you for more
            updates and plan your appointment.
          </Typography>

          {/* input  */}
          <form onSubmit={handelSubmite}>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {/* First Name */}
              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ mt: 2 }}>
                  <TextField
                    required
                    type={"text"}
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Box>
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ mt: 2 }}>
                  <TextField
                    required
                    type={"text"}
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Box>
              </Grid>

              {/* phone */}
              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ mt: 2 }}>
                  <TextField
                    required
                    type={"text"}
                    fullWidth
                    label="phone"
                    variant="outlined"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Box>
              </Grid>

              {/* Age */}
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ mt: 2 }}>
                  <TextField
                    required
                    type={"number"}
                    fullWidth
                    label="Age"
                    variant="outlined"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </Box>
              </Grid>

              {/* Gender */}
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {/*branch */}
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Branch
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Branch"
                      onChange={(e) => {
                        setBranshName(e.target.value);
                      }}
                    >
                      <MenuItem value={"Alex"}>Alex</MenuItem>
                      <MenuItem value={"Mansoura"}>Mansoura</MenuItem>
                      <MenuItem value={"CairoF"}>Cairo</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {/*Doc*/}
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Doctore
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Branch"
                      onChange={(e) => {
                        setDoctorName(e.target.value);
                      }}
                    >
                      <MenuItem value={"Salma Mohamed"}>
                        {" "}
                        Salma Mohamed
                      </MenuItem>
                      <MenuItem value={"Aymen Mohamed"}>
                        {" "}
                        Aymen Mohamed
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {doctorName == "Salma Mohamed" ? (
                <Grid item xs={12} sm={12} md={6}>
                  <Box sx={{ mt: 2 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Date
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Branch"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      >
                        <MenuItem value={" Saturday"}> Saturday</MenuItem>
                        <MenuItem value={"Sunday"}> Sunday</MenuItem>

                        <MenuItem value={"Monday"}> Monday</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={12} sm={12} md={6}>
                  <Box sx={{ mt: 2 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Date
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Branch"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      >
                        <MenuItem value={" Tuesda"}> Tuesda</MenuItem>
                        <MenuItem value={"Wednesday"}> Wednesday</MenuItem>

                        <MenuItem value={"Thursday"}> Thursday</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              )}

              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Branch"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    >
                      <MenuItem value={"1 pm"}> 1 pm</MenuItem>
                      <MenuItem value={"2 pm"}>2 pm</MenuItem>
                      <MenuItem value={"4 pm"}> 4 pm</MenuItem>
                      <MenuItem value={"3 pm"}> 3 pm</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Box sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Submit
                  </Button>

                  <Toaster />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Resrvation;
