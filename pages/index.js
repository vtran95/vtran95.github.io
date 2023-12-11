import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/images/profile-picture.jpg'
import ListAway from '../public/images/ListAway.PNG'
import { getSortedPostsData } from '../util/postsController'
// import { useEffect } from 'react'
// import canvasDots from '../util/headerCanvas';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {

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
      <header className="flex flex-col justify-center items-center text-center w-screen h-screen gap-10 bg-hero bg-no-repeat bg-cover bg-center">
        {/* <canvas></canvas> */}
        <div className="flex flex-col justify-center items-center py-8 gap-10">
          <div className="max-w-sm">
            <Image className="rounded-full" src={profilePic} alt="Vincent Tran's Profile Picture" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold pb-3">
              Vincent Tran
            </h1>
            <h3 className='text-3xl'>
              Software Developer
            </h3>
          </div>
        </div>

        {/* ICONS */}
        {/* <div className='flex flex-wrap justify-center w-72 space-x-2 space-y-2'>
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
        </div> */}
      </header>

      <main className='px-8'>
        <div className='py-8'>
          <div>
            <h1 className="text-5xl font-bold underline">Work Experience</h1>
          </div>
          <div>
            {allPostsData.map(({ id, employer, title, startdate, enddate, contentHtml }) => (
              <div key={id} className='px-5 py-8'>
                <h2 className="text-4xl font-bold">{employer}</h2>
                <h4 className="text-2xl">{title}</h4>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-8'>
          <div>
            <h1 className="text-5xl font-bold underline">Projects</h1>
          </div>
          <div className='px-5 py-8'>
            <a href='https://list-615f1.firebaseapp.com/' target='_blank' className=' hover:text-blue-600'><h2 className="text-4xl font-bold">List Away</h2></a>
            <p className='py-5'>A simple yet polished to-do list app completed during my studies at BCIT.</p>
            <Image src={ListAway}/>
          </div>
        </div>
        
      </main>

      <footer className="p-8">
        <h4 className="text-4xl font-bold justify-start" >
          Contact
        </h4>
        <ul className="px-5 py-3">
          <li>(604) - 307 - 7404</li>
          <li>vintran1995@gmail.com</li>
          <li className='hover:text-blue-600'><a href='https://github.com/vtran95' target='_blank'>github.com/vtran95</a></li>
        </ul>
      </footer>
    </div>
  )
}
