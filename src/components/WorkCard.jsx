import React from 'react'
import { works } from '../utils/myWorks'

const WorkCard = () => {
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



