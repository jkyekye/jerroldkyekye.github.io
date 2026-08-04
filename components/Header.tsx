import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <h1 className="white">Jerrold Xornam Kyekye</h1>
                    <h2 className="white">University of Notre Dame - B.SC. Electrical Engineering</h1>
                    <p className="gray">I enjoy building systems from the ground up, and understanding how each component contributes to the whole.</p>
                    <a className="green" href="mailto:jkyekye@nd.edu">Let&#39;s chat!</a>
                </div>
                <Image src="/images/jerrold.jpeg" width={463} height={513} alt="blaiti"  /> 
            </div>
        </header>
    )
}
