import React from 'react'
import {NavLink} from 'react-router-dom'

const links = [
  {url:'/search', text:'🔍 All'},
  {url:'/image', text:'📷 Images'},
  {url:'/video', text:'📺 Videos'},
  {url:'/news', text:'📰 News'},
]

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-center items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink to={url} className={({ isActive }) =>
        isActive ? 'text-blue-500 border-b-2 dark:text-blue-300 dark:border-blue-400 border-blue-500 m-2 mb-0 text-xl' : 'm-2 mb-0'}>
          {text}
        </NavLink>
      ))}
    </div>
  )
}

export default Links