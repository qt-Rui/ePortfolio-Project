import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container mx-auto px-6 mt-16">
      
      
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to My Computer Science ePortfolio
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          This portfolio showcases my enhanced technical artifacts, narratives, a self-assessment, and code review demonstration as part of my final project for the Computer Science program.
        </p>

        
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">View My Projects</Link>

          <Link
            to="/self-assessment"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-300 transition"
          >
            Self-Assessment
          </Link>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
        
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Enhanced Artifacts</h3>
          <p className="text-gray-600">
            Improved and refined code artifacts by expanding on where I left off with them in previous courses. The result led to more advanced and intricate artifacts.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Technical Narratives</h3>
          <p className="text-gray-600">
            Written documentation explaining design decisions, enhancements, 
            technologies used, and reflection on growth.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Code Review</h3>
          <p className="text-gray-600">
            A recorded walkthrough analyzing and evaluating software quality, 
            demonstrating communication and critical-thinking skills.
          </p>
        </div>

      </div>
    </section>
  );
}
