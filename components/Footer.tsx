import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className="site-footer">
            <div className="footer-copy">
                <p className="eyebrow">Contact</p>
                <h2>Let’s build the next version of this together.</h2>
                <p>
                    This portfolio is ready for your resume file, project links, and any future engineering work you want to highlight.
                </p>
            </div>

            <div className="footer-meta">
                <span>Copyright {year} <Link href="/">Jerrold Kyekye</Link></span>
                <span>Resume placeholder: add <code>public/resume.pdf</code></span>
            </div>

            <ul className="flex footer-icons">
                <li>
                    <a href="https://www.linkedin.com/in/jerrold-kyekye/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jkyekye" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="GitHub icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
