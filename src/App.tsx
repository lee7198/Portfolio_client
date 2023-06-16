import { GithubLogo, Laptop } from "@phosphor-icons/react";

function App() {
  return (
    <div
      style={{
        height: "90svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1rem",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <h1 style={{ fontWeight: "bold" }}>Hello:</h1>
        <h1 style={{ fontWeight: "100" }}>"안녕하세요"</h1>
      </div>
      <div>
        <p>
          성장하는 프론트엔드 개발자 <b>이도경</b>입니다. <br />
          현재는 학업과 개발 공부에 집중하고 있습니다. 길겠지만 앞으로의
          성장과정 잘 지켜봐 주세요. <small>😌</small>
        </p>
        <p>감사합니다.</p>
      </div>
      <h3 style={{ textAlign: "left", width: "100%" }}>CONTACT</h3>
      <div
        style={{
          textAlign: "left",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
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
      </div>
    </div>
  );
}

export default App;
