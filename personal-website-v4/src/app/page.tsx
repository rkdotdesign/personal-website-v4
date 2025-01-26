import React from "react";

const HomePage = () => {
  return (
    <>
      <main className="main">
        {/* Heading */}
        <h1 className="heading">This Website is a WIP 🚧</h1>
        <p className="subtitle">
          The full website will be live soon. Stay connected!
        </p>

        {/* Links Section */}
        <div className="links">
          <a href="https://twitter.com/your-handle" className="link">
            Twitter
          </a>
          <a href="https://github.com/your-handle" className="link">
            GitHub
          </a>
          <a href="https://unsplash.com/your-handle" className="link">
            Unsplash
          </a>
          <a href="https://instagram.com/your-handle" className="link">
            Instagram
          </a>
          <a href="https://medium.com/@your-handle" className="link">
            Medium
          </a>
          <a href="https://your-portfolio.com" className="link">
            Portfolio
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        Made with ❤️ using Next.js & Tailwind CSS
      </footer>
    </>
  );
};

export default HomePage;
