"use client";

import { categories } from "@/constants";
import { useShopContext } from "@/context/ShopProvider";
import Image from "next/image";

const CategoryCard = ({ className }: { className?: string }) => {
  const { setCat } = useShopContext();

  return (
    <ul className={`py-2 ${className}`}>
      {categories.map((cat) => {
        return (
          <li
            onClick={() => setCat(cat.name)}
            key={cat.name}
            className="flex flex-col md:flex-row items-center md:gap-2 cursor-pointer my-2 md:my-4"
          >
            <div className="w-10 h-10 relative md:h-12 md:w-12 lg:w-[50px] lg:h-[50px] overflow-hidden">
              <Image
                src={cat.image as string}
                fill
                alt={cat.name}
                className="object-contain mb-2"
              />
            </div>

            <p className="text-xs md:text-sm font-[200] text-gray-700">
              {cat.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryCard;
