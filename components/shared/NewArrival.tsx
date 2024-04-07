import Product from "./Product";
import { findAllProducts, findNewArrivals } from "@/lib/actions/product.actions";
import { ProductType } from "@/type";
import { Suspense } from "react";


const NewArrival = async () => {
  const products: ProductType[] = await findNewArrivals(8);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center gap-2 md:gap-4">
      {/* Fetch with the limit of 8 */}
      {products.map((item: ProductType, i: number) => {
        return (
          <Suspense key={item._id} fallback={<p>Loading...</p>}>
            <Product
              _id={item._id}
              name={item.name}
              imageUrl={item.imageUrl}
              condition={item.condition}
              description={item.description}
              dealer={item.dealer}
              phone={item.phone}
              price={item.price}
              category={item.category}
              location={item.location}
            />
          </Suspense>
        );
      })}
    </ul>
  );
};

export default NewArrival;
