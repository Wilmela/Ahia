import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ShopContextProvider } from "@/context/ShopProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ShopContextProvider>

      <main className="flex-1 flex-grow">{children}</main>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}
