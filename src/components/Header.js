import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header () {
    const [ toggleMenu, setToggleMenu ] = useState(false); 

    return (
        <header className="flex justify-between px-4 py-4 border-b-8 border-slate-200">
            <a className="text-black font-bold text-2xl px-2 py-2 rounded hover:shadow-lg hover:shadow-cyan-600" href="/"> D Suresh </a>
            <nav className="hidden md:block ">
                <ul className="flex flex-rows">
                    <li> <a href="/" className='header-menu'> Home </a> </li>
                    <li> <a href="#About" className='header-menu'> About </a> </li>
                    <li> <a href="#Projects" className='header-menu'> Projects </a> </li>
                    <li> <a href="#Resume" className='header-menu'> Resume </a> </li>
                    <li> <a href="#ContactMe" className='header-menu'> Contact </a> </li>
                </ul>
            </nav>
            { toggleMenu && <nav className="block md:hidden">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                    <li> <a href="/"> Home </a> </li>
                    <li> <a href="#About"> About </a> </li>
                    <li> <a href="#Projects"> Projects </a> </li>
                    <li> <a href="#Resume"> Resume </a> </li>
                    <li> <a href="#ContactMe"> Contact </a> </li>
                </ul>
            </nav> }
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className='text-black h-7' /> </button>
        </header>

    );
}
