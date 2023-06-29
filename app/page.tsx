import Cover from "@/components/Cover";
import FAQ from "@/components/FAQ";
import Fact from "@/components/Fact";
import Footer from "@/components/Footer/Footer";
import Member from "@/components/Member";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Success from "@/components/Success";
import Business from "@/components/business/Business";
import TDiv from "@/components/card/TDiv";
import Company from "@/components/company/Company";
import SDiv from "@/components/ser/SDiv";
import Touch from "@/components/touch/Touch";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Cover />
      <Success />
      <Fact />
      <SDiv />
      <TDiv />
      <Services />
      <Business />
      <Slider />
      <Member />
      <Company />
      <Touch />
      <FAQ />
      <Footer />
    </main>
  );
}
