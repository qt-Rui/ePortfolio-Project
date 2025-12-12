import { Link } from "react-router-dom";

export default function CodeReview() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Code Review</h1>

      <p className="text-gray-700 leading-relaxed mb-8">
        This video provides a detailed code review covering the original artifacts 
        and the enhancements made to improve structure, maintainability, and 
        performance across all three projects included in my ePortfolio.
      </p>

      <div className="relative w-full pt-[56.25%] mb-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/IQLq_Z5xXr4?si=kVU08NoXtFnNzaqp"
          title="Code Review Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link 
        to="https://www.youtube.com/watch?v=IQLq_Z5xXr4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 text-lg font-medium"
      >
        Watch on YouTube →
      </Link>

    </section>
  );
}
