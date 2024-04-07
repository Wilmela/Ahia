import { ReactNode, cache } from "react";
import Product from "@/components/shared/Product";
import Wrapper from "@/components/shared/Wrapper";
import { MapPin, Phone, Tag, UserRound } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import {
  findAllProducts,
  findProductsByCategory,
  findProductById,
} from "@/lib/actions/product.actions";
import { ProductType } from "@/type";

type ParamsType = {
  params: { id: string };
};

// Cache the getProduct request call.
const getProductById = cache(async (id: string) => {
  return await findProductById(id);
});

// Dynamic Metadata
export const generateMetadata = async ({
  params: { id },
}: ParamsType): Promise<Metadata> => {
  const product: ProductType = await getProductById(id);
  return {
    title: `Product: ${product?.name}`,
    openGraph: {
      images: {
        url: product?.imageUrl,
      },
    },
  };
};

// Static Page Rendering
export const generateStaticParams = async () => {
  const products: ProductType[] = await findAllProducts();
  return products.map((prod: ProductType) => ({ id: prod._id }));
};

const ProductDetail = async ({ params: { id } }: ParamsType) => {
  const product: ProductType = await getProductById(id);
  const relatedItems: ProductType[] = await findProductsByCategory(
    product.category,
    6
  );

  return (
    <>
      <section className="py-8 md:py-20 bg-white">
        <Wrapper className="flex flex-col">
          <h3 className="page-title">PRODUCT DETAIL</h3>

          {/* LEFT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="col-span-2">
              <div className="flex items-center gap-8 mb-4">
                <p className="font-[500] text-2xl md:text-3xl lg:text-4xl">
                  {product?.name}
                </p>
                <p className="w-fit bg-APP_YELLOW/30 text- p-2 rounded-full font-[300] text-xs">
                  {product?.category}
                </p>
              </div>
              <p>{product?.description}</p>
              <Info>
                <Tag />₦{product?.price}
              </Info>
              <Info>
                <UserRound /> {product?.dealer}
              </Info>
              <Info>
                <MapPin /> {product?.location}
              </Info>
              <Info className="w-fit">
                <Phone /> {product?.phone}
              </Info>
            </div>

            {/* RIGHT */}
            <div className="col-span-3 w-full h-[500px] overflow-hidden relative">
              <Image
                src={product?.imageUrl as string}
                alt="product_image"
                fill
                priority
                //     sizes="(min-width: 786px) 100vh, 400px"
                className="object-contain"
              />
            </div>
          </div>
          {/* Sort by dealer */}
        </Wrapper>
      </section>

      <section className="py-8 md:py-20 bg-gray-50 border-t mt-8">
        <Wrapper className="flex flex-col ">
          <h3 className="heading-text mb-8">Related Products</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center gap-4">
            {relatedItems.map((item: ProductType) => {
              return (
                <Product
                  key={item._id}
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
              );
            })}
          </ul>
        </Wrapper>
      </section>
    </>
  );
};

export default ProductDetail;

// Helper Component
const Info = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex gap-2 my-4 cursor-pointer hover:text-APP_LIGHT_GREEN transition-all duration-300",
      className
    )}
  >
    {children}
  </div>
);
