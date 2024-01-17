import React from "react";

import LoanHistory from 'components/LoanHistory';
import LoanApplication from 'components/LoanApplication';
import LoanDetails from 'components/LoanDetails';

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LoanPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

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
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[59%] md:w-full">
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
              <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[34px] items-center justify-start w-[72%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-[78%]">
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
                onClick={() => navigate("/beneficiarios")}
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
        <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtInterSemiBold28"
            >
              Préstamos
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-[94%] md:w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Aplicación para préstamo
              </Text>
              <LoanApplication />
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Listado de prestamos
              </Text>
              <LoanDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanPage;
