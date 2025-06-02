import React from "react";

const content = [
  "Problem Solver",
  "·",
  "Creative Thinker",
  "·",
  "Team Collaborator",
  "·",
  "Fast Learner",
  "·",
  "Detail-Oriented",
  "·",
  "Creative Thinker",
  "·",
  "Curious Learner",
  "·",
];

const Marquee = ({ className }) => (
  <div className={`marquee ${className}`}>
    <ul className="marquee__content scroll">
      {content.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
    <ul className="marquee__content scroll" aria-hidden="true">
      {content.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  </div>
);

const SkillMarquee = () => {
  return (
    <section className="marquees-wrapper">
      <Marquee className="marquee-1" />
      {/* <Marquee className="marquee-2" /> */}
      <Marquee className="marquee-3" />
    </section>
  );
};

export default SkillMarquee;
