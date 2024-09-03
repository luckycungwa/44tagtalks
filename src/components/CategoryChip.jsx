import { Chip } from "@nextui-org/react";
import React from "react";

const CategoryChip = ({ title }) => {
  return (
    <div>
      <Chip  className="border-1 border-[#ff4b14d1] text-tiny text-[#ff4b14d1]" variant="dot" size="sm">
        {title}
      </Chip>
    </div>
  );
};

export default CategoryChip;
