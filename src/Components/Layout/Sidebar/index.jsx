import React from 'react'
import useSidebar from './helper'

const Sidebar = ({ toggle, setToggle }) => {
    const { sidebarRoutes, handleLinkClick, is_active_route } = useSidebar()

    return (
        <>
            {toggle &&

                <aside id="asidebar" className={`fixed bg-[#212121] top-0 left-0 z-[55] h-screen w-64 transition-transform ${toggle ? "" : '-translate-x-full'}  md:translate-x-0 inset-0 backdrop-blur-[2px] md:backdrop-blur-0`}>
                    <div className="w-64 h-screen pt-4">
                        <div className='float-right pr-4'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={() => { setToggle(false) }}>
                                <path d="M7 7L16 16M16 16L7 25M16 16L25 25M16 16L25 7" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="overflow-y-auto py-5 px-3 h-full">
                            <ul className="space-y-2 ">
                                {sidebarRoutes?.map(itm => {
                                    return (
                                        <li>
                                            <button
                                                onClick={() => { handleLinkClick(itm) }}
                                                type="button"
                                                className={`flex items-center p-1 md:p-3 w-full text-sm rounded-lg transition duration-75 ${is_active_route(itm?.url) ? 'activeLink' : 'side-nav text-white'}`}
                                            >
                                                <span className="flex-1 ml-3 font-medium text-left whitespace-wrap">{itm.heading}</span>
                                            </button>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </aside>
            }
        </>

    )
}

export default Sidebar