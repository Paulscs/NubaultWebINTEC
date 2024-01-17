import React from "react";

import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

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
                
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[405px] py-20 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-start w-auto">
                  
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-auto"
                    size="txtInterBold24Bluegray900"
                  >
                    Transferencias
                  </Text>
                  {/*
                  <div className="flex md:flex-col items-center justify-between md:ml-[0] ml-[3px] mt-[29px] rounded-[15px] w-full">                    
                  </div>
    */}

                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Banco
                      </Text>
                      <Input
                        name="Group195 One"
                        placeholder="NuBault"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                    </div>

                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Nombre del beneficiario
                      </Text>
                      <Input
                        name="Group195"
                        placeholder="Juana Mora"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                    </div>

                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Cuenta del beneficiario
                      </Text>
                      <Input
                        name="Group195 One"
                        placeholder="967926508"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                    </div>

                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Monto a transferir
                      </Text>
                      <Input
                        name="Group195 One"
                        placeholder="$"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                    </div>

                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Origen de transferencia
                      </Text>
                      <Input
                        name="Group195 Two"
                        placeholder="967926508"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        type="password"
                        shape="round"
                        color="white_A700"
                      ></Input>
                    </div>                    

                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[11px] min-w-[160px] md:ml-[0] ml-[3px] mt-[30px] rounded-[9px] text-center text-lg"
                    color="indigo_600"
                    size="md"
                    variant="fill"
                  >
                    Confirmar
                  </Button>

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
