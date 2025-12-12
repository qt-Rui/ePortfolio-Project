import { Link } from "react-router-dom";

type Project = {
    title: string;
    description: string;
    original: string;
    enhanced: string;
    narrative: string;
    narrativeRoute: string;
};

export default function ProjectCard({ project }: { project: Project}) {
    const basePath = import.meta.env.BASE_URL;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex flex-col space-y-2">
                <a href={`${basePath}${project.original}`} download className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                    Download Original Code
                </a>
                <a href={`${basePath}${project.enhanced}`} download className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                    Download Enhanced Code
                </a>
                <Link to={project.narrativeRoute} className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                    View Narrative
                </Link>
            </div>
        </div>
    );
}