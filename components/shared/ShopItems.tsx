"use client";

import { PRODUCT } from "@/constants";
import Product from "./Product";
import { useShopContext } from "@/context/ShopProvider";

type ProductType = (typeof PRODUCT)[number];

const ShopItems = ({ products }: { products: any }) => {
  const { cat } = useShopContext();

  const filteredByCategory =
    cat === "General"
      ? products
      : products.filter(
          (product: ProductType) =>
            product.category.toLowerCase() === cat.toLowerCase()
        );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-5">
      {/* Fetch all products  */}
      {filteredByCategory.map((item: ProductType, i: number) => {
        return (
          <Product
            _id={item._id}
            name={item.name}
            image={item.image}
            condition={item.condition}
            description={item.description}
            dealer={item.dealer}
            phone={item.phone}
            price={item.price}
            key={item._id}
            category={item.category}
            location={item.location}
          />
        );
      })}
    </ul>
  );
};

export default ShopItems;
