// src/components/Navbar.tsx
'use cilent'

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex border-b border-green-500 ">
            <ul>
                <li className="0">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}