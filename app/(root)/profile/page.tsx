import ShopItems from "@/components/shared/ShopItems";
import Wrapper from "@/components/shared/Wrapper";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import { findUserById } from "@/lib/actions/user.actions";
import Image from "next/image";
import { findProductsByOwner } from "@/lib/actions/product.actions";

export const metadata: Metadata = {
  title: "Profile",
};

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

const ProfilePage = async () => {
  const { sessionClaims } = auth();

  const user = await findUserById(sessionClaims?.userId as string);

  return (
    <section>
      <Wrapper className="grid grid-cols-1 md:grid-cols-7 py-8 lg:py-20">
        <div className="bg-white shadow-sm p-4 ">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border relative overflow-hidden">
            <Image
              src={user?.imgUrl}
              fill
              alt="user"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Field caption="Name" detail={user.firstName} />
            <Field caption="Phone" detail={user.phone} />
            <Field caption="Address" detail="200 Aba road, PH." />
          </div>

          {/* <CategoryCard /> */}
        </div>

        <div className="md:col-span-6">
          <h3 className="heading-text">My Listings</h3>

          <ShopItems products={user?.products} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ProfilePage;
