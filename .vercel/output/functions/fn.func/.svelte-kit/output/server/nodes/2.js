

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.F9dKFuEw.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.y1Hu8exT.js","_app/immutable/chunks/filters-down-arrow.50CtUluF.js"];
export const stylesheets = ["_app/immutable/assets/2.fg87E57Q.css"];
export const fonts = [];
