import React, { useState, useEffect } from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AccountsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
 
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          // Redirect to the login page if the token is not available
          navigate("/signin");
          return;
        }

        const response = await fetch("http://localhost:57678/api/User/Logged", {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData(result.value); // Assuming the user data is available in the 'data' property
          console.log(result.value)
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);
  
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
                onClick={() => navigate("/transferencias")}
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[67%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-start justify-start w-[77%]">
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
        <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-between p-5 w-full">
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
        size="txtInterSemiBold28"
      >
        Cuentas
      </Text>

      {userData && (
        <div className="flex items-center">
          <Text
            className="sm:text-xl md:text-[18px] text-[20px] text-gray-900"
            size="txtInterSemiBold20"
          >
            {userData.name}
          </Text>
          <Text
            className="ml-2 sm:text-xl md:text-[18px] text-[20px] text-gray-900"
            size="txtInterSemiBold20"
          >
            {userData.lastName}
            </Text>
            </div>
          )}
        </div>
          
          <div className="flex flex-col gap-[23px] items-center justify-start w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-center w-[90%] md:w-full">
                    <Button
                      className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                      shape="circle"
                      color="gray_102"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Mi Balance
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
                        size="txtInterSemiBold25"
                      >
                        $12,750
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Ultimas transacciones
                </Text>
                <List
                  className="bg-white-A700 flex flex-col gap-2.5 items-center p-[25px] sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="round"
                      color="gray_102"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[27px]"
                        src="images/img_alarm.svg"
                        alt="alarm"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[25px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Spotify Subscription
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 Jan 2021
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[31px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[43px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[45px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Pending
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -$150
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="round"
                      color="gray_102"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[25px]"
                        src="images/img_group327.svg"
                        alt="Group327"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[25px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Mobile Service
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 Jan 2021
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[73px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Service
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[58px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[45px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Completed
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[46px] text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -$340
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="round"
                      color="gray_102"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[25px]"
                        src="images/img_group326.svg"
                        alt="Group326"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[25px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Emilly Wilson
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 Jan 2021
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[86px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Transfer
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[52px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[45px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Completed
                    </Text>
                    <Text
                      className="ml-11 md:ml-[0] text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +$780
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
