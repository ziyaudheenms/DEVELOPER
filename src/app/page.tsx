import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon:'https://img.icons8.com/?size=100&id=7694&format=png&color=ffffff'
    },
    {
      name: " Projects",
      link: "#projects",
      icon:'https://img.icons8.com/?size=100&id=53428&format=png&color=ffffff'

      
    },
    {
      name: "Achivements",
      link: "#test",
      icon:'https://img.icons8.com/?size=100&id=1135&format=png&color=ffffff'

      
    },
    {
      name: "Approch",
      link: "#approch",
      icon:'https://img.icons8.com/?size=100&id=11221&format=png&color=ffffff'

      
    },
  ];
  return (
    <main className="">
      <div className=" w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        <Testimonial />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
