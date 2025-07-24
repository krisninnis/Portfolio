import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-xl text-gray-200 shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-300 drop-shadow-lg">About Me</h2>
      
      <p className="mb-6 text-lg leading-relaxed text-indigo-100">
        Hello! I’m <span className="font-semibold text-indigo-400">Kristian Ninnis</span>, a passionate web developer and video editor with a strong background in building modern, responsive websites using React and Tailwind CSS. 
        I also bring creative expertise in video editing, using tools like Adobe Premiere Pro, Photoshop, and Canva to produce engaging content for platforms such as YouTube and TikTok.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        I specialize in creating user-friendly interfaces, clean code, and efficient web solutions tailored to clients' needs. My goal is to help businesses and individuals establish a strong online presence.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Skills</h3>
      <ul className="list-disc list-inside mb-6 text-indigo-100">
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Node.js & Express</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Database Management (MongoDB, SQL)</li>
        <li>Video Editing (Adobe Premiere Pro, Photoshop, Canva)</li>
      </ul>

      <p className="mb-6 text-lg leading-relaxed italic text-indigo-200">
        Interested in working together? Feel free to visit my{' '}
        <Link 
          to="/contact" 
          className="text-indigo-400 hover:text-indigo-600 hover:underline transition-colors duration-300"
        >
          Contact
        </Link>{' '}page!
      </p>
    </div>
  );
}
