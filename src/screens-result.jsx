// PAIR — Result + Analysis Detail + Popup CTA

const ATTRS = ["애정", "여운", "존중", "온기", "진심"];

// ═══════════════ RESULT (frosted glass card) ═══════════════
window.Result = function Result({ result, name, onBack, onContinue }) {
  const E = window.EMOTIONS[result.main];
  const rel = result.relationship || "self";
  const copy = window.RESULT_COPY[result.main][rel];

  return (
    <div className="frame fit">
      <header className="brandbar">
        <span className="left"><button className="icon-btn" onClick={onBack}>‹</button></span>
        <div className="center"><window.PairLogo size={78} /></div>
        <span className="right" />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 28px 28px" }}>
        <p className="rise" style={{
          textAlign: "center",
          margin: "8px 0 22px",
          fontSize: 16,
          fontWeight: 600,
          color: "var(--cacao)",
          letterSpacing: "-0.005em",
        }}>
          {name ? `${name} 님의 감정은..` : "나의 감정은.."}
        </p>

        <div className="glass-card rise rise-d1" style={{ textAlign: "center" }}>
          <div className="drift" style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <window.SymbolByEmotion emotion={E} size={84} />
          </div>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.24em",
            color: "var(--cacao-2)",
            margin: 0,
            textTransform: "uppercase",
          }}>{E.en}</p>
          <h1 className="kr-display" style={{ fontSize: 26, margin: "8px 0 18px", fontWeight: 700 }}>
            {E.name}
          </h1>
          <div style={{ width: 36, height: 1, background: "var(--hair)", margin: "0 auto 22px" }} />
          <p className="kr-caption" style={{ margin: 0, whiteSpace: "pre-line", fontSize: 13.5 }}>
            {copy.body}
          </p>
          <p className="kr-sub" style={{
            margin: "20px 0 0",
            fontWeight: 600,
            color: "var(--cacao)",
            fontSize: 14,
            whiteSpace: "pre-line",
            lineHeight: 1.65,
          }}>
            {copy.summary}
          </p>
        </div>

        <div style={{ flex: 1, minHeight: 24 }} />

        <button className="cta" onClick={onContinue}>나의 감정 체험하러 가기</button>
      </main>
    </div>
  );
};

// ═══════════════ ANALYSIS DETAIL (dot chart + density) ═══════════════
window.AnalysisDetail = function AnalysisDetail({ result, name, onBack, onPopup, onRestart }) {
  const E = window.EMOTIONS[result.main];
  const rel = result.relationship || "self";
  const copy = window.RESULT_COPY[result.main][rel];
  const idx = Object.keys(window.EMOTIONS).indexOf(result.main) + 1;

  // Emotional density (% of total score) — sorted desc
  const total = Object.values(result.scores).reduce((a, b) => a + b, 0) || 1;
  const density = Object.entries(result.scores)
    .map(([k, v]) => ({ k, v, pct: Math.round((v / total) * 100) }))
    .sort((a, b) => b.v - a.v);

  return (
    <div className="frame">
      <header className="brandbar">
        <span className="left"><button className="icon-btn" onClick={onBack}>‹</button></span>
        <div className="center"><window.PairLogo size={78} /></div>
        <span className="right" />
      </header>

      <main style={{ padding: "16px 28px 36px", display: "flex", flexDirection: "column", gap: 32 }}>
        {/* — Emotional title + symbol (matches the page-*.png references) — */}
        <section className="rise" style={{ textAlign: "center", paddingTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <window.SymbolByEmotion emotion={E} size={64} />
          </div>
          <h1 className="serif-title" style={{ fontSize: 38, margin: 0 }}>{E.en}</h1>
          <p className="kr-display" style={{ fontSize: 20, margin: "6px 0 18px", fontWeight: 700 }}>{E.name}</p>
          <p className="kr-caption" style={{ margin: 0, whiteSpace: "pre-line", fontSize: 13.5 }}>
            {E.productNote}
          </p>
        </section>

        {/* — Attribute dot chart — */}
        <section className="rise rise-d1">
          <p className="caption-en" style={{ marginBottom: 8 }}>EMOTIONAL ATTRIBUTES</p>
          <div>
            {ATTRS.map((a) => (
              <div key={a} className="dot-row">
                <span className="lbl">{a}</span>
                <div className="dots">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={"dot" + (i < (E.dots[a] || 0) ? " on" : "")} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* — Emotional density (% of total score) — */}
        <section className="rise rise-d2">
          <p className="caption-en" style={{ marginBottom: 14 }}>EMOTIONAL DENSITY</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {density.map(({ k, pct }) => {
              const em = window.EMOTIONS[k];
              return (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "26px 1fr 56px 36px", gap: 12, alignItems: "center" }}>
                  <window.SymbolByEmotion emotion={em} size={22} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: 13, color: "var(--cacao)", fontWeight: 500 }}>{em.name}</span>
                    <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 11, color: "var(--mute)", marginTop: 1 }}>{em.en}</span>
                  </div>
                  <div style={{ height: 1, background: "var(--hair-soft)", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, background: "var(--cacao)", transformOrigin: "left", transform: `scaleX(${pct / 100})`, transition: "transform 1.2s var(--ease-out)" }} />
                  </div>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 12, fontVariantNumeric: "tabular-nums", color: "var(--cacao-2)", textAlign: "right" }}>{pct}%</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* — Relationship interpretation — */}
        <section className="rise rise-d3 glass-card" style={{ padding: "26px 24px" }}>
          <p className="caption-en" style={{ marginBottom: 14 }}>RELATIONSHIP READING · {window.RELATIONSHIPS[rel].en.toUpperCase()}</p>
          <p className="kr-caption" style={{ whiteSpace: "pre-line", margin: 0, fontSize: 14, lineHeight: 1.85, color: "var(--cacao)" }}>
            {copy.detail}
          </p>
        </section>

        {/* — Emotional archive card — */}
        <section className="rise rise-d4">
          <p className="caption-en" style={{ marginBottom: 14 }}>EMOTIONAL ARCHIVE CARD</p>
          <div className="archive-card" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
              <window.PairLogo size={56} />
              <div style={{ textAlign: "right" }}>
                <span className="caption-en" style={{ fontSize: 9 }}>NO.</span>
                <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 28, color: "var(--cacao)", lineHeight: 1 }}>
                  {String(idx).padStart(3, "0")}
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", margin: "28px 0 24px", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                <window.SymbolByEmotion emotion={E} size={56} />
              </div>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: E.color, letterSpacing: "0.1em" }}>{E.en}</span>
              <div className="kr-display" style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{E.name}</div>
            </div>
            <div style={{
              borderTop: "1px solid var(--hair-soft)",
              paddingTop: 16,
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
              position: "relative", zIndex: 1,
            }}>
              <ArchMeta label="HOLDER" value={name || "—"} />
              <ArchMeta label="FOR" value={window.RELATIONSHIPS[rel].kr} align="right" />
              <ArchMeta label="DATE" value={fmtDate()} />
              <ArchMeta label="ED." value="LIMITED · 2026" align="right" />
            </div>
          </div>
        </section>

        {/* — Popup CTA — */}
        <section className="rise rise-d5 glass-card" style={{ padding: "26px 24px", textAlign: "center" }}>
          <p className="caption-en" style={{ marginBottom: 10 }}>PAIR EMOTIONAL LABORATORY POPUP</p>
          <h3 className="kr-display" style={{ fontSize: 18, margin: "0 0 8px", fontWeight: 700 }}>
            당신의 감정을 직접 경험해보세요.
          </h3>
          <p className="kr-caption" style={{ margin: "0 0 22px", fontSize: 13 }}>
            온라인 결과를 들고 마포 페어초콜릿 감정 큐레이션 연구소를 방문하시면,
            현장에서 큐레이션된 한 조각의 초콜릿을 받아보실 수 있습니다.
          </p>
          <button className="cta" onClick={onPopup}>팝업 예약하기</button>
        </section>

        <button className="cta-ghost" onClick={onRestart} style={{ marginTop: 8 }}>
          다시 감정 기록하기
        </button>
      </main>
    </div>
  );
};

