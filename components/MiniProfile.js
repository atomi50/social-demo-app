import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 rounded-full border object-contain  p-2"
        src="https://www.pngkey.com/png/detail/468-4685836_funny-avatar-png-graphic-transparent-library-dream-league.png"
        alt=""
      />

      <div className="mx-4 flex-1">
        <h2 className="font bold">Alex</h2>
        <h3 className="text-sm text-gray-400">Welcome to social media App</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
