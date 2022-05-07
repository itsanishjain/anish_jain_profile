import React from "react";
import Link from "next/link";

export default function Home() {
  return (

    <div className="mt-8 flex flex-col justify-center max-w-md mx-auto">
      <div className="text-center">
        <span className="text-2xl"> Hi, I&apos;m Anish - Blockend Developer</span>
      </div>
      <div className="flex justify-center space-x-4 mt-4" >
        <span><a href="https://twitter.com/itsanishjain">Twitter</a></span>
        <span><a href="https://github.com/itsanishjain">Github</a></span>
      </div>

    </div>

  );
}
