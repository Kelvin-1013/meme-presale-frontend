import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GetToken } from "@/components/GetToken";
import { About } from "@/components/About";
import { TokenInfo } from "@/components/TokenInfo";
import { Roadmap } from "@/components/Roadmap";
import { HowToBuy } from "@/components/HowToBuy";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <GetToken />
      <About />
      <TokenInfo />
      <Roadmap />
      <HowToBuy />
    </div>
  );
};

export default Index;