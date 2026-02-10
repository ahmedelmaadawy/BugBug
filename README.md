# QA Comic: The Legend of Bugs

A funny single-page comic meme built with **vanilla HTML, CSS, and JavaScript**.

## Files

- `index.html`
- `styles.css`
- `script.js`

No framework, no build, no external libraries.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. In **Build and deployment**, choose:
   - **Source:** **GitHub Actions**
4. Push any commit (or run the workflow manually).
5. Wait 1–2 minutes, then open:
   - `https://<your-username>.github.io/<repo-name>/`

## Customize phrases

- Edit comic text in `index.html` for default panel lines and punchline area.
- Edit random joke lines/SFX/captions arrays in `script.js`:
  - `speech1Lines`
  - `speech2Lines`
  - `sfxLines`
  - `captions`

## Required punchline

Arabic (kept exact):

`مرة تيسرت كان بيغرق قعد يقول بج بج بح`

English meaning:

`Once a tester was drowning… he kept saying: bug bug bug.`

## Troubleshooting (if you still see the old site)

1. In **Settings → Pages**, make sure **Source = GitHub Actions** (not "Deploy from branch").
2. Open the latest run in **Actions → Deploy static site to GitHub Pages** and confirm it is green.
3. Hard refresh your browser (`Ctrl+Shift+R` / `Cmd+Shift+R`) or open in an incognito tab.
4. Wait 1–3 minutes after a successful run, then reload.
5. If needed, run the workflow manually from **Actions → Run workflow**.