function ArchMeta({ label, value, align }) {
  return (
    <div style={{ textAlign: align || "left" }}>
      <div className="caption-en" style={{ fontSize: 8.5 }}>{label}</div>
      <div style={{ fontSize: 12, color: "var(--cacao)", marginTop: 4, fontWeight: 500 }}>{value}</div>
    </div>
  );
}

function fmtDate() {
  const d = new Date();
  return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;
}

// ═══════════════ POPUP / QR MODAL ═══════════════
window.PopupModal = function PopupModal({ onClose }) {
  const qr = React.useMemo(() => {
    const size = 21;
    const out = [];
    let s = 13;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const corner = (x < 7 && y < 7) || (x > size - 8 && y < 7) || (x < 7 && y > size - 8);
      const on = corner
        ? ((x >= 1 && x <= 5 && y >= 1 && y <= 5) ? ((x === 1 || x === 5 || y === 1 || y === 5) ? true : (x >= 2 && x <= 4 && y >= 2 && y <= 4)) : false)
        : r() > 0.52;
      out.push({ x, y, on });
    }
    return out;
  }, []);

  return (
    <div className="scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
          <span className="caption-en">POP-UP RESERVATION</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close">×</button>
        </div>
        <h2 className="kr-display" style={{ fontSize: 22, margin: "0 0 12px", fontWeight: 700 }}>
          {`Emotional Laboratory\n마포 팝업`}
        </h2>
        <p className="kr-caption" style={{ margin: "0 0 22px", fontSize: 13 }}>
          현장에서 감정 카드와 큐레이션된 초콜릿을 받아보실 수 있습니다.
          QR을 저장하고 팝업 입구에 보여주세요.
        </p>
        <div style={{
          background: "var(--ivory-2)",
          borderRadius: 18,
          padding: 22,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(21, 1fr)", gap: 1, width: 200, height: 200 }}>
            {qr.map((c, i) => (
              <span key={i} style={{ background: c.on ? "var(--cacao)" : "transparent", aspectRatio: "1" }} />
            ))}
          </div>
          <p className="caption-en" style={{ marginTop: 14, fontSize: 9 }}>SCAN AT POP-UP ENTRANCE</p>
        </div>
        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 12 }}>
          <Row label="DATE" v="2026. 06. 01 — 06. 07" />
          <Row label="TIME" v="11:00 — 21:00" />
          <Row label="LOCATION" v="서울 마포구 와우산로 13길 23" align="left" />
          <Row label="ADMISSION" v="무료 · 예약제" align="right" />
        </div>
        <button className="cta" onClick={onClose} style={{ marginTop: 22 }}>닫기</button>
      </div>
    </div>
  );
};

function Row({ label, v, align }) {
  return (
    <div style={{ textAlign: align || "left" }}>
      <div className="caption-en" style={{ fontSize: 9 }}>{label}</div>
      <div style={{ fontSize: 12, color: "var(--cacao)", marginTop: 4, lineHeight: 1.4 }}>{v}</div>
    </div>
  );
}
