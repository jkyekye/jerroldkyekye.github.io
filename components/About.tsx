import React from "react";
import Image, { StaticImageData } from "next/image";
import { withBasePath } from "./basePath";

export default function About() {
    return (
        <section id="about" className="section-block">
            <div className="section-heading">
                <p className="eyebrow">About</p>
                <h2>Built around electrical engineering, not a generic template.</h2>
                <p>
                    This version is designed to present you as an engineer first: what you study, how you think,
                    and the kinds of systems you want to build next.
                </p>
            </div>

            <div className="about-layout">
                <div className="about-cards">
                    <AboutCard
                        title="Circuit Analysis"
                        icon={withBasePath("/icons/code.svg")}
                        description="Comfortable breaking down systems into smaller blocks and reasoning through how each part behaves."
                        projects={3} />
                    <AboutCard
                        title="Hands-On Systems"
                        icon={withBasePath("/icons/design.svg")}
                        description="Interested in practical work across labs, prototyping, instrumentation, and hardware troubleshooting."
                        projects={4} />
                    <AboutCard
                        title="Communication"
                        icon={withBasePath("/icons/phone.svg")}
                        description="I value clear documentation, clean presentation, and making technical work easy to understand."
                        projects={2} />
                </div>
                <div className="about-text">
                    <p className="eyebrow">Profile</p>
                    <h3>Jerrold Kyekye</h3>
                    <p>
                        I am building a career in electrical engineering with a strong interest in systems that are dependable,
                        useful, and grounded in real-world constraints. This portfolio gives me a place to showcase future projects,
                        lab work, and resume details as they grow.
                    </p>
                    <p>
                        When I am not working on coursework or technical ideas, I like keeping my projects organized, documenting my process,
                        and thinking carefully about how to turn a concept into something tangible.
                    </p>
                    <div className="profile-list">
                        <span>Location: United States</span>
                        <span>Focus: Electrical Engineering</span>
                        <span>Status: Open to opportunities</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="card-title">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p>{description}</p>
            <span>{projects.toString()} focus areas</span>
        </div>
    )
}
