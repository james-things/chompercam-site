import Head from 'next/head';
import * as React from 'react';
import {atom, useAtom} from "jotai";
import {AboutApp} from "jotai/components/AboutApp";
import {Footer} from "jotai/components/Footer";
import {MediaEmbed} from "jotai/components/MediaEmbed";
import {MeetChomper} from "jotai/components/MeetChomper";
import Navbar from "jotai/components/Navbar";
import SideMenu from "jotai/components/SideMenu";

const pageAtom = atom("index");

export default function Home() {
    const [page, setPage] = useAtom(pageAtom);

    return (
        <div className="w-full overflow-auto">
            <Head>
                <title>chomper.live - Chomper Cam!</title>
            </Head>
            <div className="drawer">
                <input id="main-drawer-toggle-btn" type="checkbox" className="drawer-toggle hidden"/>
                <div className="drawer-content flex flex-col">
                    <Navbar setPage={setPage}/>
                    <div id="empty-space" className="grow" />
                    <div className="flex justify-center p-2 lg:p-5">
                        <div className="max-w-6xl grow rounded border-2 border-gray-500">
                            {page === "index" && <MediaEmbed />}
                            {page === "MeetChomper" && <MeetChomper />}
                            {page === "AboutApp" && <AboutApp />}
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
                    <SideMenu setPage={setPage} />
                </div>
            </div>
        </div>
    );
}
