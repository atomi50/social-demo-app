import React from 'react'

function Story({ image, username }) {
  return (
    <div>
      <img
        src={image}
        alt="profile picture"
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px]"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
