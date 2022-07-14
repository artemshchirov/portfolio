import React from "react";

const Main = () => {
  return (
    <main className="content">
      <div className="about center">
        <h1>
          Hi, I am <span className="about__name">Artem Shirov.</span>
        </h1>
        <h2 className="about__role">A Front end Developer.</h2>
        <p className="about__description">
          Consectetur neque sed quam molestiae consectetur nesciunt sit alias
          Vitae libero perferendis reprehenderit optio veritatis Accusantium at
          voluptatum cumque temporibus et Explicabo iste porro quis numquam
          distinctio Repellendus adipisci nam perferendis amet eaque hic
          Voluptates
        </p>

        <div className="about__contact center">
          <a href="https://example.com">
            <span className="button button_type_outline">Resume</span>
          </a>

          <a
            href="https://github.com/artemschirov"
            aria-label="github"
            className="link link_type_icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </a>

          <a
            href="https://example.com"
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
            <h3>Project 1</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">HTML</li>
              <li className="project__stack-item">CSS</li>
              <li className="project__stack-item">React</li>
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
              href="https://example.com"
              aria-label="live preview"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>Project 2</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">HTML</li>
              <li className="project__stack-item">CSS</li>
              <li className="project__stack-item">React</li>
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
              href="https://example.com"
              aria-label="live preview"
              className="link link_type_icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>Project 3</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">HTML</li>
              <li className="project__stack-item">CSS</li>
              <li className="project__stack-item">React</li>
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
              href="https://example.com"
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
          <li className="skills__list-item button button_type_plain">Python</li>
          <li className="skills__list-item button button_type_plain">Linux</li>
        </ul>
      </section>

      <section className="section contact center" id="contact">
        <h2 className="title contact__title">Contact</h2>
        <a href="mailto:artemschirov@gmail.com">
          <span className="button button_type_outline">Email me</span>
        </a>
      </section>
    </main>
  );
};

export default Main;
