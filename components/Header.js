import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import mainImage from '../assets/icon.jpg'
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";

import {HomeIcon} from "@heroicons/react/24/solid"
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const {data: session} = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <div className="shadow-sm  border-b sticky top-0 bg-white z-30">

    <div className="mx-4 xl:mx-auto flex items-center justify-between max-w-6xl">
      {/* Left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          onClick={()=>router.push('/')}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          onClick={()=>router.push('/')}
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
          layout="fill"
          className="object-contain"
        />
      </div>
      {/* Middle */}
        <div className="relative mt-1">
            <div className="absolute top-2 left-2">
                <MagnifyingGlassIcon className="h-5 text-gray-500 "/>
            </div>
            <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
        </div>
      {/* Righ Side */}
      <div className="flex space-x-4 items-center">
        <HomeIcon onClick={()=>router.push('/')} className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        {session ? (
          <>
          <PlusCircleIcon onClick={()=>setOpen(true)} className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
          <img onClick={signOut} src={session.user.image} className="h-10 rounded-full cursor-pointer" />
          </>
        ):(
          <button onClick={signIn}>Sign in</button>
        )}
      </div>
    </div> 
    </div>
  );
}
