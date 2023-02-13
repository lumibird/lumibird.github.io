const createElement = (DOMString) => {
  const temp = document.createElement("template");
  temp.innerHTML = DOMString;
  return temp.content;
};

const fetchData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const Home = () =>
  createElement(/* HTML */ `
    <section class="doc-section" id="intro">
      <h5>Hello, wanderer.</h5>
      <p>
        Welcome to the introduction page. This is a place that provides a
        stepping stone to growth to become a skilled developer. When developing
        a program, I needed a name as an individual or an organization, so I
        created a brand called RADIANT. Anyone who is a member of
        <a href="#people">RADIANTERS</a> has access to a number of resources
        from this brand. In other words, this is a place where we help each
        other and grow. Do you feel lost when you study development? There are
        wonderful people here who continue to learn for self-development under
        the slogan <i>We are moving forward</i>. Ask for help here if you're
        stuck in a wall while you're growing up, or if you're facing unwanted
        hardships. You might be able to overcome it with us.
      </p>
    </section>
  `);

export const People = () =>
  createElement(/* HTML */ `
    <section class="doc-section" id="intro">
      <h5>Who are RADIANTERS?</h5>
      <p>
        <a href="https://github.com/radianters">RADIANTERS</a> is a developer
        organization centered on students from Kyonggi University. People who
        study various topics such as web, server management, AI, and games are
        gathered. We learn communication and collaboration to improve our
        imperfect self, and we help each other to learn unfamiliar skills. We
        pursue endless learning for a better life and a better future. If you
        have a great dream you want to achieve and it's hard to be alone when
        trying to achieve it, join RADIANTS. We are ready to welcome you.
      </p>
    </section>
    <hr />
    <section class="doc-section" id="intro">
      <h5>Members</h5>
      <table class="u-full-width members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Major</th>
            <th>Interests</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="member-label">
                <img src="https://github.com/radiantbeing99.png?size=40" />
                <a href="https://github.com/radiantbeing99" target="_blank">
                  Inhwa Kim
                </a>
              </div>
            </td>
            <td>Computer Engineering</td>
            <td>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <div class="member-label">
                <img src="https://github.com/Win-9.png?size=40" />
                <a href="https://github.com/Win-9" target="_blank">
                  Seunggu Gang
                </a>
              </div>
            </td>
            <td>Computer Engineering</td>
            <td>
              <ul>
                <li>Java</li>
                <li>Spring</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  `);

export const Projects = () =>
  createElement(/* HTML */ `
    <section class="doc-section" id="intro">
      <h5>Our projects</h5>
      <p>Preparing...</p>
    </section>
  `);

export const NotFound = () => createElement(/* HTML */ ` 404 Not Found `);
