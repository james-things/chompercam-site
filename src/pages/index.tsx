import Head from 'next/head';
import * as React from 'react';

import { useAtom } from 'jotai'
import { pageAtom } from "jotai/atoms/index";
import { MediaEmbed } from '@/components/MediaEmbed';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { MeetChomper } from "jotai/components/MeetChomper";
import { AboutPage } from "jotai/components/AboutPage";


export default function Home() {
    const [page] = useAtom(pageAtom);

    console.log({page});

    return (
        <div className="flex h-screen flex-col justify-between overflow-auto">
            <Head>
                <title>chomper.live - Chomper Cam!</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main className="inline-block align-middle">
                <div className="flex px-2 py-0 lg:px-5">
                    <div className="mx-auto max-w-6xl shrink rounded border-2 border-gray-500">
                        {page === "index" && <MediaEmbed />}
                        {page === "MeetChomper" && <MeetChomper />}
                        {page === "AboutPage" && <AboutPage />}
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
