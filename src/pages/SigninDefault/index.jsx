import React from "react";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckBox, Img, Input, Line, Text } from "components";

const SigninDefaultPage = () => {
  const navigate = useNavigate();
  const [idNumberOrEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };

  const [credentials, setCredentials] = useState({
    
    idNumberOrEmail, password
    
  });

  const [authenticated, setAuthenticated] = useState(false);

  const handleEmailInputChange = (event) => {
    const value = event.target.value;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      idNumberOrEmail: value,
    }));
  };

  const handlePasswordInputChange = (event) => {
    const value = event.target.value;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: value,
    }));
  };

  const handleSignIn = async () => {

      fetch("http://localhost:57678/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }).then(response => response.json()).then(result =>{
        if(result.isSuccess == true){
          const token = result.value.token
          localStorage.setItem("token", token);
          isSuccessLog(result);
        }
      } )
      function isSuccessLog(result){
        console.log(result)
        setAuthenticated(true);
        navigate("/accounts");
      }
      // if (response.ok) {
      //   // const result = await response.json();
      //   // Store the token in localStorage
      //   // localStorage.setItem("token", result.token);
      //   // console.log(localStorage);
      //   // console.log("Tamo adentro");
      //   // console.log(result);

      //   // Update the state to indicate the user is authenticated
      //   setAuthenticated(true);

      //   // Redirect to the home page
      //   navigate("/");
      // } else {
      //   // Handle failed login (display an error message, etc.)
      //   console.error("Failed to sign in");
      //   console.log("email:" + credentials.idNumberOrEmail + "password:" + credentials.password);
      // }

  };
  
  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[106px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[1260px] mx-auto w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 text-center w-full"
              size="txtInterBold28"
            >
              Nubault Bank
            </Text>
            <Img
              className="h-[483px] w-full"
              src="images/img_workingtime.svg"
              alt="workingtime"
            />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                  size="txtInterBold24Bluegray800"
                >
                  Iniciar sesión
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Email
                        </Text>
                        <Input
                          name="email_One"
                          placeholder="xyz@gmail.com"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                          value={credentials.idNumberOrEmail} 
                          onChange={handleEmailInputChange}
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Contraseña
                        </Text>
                        <Input
                          name="password_One"
                          placeholder="************"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pl-5 pr-[35px] pt-[15px] rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                          type="password" 
                          value={credentials.password} 
                          onChange={handlePasswordInputChange} 
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-full">
                      <CheckBox
                        className="font-medium sm:pr-5 text-bluegray-800 text-left text-sm"
                        inputClassName="flex-1 mr-[5px]"
                        name="remember"
                        id="remember"
                        label="Recuerda mi contraseña"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-white-A700 rounded-full">
                <Button
                  className="bg-deep_orange-300 hover:bg-deep_orange-200 focus:outline-none cursor-pointer font-bold py-3 px-6 text-sm text-white"
                  onClick={handleSignIn}
                >
                  Iniciar sesión
                </Button>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                  LOGIN
                </Button>
                <div className="flex flex-row gap-1 items-start justify-center w-full">
                  <Text
                    className="text-bluegray-800 text-sm w-auto"
                    size="txtInterMedium14Bluegray800"
                  >
                    ¿No tienes una cuenta?
                  </Text>
                  
                  <div>
                    <span
                      className="text-deep_orange-300 text-sm underline cursor-pointer w-[51px]"
                      onClick={handleNavigateToSignUp}
                    >
                      Regístrate
                    </span>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninDefaultPage;
