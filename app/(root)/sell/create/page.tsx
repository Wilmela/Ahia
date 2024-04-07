import ProductForm from "@/components/shared/ProductForm";
import Wrapper from "@/components/shared/Wrapper";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell",
};

const SellPage = () => {
   const { sessionClaims } = auth();
   const userId = sessionClaims?.userId as string;
   
  return (
    <section className="flex-1 bg-gray-50">
      <Wrapper className="flex flex-col items-center justify-center">
        <h3 className="heading-text mb-6">Post an Item</h3>
        <ProductForm type="Create" userId={userId} />
      </Wrapper>
    </section>
  );
};

export default SellPage;
