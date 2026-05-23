
// Minimal tweaks hook for GitHub Pages deployment
window.useTweaks = function(defaults){
  const [state, setState] = React.useState(defaults || {});
  const setTweak = (key, value) => {
    setState(prev => ({...prev, [key]: value}));
  };
  return [state, setTweak];
};
