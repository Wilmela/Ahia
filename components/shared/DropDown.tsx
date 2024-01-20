// "use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/constants";

const DropDown = ({ onFieldChange, value }: { onFieldChange: () => void, value: string }) => {

  return (
    <Select
      name="selected"
      value={value}
      onValueChange={onFieldChange}
      defaultValue={value}
    >
      <SelectTrigger className="w-[180px] input-field" >
        <SelectValue placeholder="General" />
      </SelectTrigger>

      <SelectContent>
        {categories.map((item, i: number) => {
          return (
            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
