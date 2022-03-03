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
    <div>
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
        <HomeIcon className="h-10 w-10" />
      </div>
    </div>
  )
}

export default Header
