import Faq from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/hero-section";
import Offres from "@/components/offres/offres";
import Presentation from "@/components/presentation/presentation";
import SelectOffre from "@/components/select-offre/select-offre";
import ServiceAffaire from "@/components/service-affaire/service-affaire";
import Snapchat from "@/components/snapchat/snapchat";
import Socials from "@/components/socials/socials";
import VousChoisissez from "@/components/vous-choisissez/vous-choisissez";
//
export default function Home() {
  return (
    <div className=" space-y-12">
      <HeroSection />
      <Presentation />
      <VousChoisissez />
      <Offres />
      <SelectOffre />
      <Snapchat />
      <ServiceAffaire />
      <Faq />
      <Socials />
      <Footer />
    </div>
  );
}
