"use client";
import React from "react";
 
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import MagicButton from "./ui/MagicButton";
import PhaseButton from "./ui/PhaseButton";
import Image from "next/image";

const Process = () => {
  return (
    <>
    <div id="approch" className="heading bg-black-100 text-white text-4xl font-bold text-center py-10 bg-grid-white/[0.02]">
      My <span className="text-purple-900">Approach</span>
    </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black-100  dark:bg-black w-full gap-4 mx-auto px-8  bg-grid-white/[0.02]">
        <Card title="Planning & Strategy" description = "WE'll collabrorate to map out your website's goals,target audience and key functionality.We'll discus  things like site structure , navigation and content requirnements" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            dotSize={2}
          />
        </Card>
        <Card title="Development & Progress Update" description = "Once we agree on the plane, I cue my lofi playlist and dive into coding From initial sketches"  icon={<AceternityIcon2 />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Development & Launch" description = "This is where the magic happens!Based on the approved design , I'll transalte everthing into functional code,building your website from the ground up."  icon={<AceternityIcon3 />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  )
}
const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description:string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[15rem] lg:h-[30rem] rounded-lg"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20 rounded-lg">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2 className="dark:text-white text-ba opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-light group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {description}
        </h2>
      </div>
    </div>
  );
};
const AceternityIcon = () => {
  return (
    <Image src='https://img.icons8.com/?size=100&id=43448&format=png&color=ffffff' alt="one" height={120} width={120}/>)
};
const AceternityIcon2 = () => {
  return (
    <Image src='https://img.icons8.com/?size=100&id=101858&format=png&color=ffffff' alt="one" height={120} width={120}/>
  );
};
const AceternityIcon3 = () => {
  return (
    <Image src='https://img.icons8.com/?size=100&id=101859&format=png&color=ffffff' alt="one" height={120} width={120}/>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Process
