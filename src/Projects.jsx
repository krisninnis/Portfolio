import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-xl text-gray-200 shadow-lg text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-300 drop-shadow-lg">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Sample Project 1"
          description="A short description of what this project is about."
          link="https://example.com"
        />

        <ProjectCard
          title="WeatherApp"
          description="A sleek weather forecast app showing 5-day weather, sunrise/sunset, and more."
          link="https://krisninnis.github.io/weather-app/"
        />

        <ProjectCard
          title="Video Editing Website"
          description="A showcase site for my video editing work, with a contact form and YouTube link."
          link="http://localhost:5173"  // Change this to deployed link when ready
        />
      </div>
    </section>
  );
}
