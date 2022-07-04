import * as React from 'react';
import Head from 'next/head';

import { CamEmbed } from '@/components/CamEmbed';
import { Footer } from '@/components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between overflow-auto">
      <Head>
        <title>chomper.live - Chomper Cam!</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="inline-block align-middle">
        <CamEmbed />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
