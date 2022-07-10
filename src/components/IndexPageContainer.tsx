import {atom, useAtom} from "jotai";
import {AboutPage} from "jotai/components/AboutPage";
import {Footer} from "jotai/components/Footer";
import {MediaEmbed} from "jotai/components/MediaEmbed";
import {MeetChomper} from "jotai/components/MeetChomper";
import Link from 'next/link';
import * as React from 'react';

const pageAtom = atom("index");

export default function IndexPageContainer() {
    const [page, setPage] = useAtom(pageAtom);

    return (
        <div className="drawer">
            <input id="main-drawer-toggle-btn" type="checkbox" className="drawer-toggle hidden"/>
            <div className="drawer-content flex flex-col">
                <div className="navbar max-h-16 flex-none bg-base-200">
                    <div className="md:hidden">
                        <label htmlFor="main-drawer-toggle-btn" className="btn btn-ghost btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <div
                            className="btn btn-ghost text-lg normal-case lg:text-xl"
                            onClick={() => setPage('index')}
                        >
                            Chomper Cam
                        </div>
                    </div>
                    <div className="invisible md:visible">
                        <ul className="menu menu-horizontal">
                            <li>
                                <a className="text-base">
                                    Learn More
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                    </svg>
                                </a>
                                <ul className="bg-base-200">
                                    <li>
                                        <div
                                            className="text-base"
                                            onClick={() => setPage('MeetChomper')}
                                        >
                                            Meet Chomper
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="text-base"
                                            onClick={() => setPage('AboutPage')}
                                        >
                                            About This Page
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link  href="https://www.buymeacoffee.com/gPKIjH2QrP">
                                    <a className="text-base" target="_blank" >
                                        Donations
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="empty-space" className="grow" />
                <div className="flex justify-center px-2 lg:px-5">
                    <div className="grow max-w-6xl rounded border-2 border-gray-500">
                        {page === "index" && <MediaEmbed />}
                        {page === "MeetChomper" && <MeetChomper />}
                        {page === "AboutPage" && <AboutPage />}
                    </div>
                </div>
                <div id="empty-space" className="grow" />
                {/* The footer is implemented here. This is a logically wonky implementation
                    which should be reconsidered in the future. */}
                <div className="flex-none">
                    <Footer />
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="main-drawer-toggle-btn" className="drawer-overlay"></label>
                <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
                    <li>
                        <div
                            className="text-lg lg:text-xl"
                            onClick={() => setPage('index')}
                        >
                            <label htmlFor="main-drawer-toggle-btn">Chomper Cam</label>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <div
                            className="text-sm lg:text-base"
                            onClick={() => setPage('MeetChomper')}
                        >
                            <label htmlFor="main-drawer-toggle-btn">Meet Chomper</label>
                        </div>
                    </li>
                    <li>
                        <div
                            className="text-sm lg:text-base"
                            onClick={() => setPage('AboutPage')}
                        >
                            <label htmlFor="main-drawer-toggle-btn">About This Page</label>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <Link href="https://www.buymeacoffee.com/gPKIjH2QrP">
                            <a className="text-sm lg:text-base" target="_blank" >
                                Donations
                            </a>
                        </Link>
                    </li>
                    <div className="divider"></div>
                </ul>
            </div>
        </div>
    );
}

