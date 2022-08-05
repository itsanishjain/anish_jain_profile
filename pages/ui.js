import Link from "next/link";
import React from "react";
import { works } from "../src/utils/myWorks";

const ui = () => {
  return (
    <div className="bg-black text-gray-300 text-lg">
      <div className="flex justify-between items-center p-8">
        <p className="text-2xl font-bold">Anish</p>
        <p>Work</p>
      </div>

      <div className="mt-8 flex flex-col justify-center items-center space-y-4">
        <p className="text-md font-medium text-red-500">Hello!</p>
        <p className="text-3xl">I&apos;m Anish Jain</p>
        <p>Blockend Developer</p>
        <div className="flex space-x-2">
          <a
            href="mail:helloanishjain@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-red-700 p-4"
          >
            HIRE ME
          </a>
          {/* <button className='rounded-2xl bg-red-700 p-4'>MY WORKS</button> */}
          <Link href="#WORK">
            <a className="rounded-2xl bg-red-700 p-4">MY WORKS</a>
          </Link>
        </div>
        <div className="flex space-x-2">
          <span>
            <a
              href="https://twitter.com/itsanishjain"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </span>

          <span>
            <a
              href="https://github.com/itsanishjain"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>

          <span>
            <a
              href="https://www.youtube.com/channel/UC_k5xjI9j35RyDGQl-MEaQQ"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </span>

          <span>
            <a href="/jain_resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </span>
        </div>
      </div>

      {/* ABOUT */}

      <div className="flex flex-col justify-center items-center mt-16 space-y-4 max-w-lg mx-auto">
        <p className="text-4xl text-red-500">About Me</p>
        <p className="text-center">
          I&apos;m a passionate software engineer specialized in building full
          stack websites and web applications for individuals and small
          businesses!
        </p>
      </div>

      {/* The Works */}
      <div id="WORK" className="flex flex-col space-y-4 mt-16 items-center">
        <p className="text-4xl text-red-500">Works</p>
        <p className="text-center">
          It is important for all my clients to know how I can build you a
          successful web site.
        </p>

        {/* Card */}

        <div
          className="max-w-3xl mx-auto grid 
                grid-row-1 gap-8 p-2 md:grid-cols-2 md:gap-4"
        >
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white text-black 
                        rounded-md"
            >
              <img src={work.img} />
              <div className="p-4 space-y-2 h-full w-full">
                <p className="font-medium text-gray-500">{work.title}</p>
                <hr />
                <div className="flex space-x-4">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white"
                  >
                    Live
                  </a>

                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white"
                  >
                    Github
                  </a>

                  {work.videoUrl && (
                    <a
                      href={work.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white"
                    >
                      Youtube
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16 flex flex-col items-center space-y-4">
        <p className="text-4xl text-red-500">Skills</p>
        <p>JavaScript</p>
        <p>SOLIDITY</p>
        <p>NEXTJS</p>
        <p>Python</p>
        <p>HTML</p>
      </div>

      {/* Contact */}
      {/* <div className='mt-16 flex flex-col items-center'> */}
      <p className="text-4xl text-red-500 text-center mt-16">Contact Me</p>
      <form className="bg-white max-w-lg mx-2 md:mx-auto p-8 rounded-md space-y-4 flex flex-col mt-16">
        <input
          className="border-2 p-2 border-black block text-black rounded-sm"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border-2 p-2 border-black block text-black rounded-sm"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="border-2 p-2 border-black block text-black rounded-sm"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border-2 p-2 border-black block text-black rounded-sm"
          placeholder="Message"
        />
        <button className="rounded-2xl bg-red-700 p-4">SEND MESSAGE</button>
      </form>
      {/* </div> */}

      {/* Footer */}
      <div className="mt-16 text-center pb-6">
        Copyright ©2022 All rights reserved
      </div>
    </div>
  );
};

export default ui;
