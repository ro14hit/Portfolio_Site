import React from "react";

const About = () => {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3">
        After graduating with a B.Tech degree in{" "}
        <span className="font-medium">ECE</span>, I decided to pursue my passion
        for programming. I learnt coding by self-study for{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React.js, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with <span className="font-medium"> TypeScript</span>. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.

      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, reading books. I also enjoy{" "}
        <span className="font-medium">
          finance,charts and balance sheets as am a part-time Trader
        </span>
        .
      </p>
    </section>
  );
};

export default About;
