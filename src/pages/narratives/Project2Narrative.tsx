import { Link } from "react-router-dom";

export default function Project2Narrative() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Software Design and Engineering Enhancement
      </h1>

      
      <div className="bg-white shadow-md rounded-lg p-8 leading-relaxed text-gray-700 space-y-6">

        <p className="indent-[2rem]">
          In the pursuit of creating a presentable portfolio, I created an enhanced 
          version of an artifact which I first completed about five to six weeks ago. 
          The artifact was originally an Android application designed to function as 
          an inventory manager. Built using Gradle and Java, the application contained 
          a SQLite database and allowed users to sign up or sign in, accept or deny SMS 
          permissions, and perform CRUD operations to manage their list of items.
        </p>

        <p className="indent-[2rem]">
          I chose to enhance this artifact because limiting development to a single 
          platform restricts potential users from other ecosystems such as iOS, web, 
          and desktop environments. Many major companies, including Amazon and YouTube, 
          follow cross-platform development practices, and I knew I needed to expand 
          my experience in this direction. This enhancement became the perfect 
          opportunity to learn and apply React Native and Expo — tools widely used in 
          modern industry for building cross-platform applications. Until recently, my 
          focus had primarily been on strengthening my skills in JavaScript, React, 
          Next.js, PostgreSQL, and related technologies. Transitioning this project 
          into React Native broadened my experience and helped me break into an area 
          that will be essential in my web development career.
        </p>

        <p className="indent-[2rem]">
          The enhanced version is now a full-stack, cross-platform inventory 
          management system that supports iOS, web, and Android. On the backend, I 
          integrated Neon and Prisma to work with PostgreSQL, ensuring an efficient, 
          scalable, and secure data layer. Authentication and authorization were 
          improved, and the inventory management features now operate more 
          consistently across platforms. Despite these advancements, I recognize that 
          the UI can still be improved, and I intend to implement features such as 
          item images — a capability the original Android app supported.
        </p>

        <p className="indent-[2rem]">
          I also plan to review more documentation, refine code organization, and 
          implement automated tests to validate performance and stability. Even 
          though I still have much to learn, this enhancement gave me valuable 
          practical experience with React Native and Expo. My biggest challenge in 
          the process was determining the most effective way to structure the 
          application. Through research, I found that separating the frontend and 
          backend provided the cleanest, most functional architecture, especially 
          when running the application locally.
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
