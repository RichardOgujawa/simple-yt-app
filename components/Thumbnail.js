import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Thumbnail.module.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Thumbnail = ({ contentSrc, imgSrc, channelSrc, title, channelName, views, date }) => {
  return (
    <>
      <Link href={contentSrc ? contentSrc : 'https://send-anywhere.com/'}
      >
        <article className='grid place-content-center w-fit px-2 pt-2 pb-4 rounded-lg'>
          
          {/*Thumbnail Image*/}
          <div className="relative">
            <Image
              className='rounded-lg'
              src='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
              width='250'
              height='250'
              objectFit='cover'
            />
            <span className={`${styles.timeTag}`}>Time</span>
          </div>

          
          {/*Profile Picture*/}
          <div className='pt-3 flex gap-x-2'>

            <Link href={channelSrc ? channelSrc : 'https://send-anywhere.com/'}>
              <div className='rounded-full overflow-hidden w-[30px] aspect-square self-start'>
                    <Image
                      className="h-full"
                      src='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
                      width='30'
                      height='30'
                      objectFit='cover'
                    />
                </div>
            </Link>

            <div>
              {/*Title*/}
                <p className='text-slate-200 font-bold'>Title</p>

              {/*Channel Name*/}
              <div className='flex items-center gap-1'>
                <Link
                  className={styles.smallerText}
                  href={channelSrc ? channelSrc : 'https://send-anywhere.com/'}>
                  Name of Channel
                </Link >
                <AiFillCheckCircle className='text-slate-400' /> {/*Check mark*/}
              </div>

              {/*MetaData*/}
              <div className={`${styles.smallerText} flex gap-x-1`}>
                <span>Views</span>
                <span>&bull;</span>
                <span>Date</span>
              </div>
            </div>

          </div>

        </article>
      </Link>


    </>
  )
}

export default Thumbnail