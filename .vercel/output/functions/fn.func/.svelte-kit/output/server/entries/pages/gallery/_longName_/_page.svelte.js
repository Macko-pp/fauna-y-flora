import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap');@import url('https://fonts.googleapis.com/css2?family=Jockey+One:wght@400&display=swap');@import url('https://fonts.googleapis.com/css2?family=Jomhuria:wght@400&display=swap');.macbook-air.svelte-ffp440.svelte-ffp440{background-color:#ffffff;display:flex;flex-direction:row;justify-content:center;width:100%}.macbook-air.svelte-ffp440 .div.svelte-ffp440{background-color:#ffffff;width:1072px;height:832px;position:relative}.macbook-air.svelte-ffp440 .image.svelte-ffp440{position:absolute;width:498px;height:635px;top:70px;left:69px;background-color:#f4f4f4;border-radius:74px}.macbook-air.svelte-ffp440 .info.svelte-ffp440{display:inline-flex;flex-direction:column;height:692px;align-items:flex-start;gap:33px;position:absolute;top:70px;left:636px}.macbook-air.svelte-ffp440 .long-name.svelte-ffp440{font-family:"Josefin Sans", Helvetica;font-weight:400;font-size:23px;position:relative;top:29px;text-align:left;font-weight:500;letter-spacing:-0.1px;color:rgb(176, 176, 176)}.macbook-air.svelte-ffp440 .name.svelte-ffp440{position:relative;top:-10px;width:403px;height:52px;font-family:"Jomhuria", Helvetica;font-weight:400;color:#000000;font-size:96px;letter-spacing:0;line-height:normal;white-space:nowrap}.macbook-air.svelte-ffp440 .chip.svelte-ffp440{position:relative;width:209px;height:32px;background-color:#ffef9d;border-radius:30px;overflow:hidden;border:1px solid;border-color:#ffd600}.macbook-air.svelte-ffp440 .warning.svelte-ffp440{position:absolute;width:111px;height:16px;top:7px;left:48px;font-family:"Jockey One", Helvetica;font-weight:400;color:#cdac00;font-size:15px;text-align:center;letter-spacing:0;line-height:normal;white-space:nowrap}.macbook-air.svelte-ffp440 .description.svelte-ffp440{position:relative;top:-20px;width:394px;height:360px;font-family:"Josefin Sans", Helvetica;font-weight:400;color:#000000;font-size:15px;letter-spacing:0.61px;line-height:normal}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const species = data.species[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="macbook-air svelte-ffp440"><div class="div svelte-ffp440"><img${add_attribute("src", species.imageUrl, 0)} class="image svelte-ffp440" alt="¯\\_(ツ)_/¯"> <div class="info svelte-ffp440"><div class="long-name svelte-ffp440">${escape(species.longName)}</div> <div class="name svelte-ffp440">${escape(species.name)}</div> ${species.warning != "" ? `<div class="chip svelte-ffp440"><div class="warning svelte-ffp440">${escape(species.warning)}</div></div>` : ``} <p class="description svelte-ffp440">${escape(species.description)}</p></div></div> </div>`;
});
export {
  Page as default
};
