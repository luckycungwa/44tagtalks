import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import CategoryChip from "./CategoryChip";

const PostCard = ({ imageUrl, title, subtitle, date, category, onClick }) => {


  return (
    <Card className="flex w-full h-auto flex-col text-left pb-2 w-auto h-auto flext-start" isHoverable isPressable onClick={onClick}>
      <CardBody className="h-36 min-h-36 max-h-48 flex w-full object-cover rounded-xl">
        <img
          alt={`${title} background cover`}
          className="bg-gray-200 text-gray-400 flex justify-center align-center items-center w-full h-full object-cover rounded-xl text-tiny text-center "
          src={imageUrl || "url('/default.jpeg')"}
          // width={180}
        />
      </CardBody>
      <div className=" px-4 flex-col items-start justify-between flex w-full h-full">
        <h4 className="font-bold truncate-text2 w-full flex-wrap ">{title}</h4>
        <p className="text-xs font-light truncate-text3 opacity-80 ">{subtitle}</p>
        <div className="flex justify-between w-full items-center mt-2">
          <p className="text-tiny font-light">{date}</p>
          <CategoryChip title={category} />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;