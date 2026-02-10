const funnierBtn = document.getElementById('funnierBtn');
const langToggleBtn = document.getElementById('langToggleBtn');
const bugCountEl = document.getElementById('bugCount');
const panel2 = document.getElementById('panel2');
const panel3 = document.getElementById('panel3');

const speech1 = document.getElementById('speech1');
const speech2 = document.getElementById('speech2');
const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');
const sfx1 = document.getElementById('sfx1');
const sfx2 = document.getElementById('sfx2');
const sfx3 = document.getElementById('sfx3');
const arabicLine = document.getElementById('arabicLine');
const englishLine = document.getElementById('englishLine');

const speech1Lines = [
  '"I found one tiny issue... and 27 cousins."',
  '"Good news: tests passed. Bad news: wrong branch."',
  '"I clicked once and got three bugs for free."',
  '"يا جماعة دي مش فيتشر... دي مفاجأة إنتاج!"'
];

const speech2Lines = [
  '"Why is this bug reproducing only on Fridays?!"',
  '"I fixed it locally... production said: nope."',
  '"البيئة عندي تمام... السيرفر بيقول لي لا."',
  '"Who pushed right before lunch? I just want to talk."'
];

const sfxLines = ['BUG!!', 'PANIC!', 'SPLASH!', '404?!', 'RETEST!', 'AYY BUG!'];

const captions = [
  ['Panel 1: Morning Standup', 'Panel 2: Production Ocean', 'Panel 3: The Legend'],
  ['Panel 1: QA Detective Mode', 'Panel 2: Sea of Regressions', 'Panel 3: Historic Bug Moment'],
  ['Panel 1: Calm Before Deploy', 'Panel 2: Tiny Bug, Big Drama', 'Panel 3: Meme Certified']
];

let bugCount = 0;
let arabicFirst = true;

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeItFunnier() {
  speech1.textContent = randomItem(speech1Lines);
  speech2.textContent = randomItem(speech2Lines);

  const capSet = randomItem(captions);
  caption1.textContent = capSet[0];
  caption2.textContent = capSet[1];
  caption3.textContent = capSet[2];

  sfx1.textContent = randomItem(sfxLines);
  sfx2.textContent = randomItem(sfxLines);
  sfx3.textContent = randomItem(sfxLines);
}

function bumpCounter() {
  bugCount += 1;
  bugCountEl.textContent = String(bugCount);
  bugCountEl.classList.remove('bump');
  void bugCountEl.offsetWidth;
  bugCountEl.classList.add('bump');
}

function toggleLanguageMode() {
  arabicFirst = !arabicFirst;

  if (arabicFirst) {
    langToggleBtn.textContent = 'Arabic-first mode';
    arabicLine.className = 'arabic big';
    englishLine.className = 'english small';
  } else {
    langToggleBtn.textContent = 'English-first mode';
    englishLine.className = 'english big';
    arabicLine.className = 'arabic small';
  }
}

function attachCounterHandlers(element) {
  element.addEventListener('click', bumpCounter);
  element.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      bumpCounter();
    }
  });
}

funnierBtn.addEventListener('click', makeItFunnier);
langToggleBtn.addEventListener('click', toggleLanguageMode);
attachCounterHandlers(panel2);
attachCounterHandlers(panel3);
