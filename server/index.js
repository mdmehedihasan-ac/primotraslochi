import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3001'] }));
app.use(express.json());

/* ── Lead capture endpoint ───────────────────────────────────── */
app.post('/api/lead', (req, res) => {
  const { type = 'generic', name = '', message = '' } = req.body ?? {};
  const ts = new Date().toISOString();
  console.log(`[LEAD] ${ts} | ${type} | ${name} | ${message}`);
  // TODO: forward via email / webhook when ready
  res.json({ ok: true });
});

/* ── Production: serve React build ──────────────────────────── */
if (process.env.NODE_ENV === 'production') {
  const dist = path.join(__dirname, '../client/dist');
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.listen(PORT, () =>
  console.log(`\n🚚 Primo Traslochi server → http://localhost:${PORT}\n`)
);
