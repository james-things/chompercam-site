import IndexPageContainer from "jotai/components/IndexPageContainer";
import Head from 'next/head';
import * as React from 'react';


export default function Home() {

    return (
        <div className="w-full overflow-hidden">
            <Head>
                <title>chomper.live - Chomper Cam!</title>
            </Head>

            <IndexPageContainer />

        </div>

    );
}
