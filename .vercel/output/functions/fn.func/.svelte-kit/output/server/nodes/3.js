import * as server from '../entries/pages/gallery/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.f_07sqHV.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.y1Hu8exT.js"];
export const stylesheets = ["_app/immutable/assets/3.YVGUSnWX.css"];
export const fonts = [];
