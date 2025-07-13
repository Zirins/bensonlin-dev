// src/components/Navbar.tsx
'use cilent'

import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Project</Link>
                </li>
                <li>
                    <Link href="/contact">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}