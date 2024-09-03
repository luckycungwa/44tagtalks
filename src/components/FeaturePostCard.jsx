import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const FeaturePostCard = ({ imageUrl, onClick, title, subtitle, date, category }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    console.log("read more");
    navigate("/post/:slug");
  };

  return (
    <Card
      isHoverable
      isPressable
      onClick={onClick}
      className="flex-row items-start w-auto min-h-[150px] h-[150px] "
    >
      <CardBody className="flex flex-row w-full h-full">
        <div className="bg-gray-200 rounded-xl max-h-[124px] h-[140px] min-w-[130px]">
          <img
            alt="Card background"
            className="w-full h-full object-cover rounded-lg text-[#4d4d4d94] text-center text-tiny"
            src={ imageUrl || "https://assets.lummi.ai/assets/QmYCNnEiMk2Y4HzJaQ2n6gyNt27HCYuwBUCtBAKMcx7ZvW?auto=format&w=1500"}
          
          />
        </div>
        <div className="flex flex-col w-full justify-between h-full pl-3 gap-8">
          <p className="font-bold truncate-text3">{title}</p>
          <p className="text-tiny text-default-400 bottom-0">{date}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeaturePostCard;
