import Image from "next/image";
import Nav from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
    </div>
  );
}