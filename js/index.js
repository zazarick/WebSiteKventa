(function(){
  const audio = document.createElement('audio');
  audio.src = encodeURI('../music/John_Towner_Williams_-_Finale_67864931.mp3');
  audio.loop = true;
  audio.preload = 'auto';
  audio.autoplay = false;
  audio.playsInline = true;
  audio.volume = 0.02;
  audio.muted = true;
  audio.setAttribute('aria-hidden','true');
  audio.style.display = 'none';
  document.body.appendChild(audio);
  window.pageAudio = audio;

  function tryPlay(){
    audio.play().catch(function(){
      audio.muted = true;
      audio.play().catch(function(){});
      showEnableButton();
    });
  }

  function enableSoundOnce(){
    audio.muted = false;
    audio.volume = 0.07;
    tryPlay();
    window.removeEventListener('click', enableSoundOnce);
    window.removeEventListener('keydown', enableSoundOnce);
    window.removeEventListener('touchstart', enableSoundOnce);
    const btn = document.getElementById('enable-audio-btn');
    if(btn){ btn.remove(); }
  }

  function showEnableButton(){
    if(document.getElementById('enable-audio-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'enable-audio-btn';
    btn.textContent = 'Включить звук';
    btn.style.position = 'fixed';
    btn.style.right = '16px';
    btn.style.bottom = '16px';
    btn.style.zIndex = '10000';
    btn.style.padding = '10px 14px';
    btn.style.borderRadius = '10px';
    btn.style.border = '1px solid #23293a';
    btn.style.background = 'rgba(124,92,255,.15)';
    btn.style.color = '#e6e9ef';
    btn.style.cursor = 'pointer';
    btn.style.whiteSpace = 'nowrap';
    btn.style.fontFamily = 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif';
    btn.style.fontWeight = '600';
    btn.style.letterSpacing = '0.3px';
    btn.style.textShadow = 'none';
    btn.onclick = enableSoundOnce;
    document.body.appendChild(btn);
  }
})();

(function(){
  const btn = document.getElementById('music-edit-btn');
  const panel = document.getElementById('music-panel');
  const vol = document.getElementById('music-volume');
  const volVal = document.getElementById('music-vol-val');
  const muted = document.getElementById('music-muted');
  const save = document.getElementById('music-save');
  const cancel = document.getElementById('music-cancel');

  function openPanel(){
    if(!window.pageAudio){ return; }
    vol.value = window.pageAudio.volume.toFixed(2);
    volVal.textContent = vol.value;
    muted.checked = !window.pageAudio.muted;
    panel.style.display = 'block';
  }
  function closePanel(){ panel.style.display = 'none'; }
  vol.addEventListener('input', function(){ volVal.textContent = this.value; });
  save.addEventListener('click', function(){
    if(window.pageAudio){
      window.pageAudio.volume = parseFloat(vol.value);
      window.pageAudio.muted = !muted.checked;
      if(!window.pageAudio.paused){ window.pageAudio.play().catch(function(){}); }
    }
    closePanel();
  });
  cancel.addEventListener('click', closePanel);
  btn.addEventListener('click', function(){ panel.style.display = panel.style.display==='block' ? 'none':'block'; });
  document.addEventListener('click', function(e){ if(!e.target.closest('#music-controls')) closePanel(); });
})();
