import "./index.css";

const EmojiCard = (props) => {
  const { EmojiDetails, selectedEmoji } = props;
  const { id, emojiName, emojiUrl } = EmojiDetails;

  const sendId = () => {
    selectedEmoji(id);
  };

  return (
    <li>
      <button type="button" onClick={sendId} className="btnElement">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  );
};

export default EmojiCard;
