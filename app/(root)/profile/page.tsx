import CategoryCard from "@/components/shared/CategoryCard";
import ShopItems from "@/components/shared/ShopItems";
import Wrapper from "@/components/shared/Wrapper";
import { PRODUCT } from "@/constants";
import { cn } from "@/lib/utils";

const Field = ({
  caption,
  detail,
  className,
}: {
  caption: string;
  detail: string;
  className?: string;
}) => (
  <div className={cn("flex flex-col gap-1", { className })}>
    <p className="font-[500]">{caption}</p>
    <p className="font-[300]">{detail}</p>
  </div>
);

const ProfilePage = () => {
  const myProducts = PRODUCT.filter((product) => product.dealer === "Joy doe");
  return (
    <section>
      <Wrapper className="grid grid-cols-1 md:grid-cols-7 py-8 lg:py-20">
        <div className="bg-white shadow-sm p-4 ">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border">
            profile
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Field caption="Name" detail="Joy doe" />
            <Field caption="Phone" detail="0807 912 5783" />
            <Field caption="Address" detail="200 Aba road, PH." />
          </div>

          {/* <CategoryCard /> */}
        </div>

        <div className="md:col-span-6">
          <h3 className="heading-text">My Listed Items</h3>

          <ShopItems products={myProducts} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ProfilePage;
