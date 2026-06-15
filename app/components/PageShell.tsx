import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
