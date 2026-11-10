// Builds the web images in public/images from the source photos and screenshots.
// Usage: npm run images
import sharp from "sharp";
import { mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const out = join(root, "public", "images");
mkdirSync(out, { recursive: true });

const gem = (id) => join(root, "images-from-gemini", `Gemini_Generated_Image_${id}.jpg`);
const shots = join(root, "source-shots");
const flyers = join(root, "..", "flyers");

const jobs = [
  // Photos of Cyran
  { src: gem("t1l1y0t1l1y0t1l1"), dst: "cyran-hero.webp", w: 720, h: 900 },
  { src: gem("2dowju2dowju2dow"), dst: "cyran-training.webp", w: 720, h: 900 },
  { src: gem("np1uhxnp1uhxnp1u"), dst: "cyran-about.webp", w: 640, h: 800, extract: { left: 90, top: 0, width: 614, height: 768 } },
  // Project screenshots (16:10)
  { src: join(shots, "cartopousse.png"), dst: "project-cartopousse.webp", w: 960, h: 600, position: "top" },
  { src: join(shots, "fiuhb.png"), dst: "project-fiuhb.webp", w: 960, h: 600, position: "top" },
  { src: join(shots, "demo-resto.png"), dst: "project-demo-resto.webp", w: 960, h: 600, position: "top" },
  { src: join(shots, "demo-hotel.png"), dst: "project-demo-hotel.webp", w: 960, h: 600, position: "top" },
  { src: join(shots, "demo-cars.png"), dst: "project-demo-cars.webp", w: 960, h: 600, position: "top" },
  // Flyer samples (kept whole, 4:5)
  { src: join(flyers, "flyer-restaurants-fr-v2.png"), dst: "flyer-restaurants.webp", w: 640, h: 800 },
  { src: join(flyers, "flyer-beaute-fr.png"), dst: "flyer-beaute.webp", w: 640, h: 800 },
  { src: join(flyers, "flyer-barbier-fr.png"), dst: "flyer-barbier.webp", w: 640, h: 800 },
];

for (const j of jobs) {
  if (!existsSync(j.src)) { console.log("missing:", j.src); continue; }
  let img = sharp(j.src);
  if (j.extract) img = img.extract(j.extract);
  await img.resize(j.w, j.h, { fit: "cover", position: j.position || "centre" }).webp({ quality: 80 }).toFile(join(out, j.dst));
  console.log("ok", j.dst);
}
