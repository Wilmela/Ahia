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
      <Wrapper className="flex flex-col relative">
        <h3 className="page-title">SHOP ITEMS</h3>

        <CategoryCard className="flex flex-wrap gap-4 mb-4 md:hidden" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        <div className="col-span-3 md:col-span-3 lg:col-span-5">

        <ShopItems products={PRODUCT} />
        </div>

        {/* RIGHT */}
        <div className="bg-white shadow-md sticky right-0 top-36 h-fit lg:col-span-1 p-2 md:pl-4 hidden md:block">
            <p className="font-semibold text-xs md:text-sm text-gray-700 text-center md:text-start">
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
