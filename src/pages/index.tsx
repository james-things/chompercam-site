import {atom, useAtom} from "jotai";
import {AboutApp} from "jotai/components/AboutApp";
import {Footer} from "jotai/components/Footer";
import {MediaEmbed} from "jotai/components/MediaEmbed";
import {MeetChomper} from "jotai/components/MeetChomper";
import Navbar from "jotai/components/Navbar";
import SideMenu from "jotai/components/SideMenu";
import Head from 'next/head';
import * as React from 'react';

const pageAtom = atom("index");

export default function Home() {
    const [page, setPage] = useAtom(pageAtom);

    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Chomper Cam - Lizard Live Cam - Live feedings and care 24/7!" />
                <meta name="keywords" content="gecko, gecko-cam, lizard, chomper, live, leapord gecko, leopard gecko,
                livecam, live-cam, lizard-cam, feeding, animal cam, pet cam" />
                <meta name="author" content="James Harris" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>chomper.live - Chomper Cam!</title>
            </Head>

            <div className="drawer w-full overflow-auto">
                <input id="main-drawer-toggle-btn" type="checkbox" className="drawer-toggle hidden"/>
                <div className="drawer-content flex flex-col">
                    <Navbar setPage={setPage}/>
                    <div id="empty-space" className="grow" />
                    <div className="flex justify-center p-2 md:p-5">
                        {page === "index" && <MediaEmbed />}

                        {page === "MeetChomper" && <MeetChomper />}

                        {page === "AboutApp" && <AboutApp />}
                    </div>
                    <div id="empty-space" className="grow" />
                    <Footer />
                </div>

                <div className="drawer-side">
                    <label htmlFor="main-drawer-toggle-btn" className="drawer-overlay"></label>
                    <SideMenu setPage={setPage} />
                </div>
            </div>
        </div>
    );
}
