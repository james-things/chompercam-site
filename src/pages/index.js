import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <button className="btn">Hello daisyUI</button>
      <div style={{ maxWidth: '100%' }}>
        <img src='http://192.168.50.79:8080/0' />
      </div>
    </div>
  );
}
