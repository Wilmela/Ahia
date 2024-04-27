"use client";

import { ProductType } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { formatNaira } from "@/lib/utils";

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
      <div className="w-full h-[200px] max-h-[200px] relative flex items-center justify-center">
        <Image
          src={imageUrl}
          fill
          alt={name}
          className="object-contain md:object-cover"
        />
        <p className="absolute top-2 right-2 bg-APP_ORANGE text-primary-foreground p-2 rounded-full font-[300] text-xs">
          {category}
        </p>
        <div className="absolute inset-x-0 bottom-2">
          <Separator />
        </div>
      </div>

      <div className="bg-white flex flex-col py-2 w-full gap-1 flex-1">
        <p className="font-[500] line-clamp-2 text-[1rem] leading-[1rem] md:text-lg">
          {name}
        </p>

        <p className="font-[300] text-muted-foreground flex-grow leading-4 text-xs md:text-[0.9rem]">
          {description.length >= 90
            ? `${description.slice(0, 90)}...`
            : description}
        </p>
        <>
          <p className="text-APP_DARK_GREEN text-[1.2rem]">
            {formatNaira(price)}
          </p>

          <div className="w-fit mt-2">
            <p className="text-muted-foreground text-sm">
              Location: {location}
            </p>

            <p className="text-muted-foreground text-sm">
              Condition: {condition}
            </p>
          </div>
        </>
      </div>
    </li>
  );
};

export default Product;
