

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.KJ0XHUZh.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.y1Hu8exT.js","_app/immutable/chunks/entry.24H9feJ5.js"];
export const stylesheets = [];
export const fonts = [];
