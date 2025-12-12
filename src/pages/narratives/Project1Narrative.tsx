import { Link } from "react-router-dom";

export default function Project1Narrative() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Algorithms and Data Structure Enhancement
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8 leading-relaxed text-gray-700 space-y-6">
        
        <p className="indent-[2rem]">
          Through my process of creating a presentable ePortfolio, I have now completed 
          the next enhancement for my second artifact. This artifact is a Python file 
          originally tied to a MongoDB database with a CRUD implementation. It allowed 
          the user to access a webpage where they could filter through shelter animals 
          to find suitable candidates for scenarios such as disaster response or 
          tracking. Users were able to filter by breed, type, size, and color. The 
          system also included a map visualization of the animal locations and a pie 
          chart representing statistical data from the database.
        </p>

        <p className="indent-[2rem]">
          I chose this artifact because the original search algorithm had room for 
          improvement. The initial system felt sluggish, and performance suffered as 
          more filter conditions were applied. With my enhancements, the search 
          algorithm is now more efficient and responsive. By restructuring the data 
          handling logic, I replaced repetitive conditional branches with a 
          dictionary-based mapping system, reducing redundancy and improving 
          maintainability.
        </p>

        <p className="indent-[2rem]">
          Additionally, the use of MongoDB projections and targeted queries ensures 
          that only essential data is retrieved, reducing memory usage and improving 
          performance. Leveraging Pandas allowed for more structured, readable 
          outputs and removed the need for manual loops. This enhancement strengthens 
          my competency in building efficient data structures and search algorithms, a 
          skill highly relevant in real-world applications such as e-commerce, search 
          engines, and recommendation systems.
        </p>

        <p className="indent-[2rem]">
          After completing this enhancement, I can confidently say that I met the 
          course outcomes I set for myself. The final implementation is cleaner, more 
          concise, and more performant. Small but meaningful improvements, such as 
          removing unnecessary MongoDB fields, contribute to both readability and 
          efficiency. In the future, I would like to extend this work by converting the 
          entire project into JavaScript to strengthen my experience with modern web 
          development tools like React.
        </p>

        <p className="indent-[2rem]">
          One of the biggest challenges I faced during this enhancement was 
          determining the most efficient structure for the search logic. Revisiting 
          algorithm and data structure concepts greatly helped me choose the right 
          approach. Through research and experimentation, I confirmed that a 
          dictionary-based approach was the optimal solution. I also gained deeper 
          insight into how MongoDB can be used more safely and efficiently, particularly 
          when retrieving only necessary fields. Ultimately, this enhancement not only 
          improved the performance of the artifact but also reignited my interest in 
          algorithmic problem-solving.
        </p>
      </div>

      <div className="mt-10">
        <Link 
          to="/projects" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
