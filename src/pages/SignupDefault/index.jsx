import React from "react";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";

const SignupDefaultPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigateToSignIn = () => {
    navigate('/signin');
  };
  
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:57678/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "name": "Paul222",
          "lastName": "Calderon222",
          "idNumber": "000-121212212-1",
          "phoneNumber": "8094441977",
          "email": "paulscalderon@gmail.com",
          "password": "paul0409"
        }),
      });
  
      if (response.ok) {
        console.log("Signup succes");
        console.log(response);
      } else {
        // Handle signup error, maybe display an error message
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        console.log(response);
      }
    } catch (error) {
      console.error("Unexpected error during signup:", error);
    }
  };
  
  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[72px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[1260px] mx-auto w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 text-center w-full"
              size="txtInterBold28"
            >
              <>Nubault Bank</>
            </Text>
            <Img
              className="h-[597px] w-[493px]"
              src="images/img_group7.svg"
              alt="groupSeven"
            />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                  size="txtInterBold24Bluegray800"
                >
                  Regístrate
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-[452px] md:w-full">
                  
                  <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start w-full">
                    <Line className="bg-indigo-50 h-px w-[39%]" />
                    <Text
                      className="text-bluegray-800 text-sm"
                      size="txtInterRegular14Bluegray800"
                    >
                    
                    </Text>
                    <Line className="bg-indigo-50 h-px w-[39%]" />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="frame"
                          placeholder="Nombre Completo"
                          value={fullName}
                          onChange={(e) => setFullName(e, setFullName)}
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="text"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="frame_One"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e, setEmail)}
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
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="password"
                          placeholder="************"
                          value={password}
                          onChange={(e) => setPassword(e, setPassword)}
                          className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pt-[15px] px-5 rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }

                        ></Input>
                      </div>
                    </div>
                    <Text
                      className="leading-[22.00px] text-bluegray-800 text-center text-sm"
                      size="txtInterMedium14Bluegray800"
                    >
                      
                      <span className="text-bluegray-800 font-inter font-medium">
                        <>
                          {" "}
                          <br />
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border border-white-A700 rounded-full">
                <Button
                  className="bg-deep_orange-300 hover:bg-deep_orange-200 focus:outline-none cursor-pointer font-bold py-3 px-6 text-sm text-white"
                  onClick={handleSignup}
                >
                  Registrarme
                </Button>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                  LOGIN
                </Button>
                <div className="flex flex-row gap-1 items-start justify-center w-full">
                  <Text
                    className="text-bluegray-800 text-sm w-auto"
                    size="txtInterRegular14Bluegray800"
                  >
                    ¿Ya tienes una cuenta?
                  </Text>
                  <span
                    className="text-deep_orange-300 text-sm underline cursor-pointer w-11"
                    onClick={handleNavigateToSignIn}
                  >
                    Inicia sesión
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupDefaultPage;
