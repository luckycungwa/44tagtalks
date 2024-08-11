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
    <Card className="pb-4 text-left min-h-[320px] max-h-[320px] max-w-[400px] w-auto h-auto max-h-[320px]" isHoverable isPressable onClick={onClick}>
      <CardBody className="py-2 w-full object-cover rounded-xl">
        <img
          alt={title +" background image"}
          className="w-auto h-auto object-cover rounded-xl"
          src={imageUrl || "https://via.placeholder.com/270"}
          width={180}

        />
      </CardBody>
      <div className=" pt-2 px-4 flex-col items-start justify-between flex w-full h-full">
        <h4 className="font-bold truncate-text2 w-full flex-wrap ">{title}</h4>
        <p className="text-tiny  truncate-text2">{subtitle}</p>
        <div className="flex justify-between w-full">
          <p className="text-tiny">{date}</p>
          <CategoryChip title={category} />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;