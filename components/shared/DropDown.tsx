// "use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/constants";

export const DropDown = ({
  onFieldChange,
  value,
}: {
  onFieldChange: () => void;
  value: string;
}) => {

  return (
    <Select
      name="selected"
      value={value}
      onValueChange={onFieldChange}
      defaultValue={value}
    >
      <SelectTrigger className="w-[180px] input-field">
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

export const ConditionDropDown = ({
  onFieldChange,
  value,
}: {
  onFieldChange: () => void;
  value: string;
}) => {

  return (
    <Select
      name="selected"
      value={value}
      onValueChange={onFieldChange}
      defaultValue={value}
    >
      <SelectTrigger className="w-[180px] input-field">
        <SelectValue placeholder="New" />
      </SelectTrigger>

      <SelectContent>
        {['New','Used'].map((item, i: number) => {
          return (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export const AvailabilityDropDown = ({
  onFieldChange,
  value,
}: {
  onFieldChange: () => void;
  value: string;
}) => {

  return (
    <Select
      name="selected"
      value={value}
      onValueChange={onFieldChange}
      defaultValue={value}
    >
      <SelectTrigger className="w-[180px] input-field">
        <SelectValue placeholder="Available" />
      </SelectTrigger>

      <SelectContent>
        {['Available','Sold'].map((item, i: number) => {
          return (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

