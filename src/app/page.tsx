// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Posts from "./posts";
import Articles from "./articles";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Posts />
      <Articles />
      <Footer />
    </>
  );
}
