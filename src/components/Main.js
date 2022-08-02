const Main = () => {
  return (
    <main className="content">
      <div className="about center">
        <h1 className="about__title">
          Hi, I am <span className="about__name">Artem Shchirov.</span>
        </h1>
        <h2 className="about__role">A Junior Front End Developer.</h2>
        <p className="about__description">
          I'm a Full-stack web developer specializing in building (sometimes
          designing) web platforms and applications.
          <br />
          Currently, I'm looking for some companies or teams to join and improve
          my experience and knowledge.
        </p>

        <div className="about__contact center">
          <a
            href="https://drive.google.com/file/d/1ifyxXgMoB2A0kK5Cwl5EX7nsxnJuo8BM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button button_type_outline">Resume</span>
          </a>

          <a
            href="https://github.com/artemshchirov"
            aria-label="github"
            className="link link_type_icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/artemshchirov/"
            aria-label="linkedin"
            className="link link_type_icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i aria-hidden="true" className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <section id="projects" className="projects section">
        <h2 className="title projects__title">Projects</h2>

        <div className="projects__grid">
          <div className="project">
            <h3>How to Learn</h3>
            <p className="project__description">
              Web page describing various learning strategies, from experts such
              as Barbara Oakley, Feynman and Josh Kaufman.
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">HTML</li>
              <li className="project__stack-item">CSS</li>
              <li className="project__stack-item">JavaScript</li>
            </ul>

            <a
              href="https://github.com"
              aria-label="source code"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://artemshchirov.github.io/how-to-learn/#en"
              aria-label="live preview"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>Around the World</h3>
            <p className="project__description">
              Web page showing a user's information and photos they have
              uploaded from around the World. Images can be deleted, liked, and
              new images added.
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">React</li>
              <li className="project__stack-item">Node.js</li>
              <li className="project__stack-item">Express.js</li>
              <li className="project__stack-item">MongoDB</li>
            </ul>

            <a
              href="https://github.com/artemshchirov/mesto-react"
              aria-label="source code"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://artemshchirov.github.io/mesto/"
              aria-label="live preview"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>Travel</h3>
            <p className="project__description">
              Web page describing various stops along the way of a train trip
              around the Portland.
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">HTML</li>
              <li className="project__stack-item">CSS</li>
            </ul>

            <a
              href="https://github.com/artemshchirov/russian-travel"
              aria-label="source code"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://artemshchirov.github.io/russian-travel/"
              aria-label="live preview"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <h2 className="title skills__title">Skills</h2>
        <ul className="skills__list">
          <li className="skills__list-item button button_type_plain">HTML</li>
          <li className="skills__list-item button button_type_plain">CSS</li>
          <li className="skills__list-item button button_type_plain">
            JavaScript
          </li>
          <li className="skills__list-item button button_type_plain">
            React.js
          </li>
          <li className="skills__list-item button button_type_plain">
            Node.js
          </li>
          <li className="skills__list-item button button_type_plain">
            Express
          </li>
          <li className="skills__list-item button button_type_plain">
            MongoDB
          </li>
          <li className="skills__list-item button button_type_plain">Git</li>
          <li className="skills__list-item button button_type_plain">GitHub</li>
          <li className="skills__list-item button button_type_plain">Python</li>
          <li className="skills__list-item button button_type_plain">Linux</li>
        </ul>
      </section>

      <section className="contact section center" id="contact">
        <h2 className="title contact__title">Contact</h2>
        <a href="mailto:artemschirov@gmail.com">
          <span className="button button_type_outline">Email me</span>
        </a>
        <ul className="contact__items">
          <li>artemshchirov@gmail.com</li>
          <li>telegram: @mindisakey</li>
          <li>+972584441705</li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
