import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";
const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      image: "/fro.png",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      image: "/bac.png",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image: "/dev.png",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      image: "/api.png",
    },
  ];
  const company = [
    {
      id: 1,
      image: "/bro.png",
      title: "BROTOTYPE",
    },
    {
      id: 2,
      image: "/steyp.png",
      title: "STEYP",
    },
    {
      id: 3,
      image: "/git.png",
      title: "GITHUB",
    },
  ];
  return (
    <div id="test" className="py-20 bg-black-100 antialiased bg-grid-white/[0.02] px-10">
      <h1 className="text-4xl text-center text-white font-bold">
        What <span className="text-purple-900">I Have Achived</span> Till Now
      </h1>
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-5 items-center">
        {company.map((item) => (
          <div className="flex items-center">
            <Image src={item.image} height={40} width={40} alt={item.title} className="h-8 w-14 sm:h-14 sm:w-20"/>
            <h4 className="text-white font-bold text-base sm:text-xl mx-2">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
