import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/images/profile-picture.jpg'
import { useEffect } from 'react'
// import canvasDots from '../util/headerCanvas';

export default function Home() {

  // TODO: canvasDots are glitching, possibly need to integrate Canvas component

  // useEffect(() => {
  //   canvasDots();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Vincent Tran</title>
        <meta name="description" content="Vincent Tran's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="animate-gradientShift bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-500 flex justify-center items-center text-center py-8 gap-10 w-screen h-screen"> */}
      <header className="flex flex-col justify-center items-center text-center w-screen h-screen gap-10">
        {/* <canvas></canvas> */}
        <div className="flex justify-center items-center py-8 gap-10">
          <div className="max-w-sm">
            <Image className="rounded-full" src={profilePic} alt="Vincent Tran's Profile Picture" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold">
              Vincent Tran
            </h1>
            <h3 className='text-3xl'>
              Software Developer
            </h3>
          </div>
        </div>
        <div className='flex flex-wrap justify-center w-72 space-x-2 space-y-2'>
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />

          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
          <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        </div>
      </header>

      <main className={styles.main}>
        <h1 className="text-5xl font-bold hover:underline" >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
