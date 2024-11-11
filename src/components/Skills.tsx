import Image from "next/image";

function Skills() {
  return (
    <>
      <div className="skills-container">
       
        <div className="skills-row">
          <div className="skill">
            <Image
              className="icon"
              src="/images/html-icon.png"
              alt="Html"
              width={500}
              height={400}
            />
            <span className="skill-name">HTML</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/css-icon.png"
              alt="Css"
              width={500}
              height={400}
            />
            <span className="skill-name">CSS</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/javascript-icon.png"
              alt="JavaScript"
              width={500}
              height={400}
            />
            <span className="skill-name">JavaScript</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/typescript-icon.png"
              alt="TypeScript"
              width={500}
              height={400}
            />
            <span className="skill-name">TypeScript</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/react-js-icon.png"
              alt="React"
              width={500}
              height={400}
            />
            <span className="skill-name">React</span>
          </div>
        </div>

        {/* Second Row of Skills */}
        <div className="skills-row">
          <div className="skill">
            <Image
              className="icon"
              src="/images/nextjs-icon.png"
              alt="Next.js"
              width={500}
              height={400}
            />
            <span className="skill-name">Next.js</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/node-js-icon.png"
              alt="Node.js"
              width={500}
              height={400}
            />
            <span className="skill-name">Node.js</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/tailwind-css-icon.png"
              alt="Tailwind CSS"
              width={500}
              height={400}
            />
            <span className="skill-name">Tailwind CSS</span>
          </div>

          <div className="skill">
            <Image
              className="icon"
              src="/images/figma-icon.png"
              alt="Figma"
              width={500}
              height={400}
            />
            <span className="skill-name">Figma</span>
          </div>

          <div className="skill">
            <Image
              className="icon invert"
              src="/images/github-icon.png"
              alt="GitHub"
              width={500}
              height={400}
            />
            <span className="skill-name">GitHub</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
