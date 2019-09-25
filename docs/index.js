let synth = new Tone.Synth().toMaster();
window.onload = function firstTone() {
  synth.triggerAttackRelease('C4', '8n');
};

document.querySelector('#play').addEventListener('click', () => Tone.start());

document.querySelector('#c').onmouseover = function() {
  synth.triggerAttackRelease('C3', '8n');
};
