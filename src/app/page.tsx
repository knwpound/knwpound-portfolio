import { Banner } from "@/components/Banner";
import { Capstone } from "@/components/Capstone";
import { Footer } from "@/components/Footer";
import { UxClass } from "@/components/UxClass";
import { Works } from "@/components/Works";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Capstone/>
      <UxClass/>
      <Works/>
      <Footer/>
    </div>
  );
}
