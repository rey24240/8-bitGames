(function(){
  const STORAGE_KEY = 'theme';
  const THEME_VARS = [
    '--primary-color','--secondary-color','--accent-color',
    '--bg-2-color','--bg-color','--text-color','--text-secondary-color',
    '--text-placeholder-color','--border-color','--border-radius',
    '--blob-1','--blob-2','--blob-3'
  ];

  // copy computed theme variables from body into :root (documentElement)
  function syncThemeVarsToRoot() {
    // short delay to let CSS cascade after changing attribute
    requestAnimationFrame(() => {
      const computed = getComputedStyle(document.body);
      THEME_VARS.forEach(name => {
        const val = (computed.getPropertyValue(name) || '').trim();
        if (val) {
          document.documentElement.style.setProperty(name, val);
        } else {
          // if not present on body, remove any inline override on :root
          document.documentElement.style.removeProperty(name);
        }
      });
    });
  }

  // initialize from storage
  try{
    const saved = localStorage.getItem(STORAGE_KEY) || 'Default';
    if(saved) document.body.setAttribute('theme', saved);
    // ensure root vars reflect initial theme
    syncThemeVarsToRoot();
  }catch(e){ /* ignore */ }
})();
