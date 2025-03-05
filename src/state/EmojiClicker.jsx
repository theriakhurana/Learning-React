import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState(() => [{ id: uuid(), emoji: ":)" }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };

  const change = () => {
    setEmojis((oldEmojis) => {
      return oldEmojis.map((e) => {
        return {
          ...e,
          emoji: "#",
        };
      });
    });
  };

  function randomEmoji() {
    const emojis = [":)", ":(", ":D", ":P", ":O"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={() => change()}>Change</button>
    </div>
  );
}

/*
{id:dhdwdblcm, emoji: ":)"}
*/
