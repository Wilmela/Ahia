"use client";

import { formatNaira } from "@/constants";
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
      className="p-2 h-96 bg-white flex flex-col items-center gap-2 shadow-md cursor-pointer rounded-md relative"
    >
      <div className="w-full h-[200px] max-h-[200px] rounded-md overflow-hidden relative flex items-center justify-center">
        <Image
          src={imageUrl}
          fill
          alt={name}
          className="object-contain md:object-cover object-center"
        />
        <p className="absolute top-2 right-2 bg-APP_YELLOW/40 text-black p-2 rounded-full font-[300] text-xs">
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

      <div className="bg-white flex flex-col py-2 w-full gap-1">

          <div className="inline-flex flex-col">
            <p className="font-[500] line-clamp-1">{name}</p>
            <p className="text-sm text-APP_DARK_GREEN w-fit rounded-2xl">
              {formatNaira(price)}
            </p>
          </div>

          <p className="font-[300] text-muted-foreground py-2 leading-5 text-xs md:text-[1rem]">
            {description.slice(0, 90)}...
          </p>

        <div className="flex justify-between absolute bottom-5 inset-x-2">
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
