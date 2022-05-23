import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkCard from "../src/components/WorkCard";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-100">
      <div className="pt-8 flex flex-col justify-center max-w-md mx-auto">
        <div className="text-center">
          <span className="text-2xl"> Hi, I&apos;m Anish - Blockend Developer</span>
        </div>
        <div className="flex justify-center space-x-4 mt-4" >
          <span><a href="https://twitter.com/itsanishjain" target="_blank" rel="noreferrer" >Twitter</a></span>

          <span><a href="https://github.com/itsanishjain" target="_blank" rel="noreferrer">Github</a></span>

          <span><a href="https://www.youtube.com/channel/UC_k5xjI9j35RyDGQl-MEaQQ" target="_blank" rel="noreferrer">Youtube</a></span>

          <span><a href="/anish_resume_2.pdf" target="_blank" rel="noreferrer" >Resume</a></span>
        </div>
      </div>
      <div className="mt-8 p-4">
        <hr />
        <WorkCard />
      </div>
    </div>


  );
}
