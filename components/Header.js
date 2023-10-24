import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import mainImage from '../assets/icon.jpg'

import {HomeIcon} from "@heroicons/react/24/solid"

export default function Header() {
  return (
    <div className="shadow-sm  border-b sticky top-0 bg-white z-30">

    <div className="mx-4 xl:mx-auto flex items-center justify-between max-w-6xl">
      {/* Left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
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
        <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <img src='data:image/jpeg;base64,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' alt="user-image" className="h-10 rounded-full cursor-pointer" />
      </div>
    </div> 
    </div>
  );
}
