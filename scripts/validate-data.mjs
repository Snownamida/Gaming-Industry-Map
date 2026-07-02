/**
 * Validation du jeu de données du graphe (npm run check:data).
 * Vérifie : ids uniques, liens pointant vers des nœuds existants,
 * catégories connues, champs requis. Échoue avec un code ≠ 0 sinon.
 */
import { gameData } from "../src/data/gameData.js";

const errors = [];
const ids = new Set();

for (const n of gameData.nodes) {
  if (!n.id || !n.name || !n.category || typeof n.val !== "number") {
    errors.push(`Nœud incomplet : ${JSON.stringify(n)}`);
  }
  if (ids.has(n.id)) errors.push(`Id dupliqué : ${n.id}`);
  ids.add(n.id);
  if (!(n.category in gameData.categories)) {
    errors.push(`Catégorie inconnue « ${n.category} » sur ${n.id}`);
  }
}

for (const l of gameData.links) {
  if (!ids.has(l.source)) errors.push(`Lien cassé : source « ${l.source} » inexistante`);
  if (!ids.has(l.target)) errors.push(`Lien cassé : target « ${l.target} » inexistante (depuis ${l.source})`);
  if (!l.relation) errors.push(`Relation manquante : ${l.source} > ${l.target}`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} erreur(s) :`);
  for (const e of errors) console.error("  -", e);
  process.exit(1);
}
console.log(`✓ données valides — ${gameData.nodes.length} nœuds, ${gameData.links.length} liens`);
