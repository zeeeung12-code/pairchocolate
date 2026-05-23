// PAIR Chocolate — mobile flow screens

const { useState: useS, useEffect: useE, useRef: useR } = React;

const ROUTE = {
  LANDING:  "landing",
  NAME:     "name",
  TEST:     "test",
  ANALYSIS: "analysis",
  RESULT:   "result",
  ANALYSIS_DETAIL: "analysis_detail",
};

// ═══════════════ LANDING ═══════════════
window.Landing = function Landing({ onStart }) {
  return (
    <div className="frame fit">
      <header className="brandbar">
        <span className="left" />
        <div className="center"><window.PairLogo size={78} /></div>
        <span className="right" />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "12px 28px 28px" }}>
        <div style={{ marginTop: 28 }}>
          <p className="kr-sub rise" style={{ margin: 0, fontWeight: 600, fontSize: 16, color: "var(--cacao-2)" }}>
            나의 감정은 무엇일까?
          </p>
          <h1 className="kr-display rise rise-d1" style={{ fontSize: 34, margin: "16px 0 22px" }}>
            {`당신의 감정을\n기록해보세요.`}
          </h1>
          <p className="kr-sub rise rise-d2" style={{ margin: 0, fontSize: 14.5, color: "var(--cacao-2)" }}>
            {`정의하지 못한 감정과, 그 감정이\n향하고 있는 방향을 들여다봅니다.`}
          </p>
        </div>

        <div style={{ flex: 1 }} />

        <button className="cta rise rise-d4" onClick={onStart} style={{ marginTop: 16 }}>
          나의 감정 알아보기
        </button>
      </main>
    </div>
  );
};

// ═══════════════ NAME INPUT ═══════════════
window.NameInput = function NameInput({ initial, onComplete, onBack }) {
  const [name, setName] = useS(initial || "");
  const inputRef = useR(null);
  useE(() => { setTimeout(() => inputRef.current?.focus(), 320); }, []);

  const submit = () => { if (name.trim()) onComplete(name.trim()); };

  return (
    <div className="frame fit">
      <header className="brandbar">
        <span className="left"><button className="icon-btn" onClick={onBack}>‹</button></span>
        <div className="center"><window.PairLogo size={78} /></div>
        <span className="right" />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 28px 28px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="eyebrow-en rise" style={{ margin: 0 }}>YOUR NAME</p>
            <h2 className="kr-display rise rise-d1" style={{ fontSize: 26, margin: "18px 0 10px" }}>
              어떻게 불러드릴까요?
            </h2>
            <p className="kr-sub rise rise-d2" style={{ margin: "0 0 36px", fontSize: 13.5, color: "var(--cacao-2)" }}>
              결과 카드와 아카이브에 함께 기록됩니다.
            </p>
            <input
              ref={inputRef}
              className="pill-input rise rise-d3"
              placeholder="이름을 입력해 주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
            />
          </div>
        </div>

        <button className="cta" onClick={submit} disabled={!name.trim()}>
          입력 완료
        </button>
      </main>
    </div>
  );
};

// ═══════════════ TEST (10 questions) ═══════════════
window.Test = function Test({ qIndex, answers, name, onAnswer, onBack }) {
  const total = window.QUESTIONS.length;
  const q = window.QUESTIONS[qIndex];
  const selected = answers[qIndex];
  const questionText = typeof q.q === "function" ? q.q(name) : q.q;

  return (
    <div className="frame fit">
      <header className="brandbar">
        <span className="left"><button className="icon-btn" onClick={onBack}>‹</button></span>
        <div className="center"><window.PairLogo size={78} /></div>
        <span className="right" />
      </header>

      <main key={qIndex} style={{ flex: 1, display: "flex", flexDirection: "column", padding: "44px 28px 28px" }}>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <span className="numeral-mark rise">{String(qIndex + 1).padStart(2, "0")}</span>
          <h2 className="kr-display rise rise-d1" style={{ fontSize: 22, margin: "8px 0 12px" }}>
            {questionText}
          </h2>
          {q.sub && (
            <p className="kr-sub rise rise-d2" style={{ margin: 0, fontSize: 13.5, color: "var(--cacao-2)" }}>
              {q.sub}
            </p>
          )}
        </div>

        <div style={{ flex: 1 }} />

        <div className="rise rise-d2" style={{ paddingBottom: 8 }}>
          {q.options.map((o, i) => (
            <button
              key={i}
              className={"pill" + (selected === i ? " selected" : "")}
              onClick={() => onAnswer(qIndex, i)}
            >
              {o.t}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

// ═══════════════ ANALYSIS TRANSITION ═══════════════
window.Analysis = function Analysis() {
  const ems = Object.values(window.EMOTIONS);
  return (
    <div className="frame fit">
      <header className="brandbar">
        <span className="left" />
        <div className="center"><window.PairLogo size={78} /></div>
        <span className="right" />
      </header>
      <main style={{ flex: 1, display: "grid", placeItems: "center", padding: "28px" }}>
        <div style={{ textAlign: "center" }}>
          <p className="kr-sub rise" style={{ fontSize: 16, color: "var(--cacao-2)", fontWeight: 500, margin: 0 }}>
            나의 감정은..
          </p>
          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, justifyItems: "center", maxWidth: 280 }}>
            {ems.map((e, i) => (
              <div key={e.key} style={{
                animation: `analyzeBlink 2.2s ${i * 0.18}s infinite`,
                opacity: 0.4,
              }}>
                <window.SymbolByEmotion emotion={e} size={42} />
              </div>
            ))}
          </div>
          <p className="kr-sub rise rise-d2" style={{ fontSize: 13, marginTop: 32, color: "var(--mute)" }}>
            당신의 답을 천천히 들여다보고 있습니다.
          </p>
        </div>
        <style>{`@keyframes analyzeBlink { 0%,100% { opacity: .25 } 50% { opacity: 1 } }`}</style>
      </main>
    </div>
  );
};
