const pptxgen = require('pptxgenjs');
const JSZip = require('jszip');
const fs = require('fs');

const OUT = process.argv[2];
const C = { bg: '0B1020', surf: '131B31', surf2: '1A2540', text: 'F3F6FF', mute: 'B0BDD8', lime: 'BDDB00', mag: 'DE0073', amber: 'FFBE78', badge: 'F7F8FC', line: '3A4A75' };
const F = 'Calibri';
const logo = n => `logos/${n}.svg.png`;

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.title = 'LiteLLM AI Gateway';

const providers = [
  { id: 'azure', name: 'Microsoft Azure', logo: logo('azure'), models: ['gpt-router', 'gpt-5.6-luna', 'gpt-6-luna', 'gpt-6-sol', 'gpt-6.1-sol'], kind: 'Router + direct models' },
  { id: 'bedrock', name: 'AWS Bedrock', logo: logo('aws'), models: ['claude-router', 'claude-haiku-4.5', 'claude-sonnet-4.6-bedrock', 'claude-haiku-4.5-bedrock', 'claude-sonnet-5-bedrock', 'claude-sonnet-5.5-bedrock'], kind: 'Router + direct models' },
  { id: 'mistral', name: 'Mistral', logo: logo('mistral'), models: ['mistral-zai-glm-5-3'], kind: 'Specialised models' },
];

function base(s, title, notes) {
  s.background = { color: C.bg };
  s.addText(title, { objectName: 'Title', x: 0.5, y: 0.25, w: 12.3, h: 0.6, fontFace: F, fontSize: 26, bold: true, color: C.text, margin: 0 });
  s.addNotes(notes);
}

function litellm(s, g) {
  s.addShape(pptx.ShapeType.roundRect, { objectName: 'LiteLLM', x: g.x, y: g.y, w: g.w, h: g.h, rectRadius: 0.12, fill: { color: C.surf2 }, line: { color: C.lime, width: 2.5 } });
  s.addText([
    { text: 'LiteLLM', options: { fontSize: g.big, bold: true, color: C.text, breakLine: true } },
    { text: 'AI Gateway', options: { fontSize: g.small, color: C.lime } },
  ], { objectName: 'LiteLLM text', x: g.x, y: g.y, w: g.w, h: g.h, align: 'center', valign: 'middle', fontFace: F, margin: 0 });
}

function link(s, x1, y1, x2, y2) {
  s.addShape(pptx.ShapeType.line, { objectName: 'Link', x: x1, y: y1, w: x2 - x1, h: y2 - y1, line: { color: C.lime, width: 2, dashType: 'dash' } });
}

function panel(s, g) {
  s.addShape(pptx.ShapeType.roundRect, { objectName: 'Platforms panel', x: g.x, y: g.y, w: g.w, h: g.h, rectRadius: 0.1, fill: { color: C.surf }, line: { color: C.line, width: 1.25 } });
  s.addText('Cloud and model platforms', { objectName: 'Platforms label', x: g.x + 0.3, y: g.y + 0.12, w: g.w - 0.6, h: 0.4, fontFace: F, fontSize: 14, bold: true, color: C.amber, charSpacing: 1, margin: 0 });
}

function card(s, p, g) {
  s.addShape(pptx.ShapeType.roundRect, { objectName: `Card ${p.id}`, x: g.x, y: g.y, w: g.w, h: g.h, rectRadius: 0.1, fill: { color: C.surf2 }, line: { color: C.line, width: 1 } });
  s.addShape(pptx.ShapeType.roundRect, { objectName: `Badge ${p.id}`, x: g.x + 0.15, y: g.y + 0.15, w: 0.7, h: 0.7, rectRadius: 0.1, fill: { color: C.badge }, line: { color: C.badge, width: 0.5 } });
  s.addImage({ objectName: `Logo ${p.id}`, path: p.logo, x: g.x + 0.25, y: g.y + 0.25, w: 0.5, h: 0.5 });
  s.addText(p.name, { objectName: `Name ${p.id}`, x: g.x + 1.0, y: g.y + 0.15, w: g.w - 1.1, h: 0.7, fontFace: F, fontSize: g.nameSize, bold: true, color: C.text, valign: 'middle', margin: 0 });
}

// ---------- Slide 1: overview ----------
const L1 = { x: 2.2, y: 2.55, w: 4.4, h: 2.4, big: 40, small: 18 };
const P1 = { x: 7.9, y: 1.5, w: 4.9, h: 4.5 };
const cards1 = providers.map((p, i) => ({ x: 8.2, y: 2.15 + i * 1.2, w: 4.3, h: 1.0, nameSize: 18 }));
{
  const s = pptx.addSlide();
  base(s, 'One entry point for AI', 'Slide 1: Overview. Users and tools connect to LiteLLM. Behind it, we expose approved models from Azure, AWS Bedrock and Mistral.');
  litellm(s, L1);
  link(s, L1.x + L1.w, L1.y + L1.h / 2, P1.x, L1.y + L1.h / 2);
  panel(s, P1);
  providers.forEach((p, i) => card(s, p, cards1[i]));
  s.addText('Approved models only, exposed through one gateway', { objectName: 'Footnote', x: 0.5, y: 6.9, w: 12.3, h: 0.35, fontFace: F, fontSize: 13, color: C.mute, margin: 0 });
}

