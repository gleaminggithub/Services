 import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { getFeaturedRoom } from "@/libs/apis";
const  Home=async()=> {
  const featuredRoom =await getFeaturedRoom();
  // console.log(featuredRoom);
  // throw new Error("Unable to fetch");
  return (
    <>
    <HeroSection />
    <PageSearch/>
    <FeaturedRoom featuredRoom={featuredRoom}/>
    <Gallery/>
    <NewsLetter/>
    </>
  );
}

export default Home;
  