// PAIR Chocolate — app root (mobile flow)

const { useState, useEffect, useMemo, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showGrain": true,
  "bgIntensity": 0.92
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Routing
  const [route, setRoute] = useState("landing");
  // Identity
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState(null);
  // Test
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  // Modal
  const [showPopup, setShowPopup] = useState(false);

  // ─── Scoring ─────
  const result = useMemo(() => {
    if (Object.keys(answers).length < window.QUESTIONS.length) return null;
    const scores = { LOVE:0, COMFORT:0, UNDERSTANDING:0, CALM:0, AFFECTION:0, PROTECTION:0, SUPPORT:0 };
    Object.entries(answers).forEach(([qi, oi]) => {
      const q = window.QUESTIONS[Number(qi)];
      if (!q || !q.options || !q.options[oi]) return;
      const o = q.options[oi];
      if (!o.s) return;
      Object.entries(o.s).forEach(([k, v]) => { scores[k] += v; });
    });
    const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return { scores, main: ranked[0][0], sub: ranked[1][0], relationship };
  }, [answers, relationship]);

  // ─── Background intensity per route ─────
  const bgClass = (() => {
    switch (route) {
      case "landing":  return "";
      case "name":     return "dim";
      case "test":     return "dim";
      case "analysis": return "dim";
      case "result":   return "faded";
      case "analysis_detail": return "faded";
      default: return "";
    }
  })();

  // ─── Navigation ─────
  const go = useCallback((r) => {
    setRoute(r);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 10);
  }, []);

  const startTest = () => { go("name"); };

  const onName = (n) => {
    setName(n);
    setAnswers({});
    setQIndex(0);
    setRelationship(null);
    go("test");
  };

  const onAnswer = useCallback((qi, oi) => {
    const q = window.QUESTIONS[qi];
    if (q.isRelationship) setRelationship(q.options[oi].rel);
    setAnswers((p) => ({ ...p, [qi]: oi }));
    setTimeout(() => {
      if (qi + 1 < window.QUESTIONS.length) setQIndex(qi + 1);
      else {
        go("analysis");
        setTimeout(() => go("result"), 2600);
      }
    }, 360);
  }, [go]);

  const restart = () => {
    setAnswers({}); setQIndex(0);
    setName(""); setRelationship(null);
    setShowPopup(false);
    go("landing");
  };

  const onTestBack = () => {
    if (qIndex === 0) go("name");
    else setQIndex(qIndex - 1);
  };

  // ─── Render ─────
  const screen = (() => {
    switch (route) {
      case "landing":  return <window.Landing onStart={startTest} />;
      case "name":     return <window.NameInput initial={name} onComplete={onName} onBack={() => go("landing")} />;
      case "test":     return <window.Test qIndex={qIndex} answers={answers} name={name} onAnswer={onAnswer} onBack={onTestBack} />;
      case "analysis": return <window.Analysis />;
      case "result":
        return result ? (
          <window.Result result={result} name={name} onBack={() => go("landing")} onContinue={() => go("analysis_detail")} />
        ) : <window.Landing onStart={startTest} />;
      case "analysis_detail":
        return result ? (
          <window.AnalysisDetail result={result} name={name} onBack={() => go("result")} onPopup={() => setShowPopup(true)} onRestart={restart} />
        ) : <window.Landing onStart={startTest} />;
      default: return null;
    }
  })();

  return (
    <div className="app">
      <div className={"bg-stage " + bgClass}>
        <img src={window.RES("heartBg", "assets/hearts-bg-md.png")} alt="" className="heart-media" draggable="false" />
      </div>
      {t.showGrain && <div className="grain-overlay" />}

      <div key={route} style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", justifyContent: "center" }}>
        {screen}
      </div>

      {showPopup && <window.PopupModal onClose={() => setShowPopup(false)} />}

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="비주얼">
          <window.TweakToggle label="필름 그레인" value={t.showGrain} onChange={(v) => setTweak("showGrain", v)} />
        </window.TweakSection>
        <window.TweakSection title="플로우 점프">
          <window.TweakButton label="처음으로" onClick={restart} />
          <window.TweakButton label="이름 입력" onClick={() => go("name")} />
          <window.TweakButton label="결과 (랜덤)" onClick={() => {
            const a = {};
            window.QUESTIONS.forEach((q, i) => {
              if (q.isRelationship) { a[i] = 0; setRelationship("lover"); }
              else { a[i] = Math.floor(Math.random() * 4); }
            });
            setAnswers(a);
            if (!name) setName("지은");
            setTimeout(() => go("result"), 80);
          }} />
          <window.TweakButton label="상세 분석" onClick={() => {
            const a = {};
            window.QUESTIONS.forEach((q, i) => {
              if (q.isRelationship) { a[i] = 0; setRelationship("lover"); }
              else { a[i] = 0; }
            });
            setAnswers(a);
            if (!name) setName("지은");
            setTimeout(() => go("analysis_detail"), 80);
          }} />
          <window.TweakButton label="팝업 QR" onClick={() => setShowPopup(true)} />
        </window.TweakSection>
        <window.TweakSection title="관계 미리보기">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
            {Object.entries(window.RELATIONSHIPS).map(([k, v]) => (
              <button key={k} onClick={() => setRelationship(k)}
                style={{
                  background: relationship === k ? "var(--cacao)" : "transparent",
                  color: relationship === k ? "var(--ivory)" : "var(--cacao)",
                  border: "1px solid var(--hair)",
                  padding: "6px 4px",
                  fontSize: 10,
                  cursor: "pointer",
                }}>{v.kr}</button>
            ))}
          </div>
        </window.TweakSection>
      </window.TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
