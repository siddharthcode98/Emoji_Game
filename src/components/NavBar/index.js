import "./index.css";

const NavBar = (props) => {
  const { score, highScore, gameStatus } = props;
  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {gameStatus ? (
        <div></div>
      ) : (
        <ul className="scoreContainer">
          <li>
            <p className="scoreContainer">Score:{score}</p>
          </li>
          <li>
            <p>Top Score:{highScore}</p>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
