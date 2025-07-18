export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-xl text-gray-200 shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-300 drop-shadow-lg">Contact Me</h2>
      
      <p className="mb-6 text-lg leading-relaxed text-indigo-100">
        I’m <span className="font-semibold text-indigo-400">Kristian Ninnis</span>, a dedicated web developer ready to bring your ideas to life.
        Whether you have a question, want a quote, or just want to say hello, I’d love to hear from you!
      </p>
      
      <p className="mb-6 text-lg leading-relaxed">
        You can reach me via email at:{" "}
        <a 
          href="mailto:krisninnis@gmail.com" 
          className="text-indigo-400 hover:text-indigo-600 hover:underline transition-colors duration-300"
        >
          krisninnis@gmail.com
        </a>
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        Or connect with me on LinkedIn to see my professional background and projects:
        <a 
          href="https://www.linkedin.com/in/krisninnis" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-400 hover:text-indigo-600 hover:underline ml-1 transition-colors duration-300"
        >
          linkedin.com/in/krisninnis
        </a>
      </p>

      <p className="mb-6 text-lg leading-relaxed italic text-indigo-200">
        I’m available for freelance projects, website builds, and collaborative work. Let’s create something amazing together!
      </p>

      <p className="text-indigo-300 text-lg font-semibold drop-shadow-md">
        Looking forward to connecting with you!
      </p>
    </div>
  );
}
