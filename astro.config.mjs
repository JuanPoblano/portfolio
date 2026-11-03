import { defineConfig } from 'astro/config';

// GitHub supplies GITHUB_REPOSITORY automatically in Actions.
// Local development uses /; Pages uses /repository/ (or / for a profile site).
const repository = process.env.GITHUB_REPOSITORY;
const [owner, name] = (repository ?? 'JuanPoblano/portfolio').split('/');
const profileSite = name.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const site = process.env.SITE_URL ?? `https://${owner.toLowerCase()}.github.io`;
const base = process.env.BASE_PATH ?? (repository && !profileSite ? `/${name}/` : '/');

export default defineConfig({ site, base, output: 'static' });
