
import React from 'react'
import Capsule from './Capsule';
import { Button } from '@/components/ui/button';

import { IoLocationSharp } from "react-icons/io5";
import { MdBugReport } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import Link from 'next/link';

const PostCard= ({ entry, className }) => {
    
  return (
    
    <div className='min-w-[350px] min-h-[250px] px-5 py-4 flex flex-col justify-between items-start rounded-lg border border-accent dark:border-accent dark:backdrop-blur-xl transition-all ease-linear dark:bg-gradient-to-tr dark:from-indigo-800/20 dark:via-slate-800/20 dark:to-slate-900/20 dark:hover:from-indigo-800/50 dark:hover:via-indigo-900/50 dark:hover:to-slate-900/50 bg-gradient-to-tr from-cyan-100/20 via-sky-100/20 to-slate-100/20 hover:from-cyan-300/50 hover:via-emerald-100/50 hover:to-slate-100/50  '>      
      <div className='w-full flex flex-col justify-between items-start rounded-lg '>
        <div className=' w-full flex justify-between items-center'>
          <h1 className='font-bold text-2xl ' >
            {entry.eventName}
          </h1>
          
        </div>

        <div className=' w-full flex justify-between items-center mt-4 '>
          <Link href={entry.artistLink} className='text-xl'>
            {entry.artist}
          </Link>
          <span className=' text-sm text-secondary dark:text-primary '>
            {entry.date}
          </span>
        </div>

        <div className=' w-full flex justify-start items-center gap-2 mb-4 mt-1 flex-wrap '>
          <span className=' rounded-full text-sm flex justify-center items-center gap-1'>
          <MdBugReport />
            {entry.role}
          </span>
          <span className=' rounded-full text-sm flex justify-center items-center gap-1'>
          <FaBusinessTime />
            {entry.experience}
          </span>
          <span className=' rounded-full text-sm flex justify-center items-center gap-1'>
          <IoLocationSharp />
            {entry.location}
          </span>
        </div>

        <div className='w-full flex flex-wrap justify-start items-center gap-2'>
          {entry.skills.slice(0, 5).map((skill, index) => (
            <Capsule item={skill} key={index} className='border border-accent dark:border-secondary text-black hover:text-white ' />
          ))}

          {entry.skills.length > 5 && <div className='flex justify-between items-center gap-1 '>
            <span className='text-xs text-slate-700 dark:text-slate-400 '>
              + {entry.skills.length - 5} more
            </span>
          </div>
          }
        </div>
      </div>
      <div className=' flex justify-between items-center text-base font-medium w-full mt-4 ' >
        <span className='text-sm text-gray-700 dark:text-gray-300 border-b border-dashed border-gray-700 dark:border-gray-300 '>
          {timeDifference(entry.createdAt)}
        </span>

        <Button className=' bg-primary dark:bg-primary hover:bg-secondary dark:hover:bg-secondary text-white dark:text-gray-950 dark:hover:text-white font-medium dark:font-bold transition-colors ease-in-out ' >
          <Link href={`/findteam/${entry.slug}`} >
            Apply Now
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default PostCard