import CallToAction from "@/components/HomePage/CallToAction";
import ClientArea from "@/components/HomePage/ClientArea";
import Counterup from "@/components/HomePage/CounterUp";
import FeaturesArea from "@/components/HomePage/FeaturesArea";
import HeroSlider from "@/components/HomePage/HeroSlider";
import LatestBlog from "@/components/HomePage/LatestBlog";
import OurTeam from "@/components/HomePage/OurTeam";
import Portfolio from "@/components/HomePage/Portfolio";
import Services from "@/components/HomePage/Services";
import TestImonials from "@/components/HomePage/TestImonials";
import VideoFeature from "@/components/HomePage/VideoFeature";
import Layout from "@/components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <HeroSlider />
        <FeaturesArea />
        <VideoFeature />
        <Services />
        <CallToAction />
        <Portfolio />
        <TestImonials />
        <Counterup />
        <OurTeam />
        <LatestBlog />
        <ClientArea />
      </Layout>
    </>
  );
}
