import React from "react";

const projects = [
    {
        title: "Project space 01",
        status: "Coming soon",
        description: "Reserved for your first electrical engineering build, class project, or lab experiment.",
    },
    {
        title: "Project space 02",
        status: "Coming soon",
        description: "A second placeholder for future work like circuit design, embedded systems, or power electronics.",
    },
    {
        title: "Project space 03",
        status: "Coming soon",
        description: "Use this slot for a portfolio project, internship deliverable, or design challenge once you have it ready.",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-block projects-section">
            <div className="section-heading">
                <p className="eyebrow">Projects</p>
                <h2>A clean place for future builds.</h2>
                <p>
                    You said you are not building projects yet, so this section is intentionally reserved as a placeholder.
                    As you finish work, we can swap these cards for real project details, images, and links.
                </p>
            </div>

            <div className="project-grid">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <span className="project-status">{project.status}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
