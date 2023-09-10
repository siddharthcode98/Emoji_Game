import { Component } from "react";

import NavBar from "../NavBar";

import EmojiCard from "../EmojiCard";

import WinorLoseCard from "../WinorLoseCard";

import "./index.css";

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = { userSelectedEmoji: [], topScore: 0, gameOver: false, score: 0 };

  selectedEmoji = (emojiId) => {
    const { userSelectedEmoji } = this.state;

    if (userSelectedEmoji.includes(emojiId)) {
      this.setState((prevState) => ({
        gameOver: !prevState.gameOver,
        userSelectedEmoji: [],
      }));
    } else {
      if (userSelectedEmoji.length === 11) {
        this.setState((prevState) => ({
          gameOver: !prevState.gameOver,
          userSelectedEmoji: [],
          score: 12,
        }));
      } else {
        this.setState((prevState) => ({
          score: prevState.score + 1,
          userSelectedEmoji: [...prevState.userSelectedEmoji, emojiId],
        }));
      }
    }
  };

  playAgain = (userScore) => {
    const { topScore } = this.state;

    this.setState((prevState) => ({
      gameOver: !prevState.gameOver,
    }));

    if (userScore > topScore) {
      this.setState({ topScore: userScore, score: 0, userSelectedEmoji: [] });
    } else {
      this.setState({ topScore: topScore, score: 0, userSelectedEmoji: [] });
    }
  };

  render() {
    const { emojisList } = this.props;

    const { gameOver, topScore, score, userSelectedEmoji } = this.state;

    console.log(gameOver);
    console.log(topScore);
    console.log(score);
    console.log(userSelectedEmoji.length);
    const shuffledEmojisList = () => {
      const { emojisList } = this.props;
      return emojisList.sort(() => Math.random() - 0.5);
    };

    shuffledEmojisList();

    return (
      <div className="appContainer">
        <NavBar score={score} highScore={topScore} gameStatus={gameOver} />
        <div className="section1">
          {gameOver ? (
            <div className="gameOverCard">
              <WinorLoseCard score={score} gameReset={this.playAgain} />
            </div>
          ) : (
            <ul className="emojiListContainer">
              {emojisList.map((eachEmoji) => (
                <EmojiCard
                  EmojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  selectedEmoji={this.selectedEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default EmojiGame;
