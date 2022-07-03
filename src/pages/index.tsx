import Head from 'next/head';

import { CamEmbed } from '../components/CamEmbed';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between overflow-auto">
      <Head>
        <title>chomper.live - Chomper Cam!</title>
      </Head>
      <header className="h-16">
        <Navbar />
      </header>
      <main className="mb-auto h-10">
        <CamEmbed />
      </main>
      <footer className="h-6">
        <Footer />
      </footer>
    </div>
  );
}
