export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500 transition-shadow border border-indigo-600">
      <h4 className="text-xl font-semibold mb-2 text-indigo-300">{title}</h4>
      <p className="text-indigo-200 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-600 hover:underline transition-colors duration-300"
        >
          View Project
        </a>
      )}
    </div>
  );
}
