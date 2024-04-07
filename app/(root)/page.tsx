import Category from "@/components/shared/Category";
import NewArrival from "@/components/shared/NewArrival";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <Wrapper className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-8 lg:py-20">
          {/* LEFT */}
          <div className="w-full flex flex-col gap-7 sm:items-center md:items-start">
            <h3 className="title sm:text-center md:text-left">
              <span>Buy</span> <br className="sm:hidden md:block" />
              <span>and sell anything!</span>
            </h3>

            <div className="flex flex-col gap-1">
              <p className="subtitle">
                Join over 2k+ sellers and 5k+ buyers here.
              </p>
              <p className="subtitle">
                Enjoy the benefits of properly vetted items.
              </p>
            </div>

            <div className="flex gap-2">
              <Button size="lg" asChild className="cta-btn bg-APP_ORANGE">
                <Link href="#new_arrivals">New Arrivals</Link>
              </Button>
              <Button size="lg" asChild variant="ghost" className="cta-btn">
                <Link href="/shop">Shop &rarr;</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden w-full h-[400px] md:h-[40vh] lg:h-[600px] hidden sm:block">
            <Image
              src="/assets/images/banner.png"
              alt="banner"
              fill
              priority
              sizes="(min-width 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </Wrapper>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 border-t py-8">
        <Wrapper className="flex flex-col gap-5">
          <h3 className="heading-text">Explore popular categories</h3>
          <Category />
        </Wrapper>
      </section>

      {/* NEW ARRIVALS */}
      <section id="new_arrivals" className="bg-gray-50 py-8">
        <Wrapper className="flex flex-col gap-5">
          <h3 className="heading-text">New Arrivals</h3>
          <NewArrival />
        </Wrapper>
      </section>
    </>
  );
}
