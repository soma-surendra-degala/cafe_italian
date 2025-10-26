import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Menu from "../menu/menu";
import Main from "../main/main";
import Specials from "../specials/specials";
import Highlights from "../highlights/highlights";
import Booking from "../booking/booking";
import Reviews from "../reviews/reviews";
import Follow from "../follow/follow";
import Footer from "../../components/footer/footer";
import Contact from "../contact/contact";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Menu */}
      <section id="menu" className="my-5">
        <Menu />
      </section>

      {/* Main (We Offer) */}
      <section id="main" className="my-5">
        <Main />
      </section>

      {/* Specials */}
      <section id="specials" className="mt-5 py-1">
        <Specials />
      </section>

      {/* Highlights */}
      <section id="highlights">
        <Highlights />
      </section>

      {/* Booking */}
      <section id="booking">
        <Booking />
      </section>

      {/* Reviews */}
      <section id="reviews" className="my-5">
        <Reviews />
      </section>

      {/* Follow Us Section */}
      <section id="follow">
        <Follow />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
}
