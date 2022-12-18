import React from 'react'
import Bodypart from './Bodypart';
import './LongShot.css'

const LongShot = () => {
  return (
    <>
      <div className="main">
        <aside>
          <div className="logo">
            <img
              src="https://uploads-ssl.webflow.com/62a1d5337c2a860b919132f8/62baeb2e2cd714a19a955183_longshot%20logo.svg"
              width="200"
              alt="logo"
            />
          </div>
          <div className="name">
            <h3>Project</h3>
            <p>My First Project</p>
          </div>
          <div className="nav">
            <ul>
              <li className='dash'>
                <span>
                  <i className="fa-solid fa-house"></i>
                </span>
                Dashboard
              </li>
              <li className='reci'>
                <span>
                  <i className="fa-solid fa-mug-hot"></i>
                </span>
                Recipes
              </li>
              <li className='blog'>
                <span>
                  <i className="fa-brands fa-blogger-b"></i>
                </span>
                Blog
              </li>
              <li className="templates">
                <span>
                  <i className="fa-solid fa-gopuram"></i>
                </span>
                Templates &gt;
                <ul className="subling1">
                  <li>
                    <span>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    Favorites
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-caret-up"></i>
                    </span>
                    Custom
                  </li>
                </ul>
              </li>
              <li className="integration">
                <span>
                  <i className="fa-brands fa-yandex-international"></i>
                </span>
                Integration &gt;
                <ul className="subling2">
                  <li>
                    <span>
                      <i className="fa-solid fa-snowflake"></i>
                    </span>
                    Semrush
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <section> <Bodypart /></section>
      </div>
    </>
  );
}

export default LongShot