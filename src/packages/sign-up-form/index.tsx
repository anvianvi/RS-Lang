import "./style.css";
import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";



interface State {
  password: string;
  showPassword: boolean;
}

export default function SignUpForm() {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // const url='https://rs-lang-team15.herokuapp.com/doc/#/';
  // const [data, setData] = useState({
  //   name: '',
  //   emai: ''
  // })
  const sendData = () => {
    const nameData = (document.getElementById('nameData')as HTMLInputElement).value;
    const nameEmail = (document.getElementById('nameEmail')as HTMLInputElement).value;
    const namePsw = (document.getElementById('pswName')as HTMLInputElement).value;

    localStorage.setItem('name', nameData);
    localStorage.setItem('email', nameEmail);
    localStorage.setItem('password', namePsw);
  }


  return (
    <div className="sign-in-container">
      <Typography variant="h4">
        <b>Registration</b>
      </Typography>

      <TextField
        required
        sx={{ m: 1, width: "25ch" }}
        name="name"
        type="text"
        placeholder="your name or nickname"
        label="Name"
        id="nameData"
        // value={data.name}
        // onChange={(e)=> handle(e)}
      />

      <TextField
        required
        sx={{ m: 1, width: "25ch" }}
        name="email"
        type="email"
        placeholder="example@email.com"
        label="Email"
        // value={data.emai}
        id="nameEmail"
        // onChange={(e)=> handle(e)}
      />

      <FormControl sx={{ m: 1, width: "25ch" }} 
      variant="outlined">
        <InputLabel htmlFor="sign-up-password">Password</InputLabel>
        <OutlinedInput
          required
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          id="pswName"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button variant="contained" onClick={sendData}>Sign up</Button>
      <Button href="#text-buttons">Do you have an account? Sign In</Button>
    </div>
  );
}
