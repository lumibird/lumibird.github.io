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
      <h5>RADIANT: Empowering Developers</h5>
      <p>
        RADIANT is a community-driven organization dedicated to providing a
        supportive and collaborative environment for programming enthusiasts who
        aspire to become skilled developers. The organization was founded with
        the mission of empowering its members to grow and achieve their full
        potential in the field of programming.
      </p>
      <p>
        RADIANT's main objective is to equip its members with the necessary
        skills and knowledge to lead successful lives as programmers by creating
        opportunities for growth and development. The organization is guided by
        its core values, which include growth through collaboration, mental
        strength, and best effort. RADIANT fosters a culture of learning, where
        members continuously strive to improve their skills and develop mental
        toughness.
      </p>
      <p>
        As an organization, RADIANT is committed to helping its members succeed
        in the competitive world of programming. Whether you are just starting
        out in the field or looking to enhance your existing skills, the
        community of RADIANTERS offers a wealth of knowledge and expertise to
        support your growth and development. The organization's slogan, "We're
        moving forward," reflects its determination to make a positive impact in
        the world of programming and help its members achieve their goals.
      </p>
    </section>
  `);

export const People = () =>
  createElement(/* HTML */ `
    <section class="doc-section" id="intro">
      <h5>Meet the RADIANTERS</h5>
      <p>
        Members of RADIANT are affectionately known as RADIANTERS. They are a
        group of passionate programming enthusiasts who share a common goal of
        becoming skilled developers. The RADIANTERS value collaboration, mental
        strength, and best effort, and are committed to continuously improving
        their skills.
      </p>
      <p>
        As a member of RADIANT, you'll have access to a supportive community of
        like-minded individuals who are passionate about programming. The
        RADIANTERS work together on projects to enhance their skills and develop
        their knowledge. They value learning and growth and are always willing
        to help one another.
      </p>
      <p>
        RADIANTERS are committed to achieving excellence in their work, and they
        are dedicated to helping one another succeed. They know that programming
        can be a challenging field, but they believe that with hard work and a
        supportive community, anything is possible. If you're interested in
        joining a group of passionate individuals who are committed to learning
        and growing as developers, the RADIANTERS would be happy to welcome you
        to their community.
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="member-label">
                <img
                  class="avatar"
                  src="https://github.com/radiantbeing99.png?size=40"
                />
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
                <img
                  class="avatar"
                  src="https://github.com/Win-9.png?size=40"
                />
                <a href="https://github.com/Win-9" target="_blank">
                  Seunggu Kang
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
          <tr>
            <td>
              <div class="member-label">
                <img
                  class="avatar"
                  src="https://github.com/MyeongSeok98.png?size=40"
                />
                <a href="https://github.com/MyeongSeok98" target="_blank">
                  Myeongseok Kim
                </a>
              </div>
            </td>
            <td>Computer Engineering</td>
            <td>
              <ul>
                <li>Java</li>
                <li>Unity</li>
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
      <h5>Our Programming Projects</h5>
      <p>
        At RADIANT, our members work collaboratively on a variety of exciting
        programming projects. We believe that hands-on experience is the best
        way to develop skills and become a better programmer, and our projects
        offer ample opportunities to learn and grow.
      </p>
      <p>
        Our projects cover a wide range of topics, from web development to
        machine learning, and each one is designed to challenge and inspire our
        members. We believe in pushing ourselves to be the best we can be, and
        our projects reflect that commitment to excellence.
      </p>
      <p>
        Whether you're a seasoned developer or just starting out, there's a
        project at RADIANT that's perfect for you. Our members work together to
        share their knowledge and support one another in achieving their goals.
        Check out our projects page to see what we're working on and get
        inspired.
      </p>
    </section>
    <hr />
    <section class="doc-section" id="intro">
      <p>
        <i>
          The table below is an example of a project introduction before we
          officially start a project.</i
        >
      </p>
      <table class="u-full-width members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Radiant Web</td>
            <td>Inhwa Kim</td>
            <td>
              Radiant Web is a front-end web development project aimed at
              creating a responsive and visually appealing website.
            </td>
          </tr>
          <tr>
            <td>Radiant API</td>
            <td>Seunggu Kang</td>
            <td>
              Radiant API is a back-end web development project aimed at
              creating a RESTful API using Spring.
            </td>
          </tr>
          <tr>
            <td>Radiant Quest</td>
            <td>Myeongseok Kim</td>
            <td>
              Radiant Quest is a Unity game development project aimed at
              creating an immersive and engaging role-playing game (RPG).
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  `);

export const NotFound = () => createElement(/* HTML */ ` 404 Not Found `);
