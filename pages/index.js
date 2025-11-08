import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentic Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Deployed on Vercel via autonomous agent." />
      </Head>
      <main className="container">
        <section className="hero">
          <h1 className="title">Agentic Next.js Starter</h1>
          <p className="subtitle">Autonomously scaffolded, built, and deployed to Vercel.</p>
          <a className="cta" href="https://nextjs.org/docs">Explore Next.js Docs ?</a>
        </section>
        <section className="grid">
          <div className="card">
            <h3>Fast</h3>
            <p>Optimized for quick deploys and instant feedback.</p>
          </div>
          <div className="card">
            <h3>Modern</h3>
            <p>Runs on Next.js 14 with React 18.</p>
          </div>
          <div className="card">
            <h3>Deployable</h3>
            <p>Ready for Vercel production deployments out of the box.</p>
          </div>
        </section>
        <footer className="footer">? {new Date().getFullYear()} Agentic Starter</footer>
      </main>
    </>
  )
}
