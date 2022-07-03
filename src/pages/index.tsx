import Head from 'next/head';
import { Navbar } from "components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>James' Development Playground</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>

      </main>

      <footer>

      </footer>
      <button className="btn">Hello daisyUI</button>
      <div style={{ maxWidth: '100%' }}>
        <img src='http://192.168.50.79:8080/0' />
      </div>
    </div>
  );
}
