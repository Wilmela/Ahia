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
    <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 items-center gap-2">
      {categories.slice(1, categories.length).map((cat: CatType, i: number) => {
        return (
          <li
            key={cat.name}
            onClick={() => {
              router.push(`/shop?category=${cat.name.trim().toLowerCase()}`);

              setCat(cat.name.toLowerCase());
            }}
            className="p-2 bg-white flex flex-col items-center gap-2 shadow-md cursor-pointer"
          >
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-APP_ORANGE/10">
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
