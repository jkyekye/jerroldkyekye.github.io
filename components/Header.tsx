import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="hero-shell">
            <NavBar />
            <div className="hero-grid">
                <div className="hero-copy">
                    <p className="eyebrow">Electrical Engineering Portfolio</p>
                    <h1>Jerrold Kyekye</h1>
                    <h2>Electrical engineering student focused on practical systems, clear thinking, and hands-on problem solving.</h2>
                    <p className="hero-text">
                        I like the part of engineering where ideas become real hardware, readable documentation, and solutions that people can trust.
                        This site is my home for future projects, coursework highlights, and resume details.
                    </p>
                    <div className="hero-actions">
                        <a className="primary-link" href="mailto:jkyekye@nd.edu">Email me</a>
                        <a className="secondary-link" href="#projects">See projects</a>
                    </div>
                    <div className="hero-pills">
                        <span>Circuit design</span>
                        <span>Embedded systems</span>
                        <span>Controls</span>
                        <span>Power systems</span>
                    </div>
                </div>
                <div className="hero-portrait">
                    <Image src="/images/partners/jerrold.jpeg" width={520} height={620} alt="Jerrold Kyekye portrait" priority />
                    <div className="portrait-card">
                        <p>Current focus</p>
                        <h3>Building a portfolio for internships and future electrical engineering work.</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}
