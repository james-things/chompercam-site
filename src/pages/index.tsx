import Head from 'next/head';
import * as React from 'react';

import { CamEmbed } from '@/components/CamEmbed';
import { Footer } from '@/components/Footer';

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between overflow-auto">
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
