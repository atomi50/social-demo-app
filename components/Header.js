import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left */}
        <div className="relative hidden  w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/000/623/455/original/home-logo-vector-template-building.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://www.kindpng.com/picc/m/390-3904363_dragon-ball-super-goku-symbol-hd-png-download.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md  p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <HomeIcon className="navBtn" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-4 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <MenuIcon className="h-10 w-10 md:hidden" />

          <img
            src="https://www.downloadclipart.net/large/anonymous-mask-png-transparent-images.png"
            alt="profile pic"
            className="hidden h-10 cursor-pointer rounded-full md:inline-flex"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
