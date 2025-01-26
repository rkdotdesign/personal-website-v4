import React from "react";

const HomePage = () => {
  return (
    <>
      <main className="main">
        {/* Heading */}
        <h1 className="heading">Something is brewing behind the scenes...</h1>
        <p className="subtitle">
          The full website will be live soon. Stay connected!
        </p>

        {/* Links Section */}
        <div className="links">
          <a href="https://twitter.com/rkdotdesign" target="_blank" className="link">
            Twitter
          </a>
          <a href="https://github.com/rkdotdesign" target="_blank" className="link">
            GitHub
          </a>
          <a href="https://unsplash.com/rkdotdesign" target="_blank" className="link">
            Unsplash
          </a>
          <a href="https://instagram.com/rkdotdesign" target="_blank" className="link">
            Instagram
          </a>
          <a href="https://medium.com/@yrkdotdesign" target="_blank" className="link">
            Medium
          </a>
          <a href="https://ramakrushna.webflow.io." target="_blank" className="link">
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
