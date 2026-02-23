# Getiva Solutions — Git & Live Website

## 1. Create a new repo on GitHub and push

1. **Create the repo (no README, no .gitignore):**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `getivasolutions` (or any name you like)
   - Set to **Public**
   - Leave "Add a README" and "Add .gitignore" **unchecked**
   - Click **Create repository**

2. **Connect this folder and push** (run in PowerShell from `c:\Getivasolutions`):

   ```powershell
   cd c:\Getivasolutions

   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the repo name (e.g. `getivasolutions`).

   If GitHub asks for login, use a **Personal Access Token** as the password (Settings → Developer settings → Personal access tokens).

---

## 2. Turn on the live website (GitHub Pages)

1. In your repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source:** select **GitHub Actions**.
3. Save. No need to choose a branch or folder — the workflow uses the `site` folder.

After the first push, the **Actions** tab will run the "Deploy to GitHub Pages" workflow. When it finishes (about 1–2 minutes), your site will be live at:

- **https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/**

Example: if the repo is `getivasolutions` and your username is `johndoe`, the URL is:

- **https://johndoe.github.io/getivasolutions/**

You can add this URL in the repo **About** section (gear icon next to "About") so it appears on the repo page.

---

## 3. Later: update the live site

Whenever you push to `main`:

```powershell
git add -A
git commit -m "Your message"
git push
```

The GitHub Action will redeploy the site automatically; the live URL stays the same.
