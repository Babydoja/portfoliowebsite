import React from 'react'

export default function ProjectTag({name, onClick, isSelected}) {

    const buttonStyle = isSelected 
    ?"text-white border-purple-500"
    :"text-[#adb7be] border-slate-500 hover:border-white"
  return (
    <div>
        <button onClick={() =>onClick(name)} className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} > 
            {name}
        </button>
    </div>
  )
}
