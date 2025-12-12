import { Link } from "react-router-dom";

export default function Project3Narrative() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Databases Enhancement
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8 leading-relaxed text-gray-700 space-y-6">

        <p className="indent-[2rem]">
          Going into this week, I enhanced the third artifact that will become a 
          part of my ePortfolio. This artifact was created sometime within the last 
          year and a half, and it is a simple Java program designed to handle storing 
          basic contact information such as a person's name, phone number, and 
          address. The original program implemented variables to store this 
          information and applied basic validation to prevent issues like excessive 
          character inputs. Testing files were included to ensure that these 
          limitations were enforced correctly. This structure worked adequately for a 
          small-scale project, but it lacked both scalability and security.
        </p>

        <p className="indent-[2rem]">
          I chose to enhance this artifact because the original approach of using a 
          hash map to store contact information was extremely limiting. Modern 
          applications that handle personal data require significantly stronger 
          measures, especially when dealing with sensitive information like names and 
          phone numbers. A proper database with encryption and secure cloud storage is 
          standard in professional environments, so upgrading this artifact aligned 
          well with both industry expectations and my own learning goals.
        </p>

        <p className="indent-[2rem]">
          By integrating Neon and PostgreSQL into the Java application, I was able to 
          highlight my versatility with databases beyond JavaScript—despite JavaScript 
          being my main area of focus. While I initially hoped to experiment with a 
          different database system, I ultimately decided to consolidate my learning 
          by focusing entirely on Neon and PostgreSQL. The enhanced version now stores 
          contact information securely in a database rather than relying on an 
          in-memory hash map. The same validation rules and logic apply, but they are 
          now backed by a far more secure, scalable, and professional data storage 
          solution.
        </p>

        <p className="indent-[2rem]">
          Overall, I was able to accomplish every goal I set for this enhancement. 
          Even though I considered rewriting parts of the artifact in JavaScript, I 
          chose to remain in Java and successfully implemented a PostgreSQL database 
          connected through Neon. The associated tests were also updated to ensure 
          proper database connectivity. In completing this enhancement, I gained a 
          deeper understanding of how Neon and PostgreSQL can be used within a basic 
          Java project. My biggest challenge, however, was navigating the Java Eclipse 
          environment. With limited experience using Eclipse, I found the interface 
          somewhat overwhelming at first, particularly when structuring the files and 
          ensuring the project ran correctly with the database integration.
        </p>

        <p className="indent-[2rem]">
          Now that I have completed my final enhancement, my focus will shift to 
          finalizing my ePortfolio and preparing it for submission and display. This 
          project not only improved my understanding of secure and scalable database 
          solutions but also reinforced the importance of adapting designs to meet 
          industry standards.
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
