import React from "react";
import styles from "./style.css";

const title = "React application from scratch with Webpack and Babel";
const App = () => (
  <div className={styles.main}>
    <h1>Welcome</h1>
    <div>{title}</div>
  </div>
);

export default App;
