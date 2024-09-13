// 
"use client"

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const session = useSession()
    console.log(session)



    return (
        <div className='mx-auto'>
            <div className="navbar text-black bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {
                            navItems.map((item) => (
                                <Link href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                    <div className="navbar-end">
                        {/* logout r kaj */}
                        {!session.data ?
                            <h1> <Link className='btn btn-accent' href={'/login'}>Login</Link></h1>
                            :
                            <button className=" btn btn-warning" onClick={() => signOut()}>LogOut</button>
                        }

                        {/* <button className=" btn btn-warning" onClick={() => signOut()}>LogOut</button> */}

                        {/* {session?.status === 'loading' &&
                        <h6>Loading....</h6>
                    }
                    {session?.status === 'unauthenticated' &&
                        <Link href="/login" className="btn btn-primary px-8">Login</Link>
                    }
                    {session?.status === 'authenticated' &&
                        <button className="btn btn-outline btn-ghost px-8" onClick={() => signOut()}>Logout</button>
                    } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const navItems = [

    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contacts",
        path: "/contacts"
    },
]

export default Navbar;