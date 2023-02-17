import { useState } from 'react';
import './Projects.css';

const Works = () => {
  const projectsList = [
    {
      name: 'Ecommerce store',
      code: 'https://github.com/Karol204/ecommerce_shop_sanity_stripe',
      link: 'https://ecommerce-shop-sanity-stripe-yj3n.vercel.app/',
      desc: 'Fully functional store connected to stripe payments.',
    },
    {
      name: 'Filip-coding chatbot',
      code: 'https://github.com/Karol204/Coding_chat',
      link: 'https://coding-chat.vercel.app/',
      desc: 'Chat build with use of OpenAI, helpfule tool while coding',
    },
    {
      name: 'Bank product',
      code: 'https://github.com/Karol204/bank_card_payment',
      link: 'https://bank-card-payment.vercel.app/',
      desc: 'Modern landing page with responsive layout',
    },
    {
      name: 'Chat GPT-3',
      code: 'https://github.com/Karol204/GPT3_website',
      link: 'https://gpt-3-website-gold.vercel.app/',
      desc: 'Modern landing page with responsive layout',
    },
  ];

  return (
    <div className="big_wrapper ">
      <div className="wrapper_projects">
        <div className="projects_left_container">
          <div className="header_container">
            <h1>My work</h1>
          </div>
          <div className="projects_section-paragraph">
            <p>Here you can see some of my projects</p>
            <p>
              Projects in this showcase are mobile friendly and build with use of modern
              technologies
            </p>
          </div>
        </div>
        <div className="projects_right_container">
          {projectsList.map((project) => (
            <div className="project_link_container" key={project.name}>
              <h3 className="project_link">{project.name}</h3>
              <p className="project_desc">
                {project.desc}{' '}
                <div className="buttons">
                  <a href={project.code} target="_blank" className="btn_small" rel="noreferrer">
                    Code
                  </a>
                  <a href={project.link} target="_blank" className="btn_small" rel="noreferrer">
                    Live
                  </a>{' '}
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
