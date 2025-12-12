import { Link } from "react-router-dom";

export default function SelfAssessment() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Professional Self-Assessment
      </h1>

      
      <div className="bg-white shadow-md rounded-lg p-8 leading-relaxed text-gray-700 space-y-6">

        <p className="indent-[2rem]">
          Moving through the course of my computer science program, I have gradually
          developed the technical, professional, and analytical skills needed to
          enter the field and perform the tasks required as a capable software
          developer. The experience I gained in all the courses I took alongside the
          free time I took to advance on my own has allowed me to demonstrate the
          core strengths that I have built over time with the commitment and passion
          that I have in this field. Along the way, it also helped guide me in a
          direction that I want to take for the start of my career as I discovered
          professional goals and values that are instrumental to making me who I am
          now. Through the course of the program, I have taken on a range of projects
          across several languages, and each project has contributed to strengthening
          my abilities in database management, software engineering, security
          practices, and algorithm design. All of these abilities form the foundation
          of my ePortfolio, and my readiness for professional roles in the tech
          industry.
        </p>

        <p className="indent-[2rem]">
          Among the most valuable aspects of the computer science program has been
          learning to collaborate with peers in a team environment. Throughout
          multiple courses like the mobile development course and the fullstack web
          development course, I have gained experience working with peers through
          constant communication and feedback in many discussions covering various
          topics in the computer science world alongside feedback from my professor
          covering my code, allowing me to become better in my ability to code
          securely and efficiently as I continue to expand and grow with my peers and
          professor pushing me onward. These experiences shared with my peers helped
          me understand how to review code constructively while divide
          responsibilities, and maintain a shared commitment where we all strive to
          achieve the project’s vision. Furthermore, working collaboratively has
          shown me that adaptability and accountability are essential to the work
          environment, and these are traits that I will carry over to the industry.
        </p>

        <p className="indent-[2rem]">
          Moving through the program also deepened my understanding of data
          structures and algorithms which revealed how critical they are to building
          an efficient and scalable system that runs quickly. Through the assignments
          I have taken, I was able to strengthen my ability to select and implement
          the right data structure appropriately based off the system requirements. I
          was able to display part of this knowledge in my enhancement for the Python
          project which previously would run slowly and felt tedious to use. Through
          my implementation of the enhancement, I was able to make a system that
          feels more user friendly in terms of the projects’ search functionality,
          data filtering, and data retrieval.
        </p>

        <p className="indent-[2rem]">
          In terms of software engineering, I have refined my development skills by
          implementing and completing various projects that involve various scenarios
          and requirements. It gave me the opportunity to expand on the concepts and
          fundamentals that I know of, and it continues to foster my growth as I
          eagerly continue to pursue implementing new applications ranging in areas
          like full-stack development. It also refined my ability to structure
          modular systems and build maintainable code bases. I was able to learn how
          to write code more cleanly and in a way that will allow the application to
          be scalable by applying core concepts like object oriented design
          principles, integrating APIs, refactoring legacy components, and following
          the standards that the industry has set for code readability and testing.
          Through these experiences, I have witnessed how individual parts of the
          pieces fit into a larger part of the project that makes the project whole.
        </p>

        <p className="indent-[2rem]">
          In my time using databases during the completion of this program, I went
          from having no knowledge to being able to implement databases on my own.
          This was only possible from the learning experience I gained through my own
          time and the time I spent taking courses at college. I was able to gain
          hands-on experience with SQL like MongoDB, PostgreSQL, SQLite, and other
          databases alongside tools that complement these databases like Neon and
          Prisma. I was able to learn how to design schemas, write efficient queries,
          and enforce security to ensure that data is secure. These skills became an
          essential part of my skillset, and it shows in my enhancements. I have
          ultimately strengthened my confidence in using modern databases and their
          technologies, and even NoSQL.
        </p>

        <p className="indent-[2rem]">
          Above everything, I found that security was one of the most vital pillars
          of my program. The security of the system is essential, and the
          implementation and maintenance of security in the system is important to be
          considered going from the beginning to the very end of the project’s life
          span, even after deployment. I was able to learn how to avoid and identify
          vulnerabilities by applying secure coding principles which involves the
          intricate process of implementing security checks throughout the system
          like user input validation and the protection of data in transit and at
          rest. These practices I have gained help me in incorporating a security
          mindset from the very beginning, which ensures that the systems I build are
          free from threats, safe, trustworthy for users.
        </p>

        <p className="indent-[2rem]">
          The artifacts I have chosen for this ePortfolio represent how I have
          progressed and it displays the skills I have grown across the program. I
          was able to demonstrate my ability in improving existing systems through
          meaningful enhancements that make the system more deployment ready. Through
          each artifact, I was able to highlight different aspects of my computer
          science expertise. Particularly, I highlighted my ability to optimize
          algorithms, develop full-stack platforms, and create secure databases for
          systems requiring sensitive data to be stored. I was able to display my
          ability to apply modern development practices across multiple languages and
          technologies. In each enhancement, I was able to design an efficient
          solution that involves improved performance and better data management.
          These artifacts serve as an introduction into what I have to offer as a
          developer, and they display my readiness for the professional world.
        </p>

        <p className="indent-[2rem]">
          This ePortfolio has given me the opportunity to reflect on the skill set I
          have built, and it has allowed me to position the start of my career in
          software development by aligning myself to web development in particular. I
          am determined, and I feel confident that the experience, abilities, and
          skills I have showcased here demonstrates my competence and dedication to
          continuously improving and growing as a professional developer. This
          program has helped me to become ready to contribute to development teams
          where the use of emerging technologies is involved, and it has helped me in
          becoming prepared to pursue a career that aligns with the values that I
          hold.
        </p>
      </div>

      <div className="mt-10">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
