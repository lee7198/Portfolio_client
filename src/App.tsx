import { GithubLogo, Laptop } from "@phosphor-icons/react";
import JSConfetti from "js-confetti";
import { useState } from "react";

function App() {
  const [wait, setWait] = useState(true);
  const jsConfetti = new JSConfetti();

  const handleConfetti = async () => {
    setWait(false);
    await jsConfetti
      .addConfetti({
        emojis: ["🍀", "🍅", "🍀", "✨", "🍀"],
        emojiSize: 80,
        confettiNumber: 55,
      })
      .then(() => setWait(true));
  };

  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 1rem",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <h1 style={{ fontWeight: "100" }}>안녕하세요!</h1>
      </div>
      <div>
        <p style={{ wordBreak: "keep-all" }}>
          즐기며 성장하는 프론트엔드 개발자 <b>이도경</b>입니다. <br />
          현재는 학업과 개발 공부에 집중하고 있습니다. 길겠지만 앞으로의
          성장과정 잘 지켜봐 주세요. <small>😌</small>
        </p>
        <p>감사합니다.</p>
      </div>
      <h3
        style={{
          textAlign: "left",
          width: "100%",
          position: "relative",
          zIndex: 5,
        }}
      >
        CONTACT
      </h3>
      <div
        style={{
          textAlign: "left",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          zIndex: 1,
        }}
      >
        <a className="button" href="https://github.com/lee7198">
          <GithubLogo weight="fill" />
          <div>github</div>
        </a>
        <a className="button" href="https://velog.io/@lee7198">
          <Laptop weight="fill" />
          <div>velog</div>
        </a>

        <button
          disabled={!wait}
          type="button"
          className={`forU ${!wait ? "disalbed" : ""}`}
          onClick={handleConfetti}
        >
          {wait ? "FOR U" : <span className="loader" />}
        </button>
      </div>
    </div>
  );
}

export default App;
