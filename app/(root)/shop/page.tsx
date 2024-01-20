import CategoryCard from "@/components/shared/CategoryCard";
import ShopItems from "@/components/shared/ShopItems";
import Wrapper from "@/components/shared/Wrapper";
import { PRODUCT } from "@/constants";
import { Metadata } from "next";

// Fetch product and include product name to metadata
export const metadata: Metadata = {
  title: "Shop",
};

const ShopPage = async () => {
  // TODO: fetch all products here


  return (
    <section className="py-8 lg:py-20 bg-gray-50">
      <Wrapper className="flex flex-col">
        <h3 className="page-title">SHOP ITEMS</h3>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          <div className="col-span-2 md:col-span-3 lg:col-span-5">
            <ShopItems products={PRODUCT}/>
          </div>

          {/* RIGHT */}
          <div className="bg-white shadow-md sticky right-0 top-10 h-fit lg:col-span-1 p-2 md:pl-4">
            <p className="font-semibold text-xs md:text-sm text-gray-700">
              Sort by category
            </p>
            <CategoryCard />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ShopPage;
