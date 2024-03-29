import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import Wrapper from "../wrappers/homeWrapper.js";
import FormFeedback from "./FormFeedback.js";
import { useAppContext } from "./context/AuthContext.js";
import FormNoUser from "./FormNoUser.js";

const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { user } = useAppContext();

  const getFeedback = async () => {
    try {
      const { data } = await axios.get("/feedback");
      const { feedBacks } = data;
      setFeedbacks(feedBacks);
    } catch (error) {}
  };
  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <Wrapper>
      <div className="home">
        <section className="homeSection1">
          <article className="homeArticle">
            <h1 className="homeTitle">
              <span className="span">Hi</span>, I am Jozef Genšor
            </h1>
            <h2>I am learn a web development</h2>
            <div className="btns">
              <Link to="/Skills" className="btn">
                Skills
              </Link>
              <Link to="/Contact" className="btn">
                Contact
              </Link>
            </div>
          </article>
          <img src="./img/234A2606.jpg" className="imgHome" alt="JoGe"></img>
        </section>
        <section className="homeSection2">
          <h1 className="homeTitle2">my project</h1>
          <div className="project1">
            <aside>
              <a
                href="https://coffee-store-2mj6p8zi7-gjojo1234.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/coffeeStore.png"
                  alt="coffee store"
                  className="projectImage"
                />
              </a>
            </aside>
            <article className="projectArticle">
              <h1>Coffee Store</h1>
              <p>This page is created in Next.js</p>
            </article>
          </div>
          <div className="project1">
            <aside>
              <a
                href="https://trialshop.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/shop.png"
                  alt="react drinks"
                  className="projectImage"
                />
              </a>
            </aside>
            <article className="projectArticle">
              <h1>shop</h1>
              <p>This is a trial page.</p>
              <p>On the Frontend i used: React and Typescript.</p>
              <p>On the Backend i used: ExpressJS, NodeJS and MongoDB.</p>
            </article>
          </div>
          <div className="project1">
            <aside>
              <a
                href="https://playful-sherbet-f3f869.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/react_drinks.png"
                  alt="react drinks"
                  className="projectImage"
                />
              </a>
            </aside>
            <article className="projectArticle">
              <h1>drinks</h1>
              <p>This is a project about drinks.</p>
              <p>This is a trial page.</p>
              <p>This page is created in React.</p>
            </article>
          </div>
        </section>
        <section className="homeSection3">
          <div className="addFeedback">
            <h1 className="titleFeedback">add feedback</h1>
            {user ? <FormFeedback /> : <FormNoUser />}
          </div>
          <div className="allFeedback">
            <h1 className="titleFeedback">Feedbacks</h1>
            {feedbacks.map((item) => {
              const { name, feedback } = item;
              return (
                <div className="feedbackItem" key={Math.random()}>
                  <h1>{name}</h1>
                  <p>"{feedback}"</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Home;
