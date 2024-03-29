// SigninComponent.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckBox, Img, Input, Text } from "components";

const SigninComponent = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleNavigateToSignUp = () => {
    navigate("/signup");
  };

  const handleSignInClick = () => {
    if (email && password) {
      onSignIn({ email, password, rememberPassword });
    }
  };

  return (
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
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        />
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
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-full">
                      <CheckBox
                        className="font-medium sm:pr-5 text-bluegray-800 text-left text-sm"
                        inputClassName="flex-1 mr-[5px]"
                        name="remember"
                        id="remember"
                        label="Recuerda mi contraseña"
                        checked={rememberPassword}
                        onChange={() => setRememberPassword(!rememberPassword)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-white-A700 rounded-full">
                <Button
                  className="bg-deep_orange-300 hover:bg-deep_orange-200 focus:outline-none cursor-pointer font-bold py-3 px-6 text-sm text-white"
                  onClick={handleSignInClick}
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
    </div>
  );
};

export default SigninComponent;
