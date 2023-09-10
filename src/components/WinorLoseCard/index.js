import "./index.css";

const WinorLose = (props) => {
  const { score, gameReset } = props;
  const isWon = score === 12;
  const imageUrl = isWon
    ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
    : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";
  const heading = isWon ? "You Won" : "You Lose";
  const paragraph = isWon ? "Best Score" : "Score";
  const startGame = () => {
    gameReset(score);
  };
  return (
    <>
      <div className="textContainer">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <p>{score}/12</p>
        <button type="button" onClick={startGame} className="btnElement2">
          Play Again
        </button>
      </div>

      <img src={imageUrl} alt="win or lose" className="image" />
    </>
  );
};

export default WinorLose;
