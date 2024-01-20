import SellForm from "@/components/shared/SellForm";
import Wrapper from "@/components/shared/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell",
};

const SellPage = () => {
  return (
    <section className="bg-gray-50">
      <Wrapper className="flex flex-col items-center justify-center">
        <h3 className="heading-text mb-6">Post an Item</h3>
        <SellForm type="Create" />
      </Wrapper>
    </section>
  );
};

export default SellPage;
