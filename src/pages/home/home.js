import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Menu from "../menu/menu";

export default function Home() {
  return (
    <div className="bg-black">
        <div>
            <Header />
        </div>
        <div>
            <Hero />
        </div>
        <div>
            <Menu />
        </div>
    </div>
  );
}


