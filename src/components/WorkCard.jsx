import React from 'react'

const WorkCard = () => {

    const works = [
        {
            title: "Web3-Tribes is a project utilizing the tribes module from Decentology's hyperverse. The aim of this project is to allow users to join different web3 tribes (communities) and gain access to content only visible to those in that specific tribe.",
            img: "https://user-images.githubusercontent.com/78753275/156931795-8520fced-e450-4272-990d-cd9f0162a522.png",
            date: "Mar 2022",
            liveUrl: "https://web3con-lw-3-tribe.vercel.app",
            githubUrl: "https://github.com/itsanishjain/Web3con-LW3Tribe"
        },
        {
            title: "it is a really simple tool that allows anyone to send their ICX in a very simple and intuitive way to their favorite content creators. Content creators need to share their ICON address to connect with their audience. it's that simple. there are some more exciting futures plans which I share below.",
            img: "https://camo.githubusercontent.com/343c660f872fcc1a155914967cf70252f82b8e5f5660fa1b5343ff3a0b493d52/68747470733a2f2f692e6962622e636f2f546d575a63304a2f53637265656e73686f742d66726f6d2d323032322d30312d33302d32322d30352d35302e706e67",
            date: "Jan 2022",
            liveUrl: "https://buy-me-icon-crypto.vercel.app/",
            githubUrl: "https://github.com/itsanishjain/buyMeIconCrypto",
            videoUrl: "https://www.youtube.com/watch?v=zAZ6Y5zy0XE"
        },
        {
            title: "Game Build using Smart contractsuser can mint NFTs base on Unique Dna strore on the blockchian. Once user Own There NFTs they can play with by providing them Various game itemsThey can increate level of it",
            img: "https://user-images.githubusercontent.com/43033153/168064200-94c93a81-a443-4d59-b9de-b25d57649767.png",
            date: "Mar 2022",
            liveUrl: "https://void-nerd.vercel.app/",
            githubUrl: "https://github.com/itsanishjain/VoidNerd"
        },
        {
            title: "Collection of my HTML,CSS and JS projects Here I used to learn basics of those things and sharing it over twitter",
            img: "https://user-images.githubusercontent.com/43033153/168064674-3c9aca30-d685-4569-8e7c-e50e4daaacca.png",
            date: "Feb 2022",
            liveUrl: "https://itsanishjain.github.io/HTML-CSS-JS-boilerplate/",
            githubUrl: "https://github.com/itsanishjain/HTML-CSS-JS-boilerplate"
        },
        {
            title: " how to connect wallet connect and Metamask using web3 react, nextJS, and make it live so anyone can use it.  wallet connect, Metamask, connect wallets Dapps ",
            img: "https://user-images.githubusercontent.com/43033153/168066309-b96167c9-5815-49ff-b7c0-9bd47e1614fb.png",
            date: "Apr 2022",
            liveUrl: "https://web3-wallet-five.vercel.app/",
            githubUrl: "https://github.com/itsanishjain/web3-wallet",
            videoUrl: "https://www.youtube.com/watch?v=mZMze_g5AkM"
        },
        {
            title: "Collection of my dapps such as whitelistingDapp, MintingDapp, and ICO",
            img: "https://user-images.githubusercontent.com/43033153/168067660-dc6f1df7-9101-4659-a703-4f69e76a8f5a.png",
            date: "Feb-Apr 2022",
            liveUrl: "https://dapp-red.vercel.app/",
            githubUrl: "https://github.com/itsanishjain/dapp",
            videoUrl: "https://www.youtube.com/watch?v=bDujU3YMEzk&list=PLgP_sOGeL8eWfjp2kt8mbq1IppjV0RbXL&index=1"
        },
    ]

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Work
                </h1>

            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    works.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />

                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">

                                    <div className="">
                                        <span className="block text-gray-900">{items.title}</span>

                                    </div>
                                </div>
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="">
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3 space-x-4">
                                    <a
                                        href={items.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 text-sm text-gray-700 duration-100 border rounded-md hover:border-indigo-600 active:shadow-lg"
                                    >
                                        Live
                                    </a>

                                    <a
                                        href={items.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 text-sm text-gray-700 duration-100 border rounded-md hover:border-indigo-600 active:shadow-lg"
                                    >
                                        Github
                                    </a>

                                    {
                                        items.videoUrl && <a
                                            href={items.videoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 text-sm text-gray-700 duration-100 border rounded-md hover:border-indigo-600 active:shadow-lg"
                                        >
                                            Video
                                        </a>
                                    }

                                </div>


                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default WorkCard



