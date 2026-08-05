import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="site-nav flex justify-space">
            <div className="logo">
                <Link href="/">Jerrold Kyekye</Link>
            </div>

            <ul className="flex nav-links">
                <li className="active">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/#about">About Me.</Link>
                </li>
                <li>
                    <Link href="/#projects">Projects.</Link>
                </li>
                <li>
                    <Link href="/#contact">Contact.</Link>
                </li>
            </ul>
        </nav>
    )
}
