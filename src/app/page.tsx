"use client";
import Heading from "@/components/Heading";
import Skills from "@/components/Skills";
import Card from "@/components/Expcard";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contactme from "@/components/Contact";
import Projectcard from "@/components/project";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <Intro />
      </section>

      <section id="ABOUT" className="hero2">
        <Heading showParagraph={false} heading="ABOUT ME" />
        <About />
      </section>

      <section className="hero3">
        <Heading heading="SKILLS" />
        <Skills />
      </section>

      <section className="hero4">
        <Heading
          heading="EXPERIENCE"
          headline="Here is a quick summary of my most recent experiences:"
        />
        <div className="experience-grid">
          <Card
            src="/images/upwork-icon.png"
            alt="upwork"
            head="Jr. Frontend developer"
          />
          <Card
            src="/images/fiverr-icon.png"
            alt="fiverr"
            head="Jr. Frontend developer"
          />
          <Card
            src="/images/freelancer-icon.png"
            alt="freelancer"
            head="Jr. Frontend developer"
          />
        </div>
      </section>

      <section id="WORK" className="hero5 py-12 xs-py-16">
        <Heading
          heading="WORK"
          headline="Some of the noteworthy projects I have built:"
        />
        <div className="grid grid-cols-1 sm-grid-cols-2 md-grid-cols-none md-grid-flow-row gap-4">
          <Projectcard
            src="/images/resume.png"
            heading="RESUME BUILDER"
            alt="resume"
            address="https://hackathon-1-gules.vercel.app/"
          />
          <Projectcard
            src="/images/Game.png"
            heading="NUMBER GUESSING"
            alt="game"
            address="https://vercel.com/api/toolbar/link/number-guessing-game-olive.vercel.app?via=team-dashboard-project-entity&p=1&page=/"
          />
          <Projectcard
            src="/images/Edu-web.png"
            heading="EDU WEB"
            alt="Website"
            address="https://edu-web-virid.vercel.app/"
          />
          <Projectcard
            src="/images/tictactoe.png"
            heading="TICTACTOE"
            alt="game2"
            address="https://vercel.com/api/toolbar/link/tic-tac-toe-theta-dusky.vercel.app?via=team-dashboard-project-entity&p=1&page=/"
          />
        </div>
      </section>

      <section id="TESTIMONIALS" className="hero6 py-12 xs-py-16">
        <Heading
          heading="TESTIMONIALS"
          headline="Nice things people have said about me:"
        />
        <div className="flex flex-col gap-10 xs-m-0">
          <div className="flex justify-center gap-10 flex-wrap">
            <Testimonials />
            <Testimonials />
            <Testimonials />
          </div>
        </div>
      </section>

      <section id="CONTACT" className="hero7 py-12 xs-py-16">
        <Heading
          heading="GET IN TOUCH"
          headline="What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect."
        />
        <Contactme />
      </section>
    </div>
  );
}
