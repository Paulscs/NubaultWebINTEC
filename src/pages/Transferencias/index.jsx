import React from "react";

import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const EKYCIntroductionStepOnePage = () => {
  const navigate = useNavigate();
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
       <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto pb-[30px] w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-full">
            <Img
              className="h-20 md:h-auto object-cover w-[75%]"
              src="images/nubanksvg.svg"
              alt="Logo"
            />
           <div className="flex flex-col items-start justify-start mb-[334px] w-full">
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[65%] md:w-full">
                  <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_home_25X25.svg"
                  alt="home"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start w-[67%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-start justify-start w-[77%]">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_glyph.svg"
                    alt="Glyph"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Transferencias
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[59%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/cuentabanco2.svg"
                    alt="user"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Cuenta
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/loan")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[45%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_question.svg"
                    alt="question"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Préstamos
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/productos")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[72%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_file.svg"
                    alt="file"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Productos
                  </Text>
                </div>
              </div>

              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/services")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[56%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_user.svg"
                    alt="serviceOne"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Beneficiarios
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/settingeditprofile")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-1/2 md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Ajustes
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  eKYC
                </Text>
                <Text
                  className="text-base text-bluegray-400 text-right w-auto"
                  size="txtInterRegular16"
                >
                  <span className="text-bluegray-400 font-inter font-normal">
                    Setting/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                    eKYC
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[405px] py-20 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-auto"
                    size="txtInterBold24Bluegray900"
                  >
                    Introduction
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 hover:border hover:border-indigo-50 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-7 w-7"
                              src="images/img_ticket.svg"
                              alt="ticket"
                            />
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Bước 1:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Scan ID Card
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowright_bluegray_900_24x24.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-7 w-7"
                              src="images/img_settings.svg"
                              alt="settings"
                            />
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-800 text-sm w-full"
                                size="txtInterRegular14Bluegray800"
                              >
                                Bước 1:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Scan Face
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_bluegray_400.svg"
                            alt="lock"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <div className="md:h-7 h-[30px] relative w-[9%]">
                              <Img
                                className="absolute h-7 left-[0] top-[0]"
                                src="images/img_menu_bluegray_400.svg"
                                alt="menu"
                              />
                              <div className="absolute bottom-[0] flex flex-col h-4 items-center justify-start right-[0] w-4">
                                <div className="bg-white-A700 flex flex-col h-[13px] items-center justify-start outline outline-[0.5px] outline-bluegray-400 p-0.5 rounded-md w-[13px]">
                                  <Img
                                    className="h-[9px] w-[9px]"
                                    src="images/img_checkmark_bluegray_400.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Bước 3:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Confirm Information
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_bluegray_400.svg"
                            alt="lock"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-[25px] rounded hover:shadow-bs5 shadow-bs5 w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                          <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-7 w-7"
                              src="images/img_reply.svg"
                              alt="reply"
                            />
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Bước 3:
                              </Text>
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterBold16"
                              >
                                Signature
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_bluegray_400.svg"
                            alt="lock"
                          />
                        </div>
                      </div>
                    </List>
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

export default EKYCIntroductionStepOnePage;
