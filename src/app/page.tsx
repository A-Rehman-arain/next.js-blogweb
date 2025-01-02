import Blog_Metro from "@/components/Blog Metro";
import Blog_Regular from "@/components/Blog Regular";
import Blog_Slider from "@/components/Blog Slider";
import Footer from "@/components/Footer";
import Sub_Footer from "@/components/Sub Footer";


export default function Home() {
  return (
    <div>
      <Blog_Slider/>
      <Blog_Regular/>
      <Blog_Metro/>
      <Footer/>
      <Sub_Footer/>
    </div>
  );
};
