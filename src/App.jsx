import { Routes, Route, Link } from 'react-router-dom';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-6 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kristian Ninnis</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content routes */}
      <main>
        <Routes>
          <Route path="/" element={
            <section className="flex flex-col items-center justify-center text-center p-12 space-y-4">
              <h2 className="text-4xl font-extrabold">Welcome to my Portfolio!</h2>
              <p className="max-w-xl text-gray-300">
                I’m Kristian, a passionate developer specializing in React and modern web development.
              </p>
              <Link to="/projects" className="mt-4 inline-block bg-indigo-600 px-6 py-3 rounded hover:bg-indigo-700 transition">
                View My Work
              </Link>
            </section>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional 404 */}
          <Route path="*" element={<h2 className="p-12 text-center text-white">Page Not Found</h2>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 border-t border-gray-700 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kristian Ninnis. All rights reserved.
      </footer>
    </div>
  );
}
