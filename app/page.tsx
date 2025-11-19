import PortfolioGrid from "@/components/PortfolioGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Banner - Full width, breaks out of margins */}
      <div className="w-screen h-[400px] sm:h-[700px] lg:h-[800px] xl:h-[900px] relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-[200px]">
        <Image
          src="/portfolio/hero.JPG"
          alt="Hero banner"
          fill
          className="object-cover object-top -translate-y-20"
          priority
          sizes="100vw"
        />
      </div>

      {/* Portfolio Grid */}
      <div className="bg-background">
        <PortfolioGrid />
      </div>
    </div>
  );
}

