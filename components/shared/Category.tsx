"use client";

import { categories } from "@/constants";
import { useShopContext } from "@/context/ShopProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CatType = (typeof categories)[number];
const Category = () => {
  const router = useRouter();
  const { setCat } = useShopContext();

  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 items-center gap-2">
      {categories.slice(1, categories.length).map((cat: CatType, i: number) => {
        return (
          <li
            key={cat.name}
            onClick={() => {
              router.push(`/shop?category=${cat.name.trim().toLowerCase()}`);

              setCat(cat.name.toLowerCase());
            }}
            className="py-4 bg-white flex flex-col items-center gap-2 shadow-md cursor-pointer hover:border-APP_LIGHT_GREEN/50 hover:border duration-300"
          >
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-APP_ORANGE/10 hover:scale-105 duration-300 hover:bg-APP_ORANGE/70">
              <Image
                src={cat.image}
                width={100}
                height={100}
                alt={cat.name}
                className="object-contain object-center"
              />
            </div>
            <p className="p-text">{cat.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
