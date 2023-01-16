import Link from 'next/link'
import logo from '../public/yt-logo.png'
import { BiSearch } from 'react-icons/bi'

const Nav = () => {
    return (
        <nav className='h-[10vh] w-full fixed grid place-items-center'>
            <div className='w-[90%] grid grid-cols-[100px_1fr_100px] items-center gap-x-4'>
                {/*Youtube Logo*/}
                <Link href="/">
                    <div className='flex gap-x-2'>
                        <img
                            src={logo}
                            width="40"
                            height="25"
                        />
                        <span className='text-slate-200 font-bold'>YouTube</span>
                    </div>
                </Link>

                <div className='grid place-items-center'>
                    <div className=' border-[0.125rem] px-5 py-2 rounded-full flex items-center space-x-3'>
                        <div className='flex items-center space-x-3'>
                            <input type='text' placeholder="Search" className='bg-transparent focus:outline-none caret-slate-100	text-sm text-slate-100'></input>
                        </div>
                        <button type="submit" className=''>
                            <BiSearch className='text-slate-500' />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav