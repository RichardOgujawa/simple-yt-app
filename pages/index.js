import Head from 'next/head'
import Link from 'next/link'
import Thumbnail from '../components/Thumbnail'
import Nav from '../components/Nav.js'
import TagSection from '../components/TagSection.js'
import {tagsArray} from '../data/tagData.js'
import Tags from '../components/Tags.js'

export default function Home({arrLength}) {
  return (
    <>
     <Head>
        <title>{`(${arrLength ? arrLength : 3})`} YouTube - Test</title>
        
        {/* Roboto Font Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" /> 
     </Head>

    {/* Navigation */}
     <Nav/>

    {/* Tags */}
    <TagSection tagsData= {tagsArray}/>
    {/* <p className='text-white'>{tagsArray[1]}</p> */}

    <Tags/>
    

    {/* Thumbnail Section*/}
     <main className='p-5 grid place-items-center h-[100vh] w-full'>
        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3'>
          <Thumbnail 
            contentSrc='https://unsplash.com/photos/0J8thHZfosE'
            channelSrc='https://unsplash.com/@windows'
          />
          <Thumbnail 
            contentSrc='https://unsplash.com/photos/0J8thHZfosE'
            channelSrc='https://unsplash.com/@windows'
          />
          <Thumbnail 
            contentSrc='https://unsplash.com/photos/0J8thHZfosE'
            channelSrc='https://unsplash.com/@windows'
          />
          <Thumbnail 
            contentSrc='https://unsplash.com/photos/0J8thHZfosE'
            channelSrc='https://unsplash.com/@windows'
          />
        </section>
     </main>
    </>
  )
}
