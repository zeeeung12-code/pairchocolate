// PAIR — symbol & logo (uses PNG assets uploaded by user)

window.SymbolImg = function SymbolImg({ src, alt, size = 100, opacity = 1, className = "" }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        display: "inline-block",
        verticalAlign: "middle",
      }}
      className={className}
      draggable="false"
    />
  );
};

window.SymbolByKey = function SymbolByKey({ k, ...rest }) {
  const map = {
    LOVE: window.RES("symLove", "assets/symbol-love.png"),
    COMFORT: window.RES("symComfort", "assets/symbol-comfort.png"),
    UNDERSTANDING: window.RES("symUnderstanding", "assets/symbol-understanding.png"),
    CALM: window.RES("symCalm", "assets/symbol-calm.png"),
    AFFECTION: window.RES("symAffection", "assets/symbol-affection.png"),
    PROTECTION: window.RES("symProtection", "assets/symbol-protection.png"),
    SUPPORT: window.RES("symSupport", "assets/symbol-support.png"),
  };
  return <window.SymbolImg src={map[k]} {...rest} />;
};

window.SymbolByEmotion = function SymbolByEmotion({ emotion, ...rest }) {
  return emotion ? <window.SymbolImg src={emotion.symbol} {...rest} /> : null;
};

// PAIR Chocolate wordmark — uses the uploaded logo image
window.PairLogo = function PairLogo({ size = 78 }) {
  return (
    <img
      src={window.RES("logo", "assets/logo.png")}
      alt="PAIR Chocolate"
      width={size}
      style={{ width: size, height: "auto", objectFit: "contain", display: "inline-block" }}
      draggable="false"
    />
  );
};
