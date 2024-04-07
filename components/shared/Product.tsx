"use client";

import { ProductType } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Product = ({
  _id,
  name,
  imageUrl,
  price,
  condition,
  description,
  dealer,
  phone,
  category,
  location,
}: ProductType) => {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/products/${_id}`)}
      key={name}
      className="p-2 h-96 bg-white flex flex-col items-center gap-2 shadow-md cursor-pointer rounded-md"
    >
      <div className="w-full h-[1000px] rounded-md overflow-hidden relative flex items-center justify-center bg-APP_ORANGE/10">
        <Image
          src={imageUrl}
          fill
          alt={name}
          className="object-cover object-center"
        />
        <p className="absolute top-2 right-2 bg-APP_YELLOW/30 text-white p-2 rounded-full font-[300] text-xs">
          {category}
        </p>
        <div className="absolute inset-x-0 bottom-2">
          <p className="text-gray-400 font-[400] text-xs text-center uppercase">
            {dealer}
          </p>
          <p className="text-gray-400 font-[400] text-xs text-center uppercase">
            posted on Ahia
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col py-2 w-full">
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
          <p className="font-[500] line-clamp-1">{name}</p>
          <p className="text-sm bg-APP_BLUE/10 text-APP_DARK_GREEN w-fit p-2 rounded-2xl">
            ₦{price}
          </p>
        </div>

        <p className="font-[300] text-muted-foreground py-2 leading-5 text-xs md:text-[1rem]">
          {description.slice(0, 90)}...
        </p>
        <div className="flex justify-between">
          <p className="self-end bg-APP_DARK_GREEN/10 text-APP_DARK_GREEN p-2 rounded-full text-xs">
            {location}
          </p>
          <p className="self-end bg-APP_ORANGE/10 text-APP_ORANGE p-2 rounded-full text-xs">
            {condition}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Product;
