import * as server from '../entries/pages/gallery/_longName_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_longName_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/[longName]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.IBpfPqq5.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.y1Hu8exT.js"];
export const stylesheets = ["_app/immutable/assets/4.w7L6YNju.css"];
export const fonts = [];
