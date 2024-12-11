"use client"
import Link from "next/link"
import Image from "next/image"
import "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav>
            <img src="/Images/Logo.webp" alt="Logo" className="logo" />

            <button className='burger' onClick={toggleMenu}>&#9776;</button>

            <menu className={menuOpen ? "active" : "notActive"}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/students">Students</Link></li>
                <li><Link href="/partnership">Partnership</Link></li>
                <li><Link href="/staff">Staff Info</Link></li>
                <li><Link href="/learning">learning Resources</Link></li>
                <li><Link href="/facilities">Facilities</Link></li>
            </menu>
        </nav>
    )
}

export default Navbar;