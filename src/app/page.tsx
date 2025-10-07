import { Banner } from "@/components/Banner";
import { Capstone } from "@/components/Capstone";
import { Footer } from "@/components/Footer";
import { UxClass } from "@/components/UxClass";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>
      <section id="lately">
        <Capstone />
        <UxClass />
      </section>
        
      <section id="work">
        <Works />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