// ---------- Slide 2: zoom ----------
{
  const s = pptx.addSlide();
  base(s, 'Zoom in: behind the gateway', 'Slide 2: Platform Engineer responsibilities and approved models per platform. Morph zooms into the platforms panel.');
  const L2 = { x: 0.5, y: 1.1, w: 3.4, h: 1.3, big: 28, small: 14 };
  litellm(s, L2);
  link(s, L2.x + L2.w, L2.y + L2.h / 2, 4.2, L2.y + L2.h / 2);
  const P2 = { x: 4.2, y: 1.1, w: 8.6, h: 5.5 };
  panel(s, P2);
  const xs = [4.5, 7.2, 9.9];
  providers.forEach((p, i) => {
    const g = { x: xs[i], y: 1.75, w: 2.55, h: 4.6, nameSize: 15 };
    card(s, p, g);
    s.addText(p.kind, { objectName: `Kind ${p.id}`, x: g.x + 0.2, y: g.y + 0.85, w: g.w - 0.4, h: 0.35, fontFace: F, fontSize: 11, bold: true, color: C.lime, margin: 0 });
    s.addText(p.models.map(m => ({ text: m, options: { bullet: false, breakLine: true } })), { objectName: `Models ${p.id}`, x: g.x + 0.2, y: g.y + 1.25, w: g.w - 0.4, h: 3.15, fontFace: 'Consolas', fontSize: 10, color: C.text, valign: 'top', paraSpaceAfter: 6, margin: 0 });
  });
  // Platform Engineer tasks
  s.addShape(pptx.ShapeType.roundRect, { objectName: 'Tasks panel', x: 0.5, y: 2.65, w: 3.4, h: 3.95, rectRadius: 0.1, fill: { color: C.surf }, line: { color: C.mag, width: 1.5 } });
  s.addText('What I do as Platform Engineer', { objectName: 'Tasks title', x: 0.7, y: 2.75, w: 3.0, h: 0.6, fontFace: F, fontSize: 15, bold: true, color: C.mag, valign: 'middle', margin: 0 });
  const tasks = ['Request and approve model access', 'Request and monitor quota', 'Configure aliases and routing', 'Set PII guardrails', 'Track usage and cost'];
  s.addText(tasks.map((t, i) => ({ text: '→  ' + t, options: { bullet: false, indentLevel: 0, breakLine: i < tasks.length - 1 } })), { objectName: 'Tasks list', x: 0.7, y: 3.4, w: 3.0, h: 3.1, fontFace: F, fontSize: 14, color: C.text, valign: 'top', paraSpaceAfter: 9, margin: 0 });
  s.addText('Model snapshot October 2026. All approved models. Verify aliases before presenting.', { objectName: 'Footnote', x: 0.5, y: 6.9, w: 12.3, h: 0.35, fontFace: F, fontSize: 13, color: C.mute, margin: 0 });
}

// ---------- Slide 3: back to overview + observability ----------
{
  const s = pptx.addSlide();
  base(s, 'One gateway, full visibility', 'Slide 3: Back to overview. Logs and Observability appears under LiteLLM for unified monitoring across all platforms.');
  litellm(s, L1);
  link(s, L1.x + L1.w, L1.y + L1.h / 2, P1.x, L1.y + L1.h / 2);
  panel(s, P1);
  providers.forEach((p, i) => card(s, p, cards1[i]));
  s.addShape(pptx.ShapeType.line, { objectName: 'Observability link', x: L1.x + L1.w / 2, y: L1.y + L1.h, w: 0, h: 0.45, line: { color: C.amber, width: 2, dashType: 'dash' } });
  s.addShape(pptx.ShapeType.roundRect, { objectName: 'Observability', x: L1.x, y: 5.4, w: L1.w, h: 1.1, rectRadius: 0.1, fill: { color: C.surf }, line: { color: C.amber, width: 2 } });
  s.addText([
    { text: 'Logs and Observability', options: { fontSize: 20, bold: true, color: C.text, breakLine: true } },
    { text: 'Monitoring, cost and usage', options: { fontSize: 13, color: C.amber } },
  ], { objectName: 'Observability text', x: L1.x, y: 5.4, w: L1.w, h: 1.1, align: 'center', valign: 'middle', fontFace: F, margin: 0 });
  s.addText('Approved models only, exposed through one gateway', { objectName: 'Footnote', x: 0.5, y: 6.9, w: 12.3, h: 0.35, fontFace: F, fontSize: 13, color: C.mute, margin: 0 });
}

const TR = '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice xmlns:p159="http://schemas.microsoft.com/office/powerpoint/2015/09/main" Requires="p159"><p:transition xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" spd="slow" p14:dur="1500"><p159:morph option="byObject"/></p:transition></mc:Choice><mc:Fallback><p:transition spd="slow"><p:fade/></p:transition></mc:Fallback></mc:AlternateContent>';

(async () => {
  const buf = await pptx.write({ outputType: 'nodebuffer' });
  const zip = await JSZip.loadAsync(buf);
  for (const n of [2, 3]) {
    const f = `ppt/slides/slide${n}.xml`;
    let x = await zip.file(f).async('string');
    if (!x.includes('</p:clrMapOvr>')) throw new Error('no clrMapOvr in ' + f);
    x = x.replace('</p:clrMapOvr>', '</p:clrMapOvr>' + TR);
    zip.file(f, x);
  }
  fs.writeFileSync(OUT, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
  console.log('written', OUT);
})();
