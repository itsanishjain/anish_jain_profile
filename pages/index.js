/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";

import { works } from "../src/utils/myWorks";
import logo from "../public/logo.png";
import Script from "next/script";

const worksByType = works.reduce(
  (acc, obj) => {
    const type = obj.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(obj);
    return acc;
  },
  {
    Freelance: [],
    NFT: [],
    Hackathon: [],
    "Side Project": [],
  }
);

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZCDLMWMT37" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-ZCDLMWMT37');
        `}
        </Script>

        <title>Anish</title>
        <meta property="og:title" content="Anish profile website" />
        <meta
          property="og:description"
          content="About anish building journey"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/43033153/183735510-162db748-98e1-43c4-b6a2-8760ce66851b.png"
        />
        <meta property="og:url" content="https://www.anishjain.xyz/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.anishjain.xyz/" />
        <meta property="twitter:title" content="Anish profile website" />
        <meta
          property="twitter:description"
          content="About anish building journey"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/43033153/183735510-162db748-98e1-43c4-b6a2-8760ce66851b.png"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="">
        <div className="flex justify-between items-center p-2">
          <p className="text-2xl font-bold">
            <Image src={logo} width={100} height={100} alt="logo" />
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center items-center space-y-4">
          <p className="text-md font-medium ">Hey, I&apos;m Anish Jain</p>
          {/* <p className="text-lg md:text-2xl text-center"></p> */}
          <p className="text-xl md:text-3xl">Full stack developer</p>
          <div className="flex space-x-2">
            <a
              href="mailto: helloanishjain@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              HIRE ME
            </a>
            <Link href="#WORK" legacyBehavior>
              <a className="btn">MY WORKS</a>
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
              <a
                href="https://hashnode.com/@itsanishjain"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </span>

            <span>
              <a
                href="/AnishJainNewResume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </span>
          </div>
        </div>

        {/* ABOUT */}

        <div className="flex flex-col justify-center items-center mt-8 space-y-4 max-w-lg mx-auto">
          <p className="text-4xl ">About Me</p>
          <p className="text-center">
            I&apos;m a passionate software engineer specialized in building full
            stack websites and web applications for individuals and small
            businesses!
          </p>
        </div>

        {/* The Works */}
        <div id="WORK" className="flex flex-col space-y-4 mt-16 items-center">
          <p className="text-4xl ">Works</p>
          <p className="text-center text-lg">
            It is important for all my clients to know how I can build you a
            successful web site.
          </p>

          {/* Card */}
          <div className="max-w-3xl mx-auto p-2">
            {Object.entries(worksByType).map(([type, works]) => (
              <div key={type} className="mb-8">
                <h2 className="text-3xl font-bold mb-4">{type}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {works.map((work, index) => (
                    <div
                      key={index}
                      className="border-2 border-white text-black 
              rounded-lg p-1"
                      data-aos="fade-up"
                    >
                      <img src={work.img} alt="work" />
                      <div className="p-4 space-y-2 h-full w-full">
                        <p className="text-white">{work.title}</p>
                        <hr />
                        <div className="flex space-x-4">
                          {work.liveUrl && (
                            <a
                              href={work.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 text-sm cursor-pointer duration-100  rounded-md btn btn-primary text-white"
                            >
                              Live
                            </a>
                          )}

                          {work.githubUrl && (
                            <a
                              href={work.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 text-sm cursor-pointer duration-100  rounded-md btn btn-primary text-white"
                            >
                              Github
                            </a>
                          )}

                          {work.videoUrl && (
                            <a
                              href={work.videoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 text-sm cursor-pointer duration-100  rounded-md btn btn-primary text-white"
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
            ))}
          </div>
        </div>

        {/* Skills */}
        <p className="mt-16 text-center text-4xl ">Skills</p>
        <div className="text-primary max-w-2xl mx-auto mt-16 grid grid-cols-4 items-center place-items-center gap-4">
          <p>TypeScript</p>
          <p>JavaScript</p>
          <p>Python</p>
          <p>Solidity</p>
          <p>NextJs</p>
          <p>React Native</p>
          <p>Hasura</p>
          <p>Graphql</p>
          <p>Aws</p>
          <p>Selenium</p>
          <p>PyQt5</p>
          <p>Flutter</p>
          <p>Postgress</p>
          <p>Firebase</p>
        </div>

        {/* Things I believe in */}

        {/* Footer */}
        <div className="mt-16 text-center pb-6">
          Copyright ©2023 All rights reserved
        </div>
      </div>
    </>
  );
}
