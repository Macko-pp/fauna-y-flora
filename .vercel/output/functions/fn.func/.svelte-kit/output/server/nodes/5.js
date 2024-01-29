import * as server from '../entries/pages/submit-species/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/submit-species/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/submit-species/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.7iDmWHlz.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.y1Hu8exT.js","_app/immutable/chunks/plus.gzyo0dar.js"];
export const stylesheets = ["_app/immutable/assets/5.22jRpBNv.css"];
export const fonts = [];
