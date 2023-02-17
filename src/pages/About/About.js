import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about_wrapper">
      <h1>About</h1>
      <p className="icon">{'</>'}</p>
      <h2>
        Hi, I am Karol. Front-end developer <br />
        with big enthusiasm to create.
      </h2>
      <div className="about_text_container">
        <p>
          I have always been interested in science and new technologies. Chemistry and physics have
          always been there an unusual topic for me. That interests led me to the university where I
          received the title of engineer in the field of nanotechnology.
        </p>
        <p>
          While writing my diploma thesis, I also became interested in programming, which as a
          result, became my main topic of interest after a few years. For the period of the
          pandemic, I devoted my time mainly to learning programming languages ​​such as Python and
          Javascript. However, when I started to be interested in React, I noticed that is the
          technology I want to work with.
        </p>
        <p>
          As per my character as a person, I value a job well done. I like to face problems and
          search for logical solutions. I consider myself someone who is determined and reliable,
          especially when it comes to entrusting with a task.
        </p>
        <p>
          Professionally, I am looking for challenges that will allow me to develop in my field,
          which is Front-end development. If you have an idea that you would want to bring to life
          or are looking for a junior for your team, I encourage you to download my CV and contact
          me by e-mail or directly on LinkedIn.
        </p>

        <button className="btn">My CV</button>

        <p>I will be happy to discuss the possibilities or help you build your website or app.</p>
      </div>
    </div>
  );
};

export default About;
