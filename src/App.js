import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
          <h1>HELLO <span role={"img"} aria-label={"Hii"}>&#128075;</span>, I'M  MUKUL KUMAR JHA!</h1>
          <span>
            <i>I'm experienced with React, Redux, React-Native, NextJS, S/CSS, Antd, Typescript, GraphQL, Node,
            Express.js, Firebase and lots of other technologies
            </i> <span role={"img"} aria-label={"Sunglasses"}>&#128526;</span>
          </span>
      </div>
      <div className="links-container">
        <a
            id="linkedin"
            href={"https://www.linkedin.com/in/mukul-kr-jha/"}
            aria-label={"LinkedIn Profile"}
            tabIndex={0}
        >LinkedIn</a>
        <a
            id="github"
            href={"https://github.com/mukul-kmr-jha"}
            aria-label={"Github Profile"}
            tabIndex={0}
        >Github</a>
        <a
            id="stackoverflow"
            href={"https://stackoverflow.com/users/9312233/code-it-up?tab=profile"}
            aria-label={"StackOverflow Profile"}
            tabIndex={0}
        >StackOverflow</a>
          <a
              id="twitter"
              href={"https://twitter.com/Mukulkrjha2"}
              aria-label={"Twitter Profile"}
              tabIndex={0}
          >Twitter</a>
      </div>
    </div>
  );
}

export default App;
