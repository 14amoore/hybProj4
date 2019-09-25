let synth = new Tone.Synth().toMaster();

window.onload = function firstTone() {
  synth.triggerAttackRelease('C4', '8n');
};

document.querySelector('#play').addEventListener('click', () => Tone.start());

document.querySelector('#tone').onmouseover = function() {
  synth.triggerAttackRelease('B4', '8n', 0);
};
