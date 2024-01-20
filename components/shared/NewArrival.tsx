import { PRODUCT } from "@/constants";
import Product from "./Product";

type ProductType = (typeof PRODUCT)[number];

const NewArrival = () => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center gap-2 md:gap-4">
      {/* Fetch with the limit of 8 */}
      {PRODUCT.slice(0, 7).map((item: ProductType, i: number) => {
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

export default NewArrival;
