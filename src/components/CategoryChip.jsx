import { Chip } from "@nextui-org/react";
import React from "react";

const CategoryChip = ({ title }) => {
  return (
    <div>
      <Chip color="warning" variant="bordered" size="sm">
        {title}
      </Chip>
    </div>
  );
};

export default CategoryChip;
