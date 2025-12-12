import projects from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
        <section className="container mx-auto px-6 mt-12">
            <h1 className="text-3x1 font-bold mb-6">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}