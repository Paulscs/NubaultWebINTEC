import React from "react";
import { Text, Input, SelectBox, Img, Button, List } from "components";

const profileComponent = () => {
  // Opciones de fecha para el SelectBox
  const dateOptionsList = [
    { label: "25 January 1990", value: "25-01-1990" },
    // Agrega más opciones según tus necesidades
  ];

  return (
    <div className="flex md:flex-1 flex-col items-start justify-start w-[83%] md:w-full">
      <div className="md:gap-5 gap-[29px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
        <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-full">
          <Text
            className="text-base text-bluegray-400"
            size="txtInterRegular16Bluegray400"
          >
            Your Name
          </Text>
          <Input
            name="language"
            placeholder="Charlene Reed"
            className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
            wrapClassName="border border-gray-300 border-solid w-full"
            shape="round"
            color="white_A700"
          ></Input>
        </div>
        <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-full">
          <Text
            className="text-base text-bluegray-400"
            size="txtInterRegular16Bluegray400"
          >
            User Name
          </Text>
          <Input
            name="language One"
            placeholder="Charlene Reed"
            className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
            wrapClassName="border border-gray-300 border-solid w-full"
            shape="round"
            color="white_A700"
          ></Input>
        </div>
        {/* ... Agrega más bloques según tus necesidades ... */}
      </div>
      <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[22px] w-full">
        {/* ... Agrega más bloques según tus necesidades ... */}
      </div>
      <List
        className="flex flex-col gap-[22px] items-center mt-[22px] w-full"
        orientation="vertical"
      >
        {/* ... Agrega más bloques según tus necesidades ... */}
      </List>
      <Button
        className="cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[675px] mt-[30px] rounded-[15px] text-center text-lg"
        color="indigo_600"
        size="md"
        variant="fill"
      >
        Save
      </Button>
    </div>
  );
};

export default profileComponent;
