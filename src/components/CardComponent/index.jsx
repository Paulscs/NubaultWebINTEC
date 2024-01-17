import React from 'react';
import { Button, Img, Text} from "components";

const CardComponent = () => {
  const buttonIcon = "images/img_file_1.svg";
  const cardType = "Secondary";
  const bankName = "DBL Bank";
  const cardNumber = "**** **** 5600";
  const cardHolderName = "William";
  const viewDetailsText = "View Details";

  return (
    <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
      <Button
        className="flex h-[60px] items-center justify-center w-[60px]"
        shape="round"
        color="gray_102"
        size="md"
        variant="fill"
      >
        <Img
          className="h-[26px]"
          src={buttonIcon}
          alt="file One"
        />
      </Button>
      <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px]">
        <Text
          className="text-base text-bluegray-900"
          size="txtInterMedium16Bluegray900"
        >
          Card Type
        </Text>
        <Text
          className="text-[15px] text-bluegray-400"
          size="txtInterRegular15Bluegray400"
        >
          {cardType}
        </Text>
      </div>
      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px]">
        <Text
          className="text-base text-bluegray-900"
          size="txtInterMedium16Bluegray900"
        >
          Bank
        </Text>
        <Text
          className="text-[15px] text-bluegray-400"
          size="txtInterRegular15Bluegray400"
        >
          {bankName}
        </Text>
      </div>
      <div className="flex flex-col gap-[7px] items-center justify-start ml-11 md:ml-[0]">
        <Text
          className="text-base text-bluegray-900"
          size="txtInterMedium16Bluegray900"
        >
          Card Number
        </Text>
        <Text
          className="text-[15px] text-bluegray-400"
          size="txtInterRegular15Bluegray400"
        >
          {cardNumber}
        </Text>
      </div>
      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[47px]">
        <Text
          className="text-base text-bluegray-900"
          size="txtInterMedium16Bluegray900"
        >
          Card Holder
        </Text>
        <Text
          className="text-[15px] text-bluegray-400"
          size="txtInterRegular15Bluegray400"
        >
          {cardHolderName}
        </Text>
      </div>
      <Text
        className="md:ml-[0] ml-[34px] text-[15px] text-indigo-500"
        size="txtInterMedium15Indigo500"
      >
        {viewDetailsText}
      </Text>
    </div>
  );
};

export default CardComponent;
