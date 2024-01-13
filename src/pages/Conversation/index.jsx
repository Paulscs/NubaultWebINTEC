import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const ConversationPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");
  const [searchboxonevalue, setSearchboxonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A701 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[927px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-start justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-[25px] w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <Text
                className="text-bluegray-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                Message
              </Text>
              <div className="bg-white-A700 flex md:flex-col flex-row font-inter md:gap-5 items-center justify-center px-4 rounded shadow-bs w-full">
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-center justify-start w-full">
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                      <div className="border-2 border-green-700 border-solid flex flex-col h-[62px] items-center justify-start p-[7px] rounded-[50%] w-[62px]">
                        <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                          <Img
                            className="h-12 md:h-auto rounded-[50%] w-12"
                            src="images/img_robototoyfacefinal2_48x48.png"
                            alt="robototoyfacefi"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-lg w-full"
                          size="txtInterBold18Bluegray800"
                        >
                          Ackerman
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm w-full"
                          size="txtInterRegular14Bluegray400"
                        >
                          My accout
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-bluegray-400 text-sm w-full"
                        size="txtInterRegular14Bluegray400"
                      >
                        Online (10)
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
                        <List
                          className="flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-5 justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                            <div className="md:h-12 h-[51px] relative w-[64%]">
                              <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_punktoyface1_48x48.png"
                                    alt="punktoyfaceOne"
                                  />
                                </div>
                              </div>
                              <div className="absolute bg-green-700 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              Lee
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                            <div className="md:h-12 h-[51px] relative w-[64%]">
                              <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_indiahigh.png"
                                    alt="indiahigh"
                                  />
                                </div>
                              </div>
                              <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              Riri
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                            <div className="md:h-12 h-[51px] relative w-[64%]">
                              <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_tintin22_48x48.png"
                                    alt="tintinTwentyTwo"
                                  />
                                </div>
                              </div>
                              <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              Jimo
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                            <div className="md:h-12 h-[51px] relative w-[64%]">
                              <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_vangoghbyamrit1_48x48.png"
                                    alt="vangoghbyamritOne"
                                  />
                                </div>
                              </div>
                              <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              Acker
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                            <div className="md:h-12 h-[51px] relative w-[64%]">
                              <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_punk9252toyfaceedita2.png"
                                    alt="punk9252toyface"
                                  />
                                </div>
                              </div>
                              <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                            </div>
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              Momo
                            </Text>
                          </div>
                        </List>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowright_bluegray_400_24x24.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <Input
                      name="searchbox_One"
                      placeholder="Search..."
                      value={searchboxonevalue}
                      onChange={(e) => setSearchboxonevalue(e)}
                      className="font-medium p-0 placeholder:text-bluegray-400 sm:pr-5 text-bluegray-400 text-left text-xs w-full"
                      wrapClassName="bg-gray-50 flex pl-4 pr-[35px] py-2.5 rounded w-full"
                      prefix={
                        <Img
                          className="cursor-pointer h-5 mr-2 my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#828fa2"
                          className="cursor-pointer h-5 my-auto"
                          onClick={() => setSearchboxonevalue("")}
                          style={{
                            visibility:
                              searchboxonevalue?.length <= 0
                                ? "hidden"
                                : "visible",
                          }}
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      }
                    ></Input>
                    <List
                      className="flex flex-col gap-5 items-end w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start my-0 w-full">
                        <div className="md:h-12 h-[51px] relative w-[10%] sm:w-full">
                          <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                            <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_punktoyface1_48x48.png"
                                alt="punktoyfaceOne"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-green-700 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-lg w-full"
                              size="txtInterBold18Bluegray800"
                            >
                              Lee Ankar
                            </Text>
                            <Text
                              className="text-base text-bluegray-800 w-full"
                              size="txtInterMedium16"
                            >
                              Hey! Can i meet you for a sec?
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-center w-auto">
                            <Text
                              className="text-bluegray-400 text-right text-sm w-auto"
                              size="txtInterRegular14Bluegray400"
                            >
                              now
                            </Text>
                            <Text
                              className="bg-red-600 flex h-6 items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-6"
                              size="txtInterBold12"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-indigo-50 w-full" />
                      <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start my-0 w-full">
                        <div className="md:h-12 h-[51px] relative w-[10%] sm:w-full">
                          <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                            <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_tintin22_48x48.png"
                                alt="tintinTwentyTwo"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-lg w-full"
                              size="txtInterBold18Bluegray800"
                            >
                              Jimo
                            </Text>
                            <Text
                              className="text-base text-bluegray-400 w-full"
                              size="txtInterRegular16"
                            >
                              Sorry for my mistaken ✓
                            </Text>
                          </div>
                          <Text
                            className="text-bluegray-400 text-right text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-indigo-50 w-full" />
                      <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start my-0 w-full">
                        <div className="md:h-12 h-[51px] relative w-[10%] sm:w-full">
                          <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                            <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_punk9252toyfaceedita2.png"
                                alt="punk9252toyface"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-lg w-full"
                              size="txtInterBold18Bluegray800"
                            >
                              Momo
                            </Text>
                            <Text
                              className="text-base text-bluegray-400 w-full"
                              size="txtInterRegular16"
                            >
                              Sorry for my mistaken ✓
                            </Text>
                          </div>
                          <Text
                            className="text-bluegray-400 text-right text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-indigo-50 w-full" />
                      <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start my-0 w-full">
                        <div className="md:h-12 h-[51px] relative w-[10%] sm:w-full">
                          <div className="absolute flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[0] w-12">
                            <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_indiahigh.png"
                                alt="indiahigh"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-bluegray-200 bottom-[0] h-[11px] outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]"></div>
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-lg w-full"
                              size="txtInterBold18Bluegray800"
                            >
                              Riri lee
                            </Text>
                            <Text
                              className="text-base text-bluegray-400 w-full"
                              size="txtInterRegular16"
                            >
                              Sorry for my mistaken ✓
                            </Text>
                          </div>
                          <Text
                            className="text-bluegray-400 text-right text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <Line className="bg-indigo-50 h-[747px] sm:h-px sm:w-full w-px" />
                </div>
                <div className="flex flex-1 flex-col items-start justify-start sm:px-5 px-[31px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[104px] items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <Text
                              className="text-bluegray-800 text-lg w-auto"
                              size="txtInterBold18Bluegray800"
                            >
                              Lee Ankar
                            </Text>
                            <div className="flex flex-col items-center justify-start w-[70%] md:w-full">
                              <div className="flex flex-row gap-2 items-center justify-start pb-[3px] pr-[3px] w-full">
                                <div className="bg-green-700 h-2 mb-1 mt-[7px] rounded-[50%] w-2"></div>
                                <Text
                                  className="text-bluegray-800 text-sm"
                                  size="txtInterMedium14Bluegray800"
                                >
                                  Online
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-4 items-start justify-start w-auto">
                            <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                              <Img
                                className="h-5"
                                src="images/img_search_bluegray_900.svg"
                                alt="search"
                              />
                            </Button>
                            <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                              <Img
                                className="h-5"
                                src="images/img_overflowmenu.svg"
                                alt="overflowmenu"
                              />
                            </Button>
                          </div>
                        </div>
                        <Line className="bg-indigo-50 h-px w-full" />
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-[300px]">
                            <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_punktoyface1_24x24.png"
                                alt="punktoyfaceOne"
                              />
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                Lee Ankar{" "}
                              </Text>
                              <div className="bg-gray-50 flex flex-col items-start justify-start p-4 rounded-bl rounded-br rounded-tr w-full">
                                <Text
                                  className="text-base text-bluegray-800 w-auto"
                                  size="txtInterMedium16"
                                >
                                  Hey! Can i meet you for a sec?
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start w-full">
                          <div className="flex flex-col gap-4 items-end justify-start w-auto">
                            <div className="flex flex-row gap-2 items-end justify-start w-auto">
                              <div className="bg-deep_orange-51 flex flex-col items-start justify-start p-4 rounded-bl rounded-tl rounded-tr w-[264px]">
                                <Text
                                  className="text-base text-bluegray-800 w-auto"
                                  size="txtInterMedium16"
                                >
                                  Hey! Can i meet you for a sec?
                                </Text>
                              </div>
                              <Img
                                className="h-5 w-5"
                                src="images/img_checkmark_deep_orange_300_20x20.svg"
                                alt="checkmark"
                              />
                            </div>
                            <div className="flex flex-row gap-2 items-end justify-start w-[311px]">
                              <div className="bg-gray-50 flex flex-col items-start justify-start p-4 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Img
                                    className="h-[133px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                                    src="images/img_vector.png"
                                    alt="vector_One"
                                  />
                                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtInterSemiBold16Bluegray900"
                                    >
                                      ☕️ Life Style Coffee
                                    </Text>
                                    <Text
                                      className="text-bluegray-402 text-sm w-full"
                                      size="txtInterRegular14Bluegray402"
                                    >
                                      8350 Melrose Ave, USA
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="h-5 w-5"
                                src="images/img_checkmark_deep_orange_300_20x20.svg"
                                alt="checkmark_One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col items-start justify-start px-[13px] py-2.5 rounded w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Input
                          name="frame3801"
                          placeholder="Enter message..."
                          className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-gray-50 pb-1.5 pt-[9px] px-[3px]"
                        ></Input>
                        <div className="flex flex-row gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_share.svg"
                            alt="share"
                          />
                          <Img
                            className="h-6 w-6"
                            src="images/img_link.svg"
                            alt="link"
                          />
                          <Img
                            className="h-6 w-6"
                            src="images/img_close_bluegray_400.svg"
                            alt="close"
                          />
                        </div>
                      </div>
                    </div>
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

export default ConversationPage;
