import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Jockey+One:wght@400&display=swap");.card.svelte-je0zx3.svelte-je0zx3{display:inline-flex;flex-direction:column;align-items:flex-start;gap:8px;padding:18px 16px;position:relative;background-color:#ffffff;border-radius:20px;overflow:hidden;border:4px solid;border-color:#f4f4f4;text-decoration:none}.card.svelte-je0zx3 .image.svelte-je0zx3{position:relative;margin-top:-25px;margin-bottom:-25px;left:25px;background-color:#d9d9d9;border-radius:13px;transform:rotate(90deg)}.card.svelte-je0zx3 .scientific-name.svelte-je0zx3{position:relative;width:233px;height:12px;font-family:"Josefin Sans", Helvetica;font-weight:400;color:#bfbfbf;font-size:12px;letter-spacing:0;line-height:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card.svelte-je0zx3 .text-wrapper.svelte-je0zx3{position:relative;width:270px;height:37px;font-family:"Josefin Sans", Helvetica;font-weight:700;color:#646464;font-size:24px;letter-spacing:0;line-height:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card.svelte-je0zx3 .chip.svelte-je0zx3{position:relative;width:80px;height:20px;background-color:#ffef9d;border-radius:30px;overflow:hidden;border:1px solid;border-color:#ffd600}.card.svelte-je0zx3 .div.svelte-je0zx3{position:absolute;width:40px;height:14px;top:2px;left:20px;font-family:"Jockey One", Helvetica;font-weight:400;color:#cdac00;font-size:10px;text-align:center;letter-spacing:0;line-height:normal}.card.svelte-je0zx3 .description.svelte-je0zx3{position:relative;width:202px;height:60px;font-family:"Josefin Sans", Helvetica;font-weight:400;color:#909090;font-size:12px;letter-spacing:0;line-height:normal;--max-lines:6;position:relative;max-height:calc(14.4px * var(--max-lines));overflow:hidden}.card.svelte-je0zx3 .description.svelte-je0zx3::before{position:absolute;content:"...";bottom:0;right:0}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { longName } = $$props;
  let { name } = $$props;
  let { warning } = $$props;
  let { description } = $$props;
  let { imageUrl } = $$props;
  const improvedUrl = `https://media.assets.so/?url=${imageUrl}&w=220&h=270&f=webp&fit=contain`;
  const cardUrl = `/gallery/${encodeURIComponent(longName)}`;
  if ($$props.longName === void 0 && $$bindings.longName && longName !== void 0)
    $$bindings.longName(longName);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.warning === void 0 && $$bindings.warning && warning !== void 0)
    $$bindings.warning(warning);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  $$result.css.add(css$1);
  return `<a class="card svelte-je0zx3"${add_attribute("href", cardUrl, 0)}><img${add_attribute("src", improvedUrl, 0)}${add_attribute("alt", longName, 0)} class="image svelte-je0zx3"> <p class="scientific-name svelte-je0zx3">${escape(longName)}</p> <div class="text-wrapper svelte-je0zx3">${escape(name)}</div> ${warning != "" ? `<div class="chip svelte-je0zx3"><div class="div svelte-je0zx3">${escape(warning)}</div></div>` : ``} <p class="description svelte-je0zx3">${escape(description)}</p> </a>`;
});
const css = {
  code: ".frame.svelte-1qihpy8{display:flex;flex-wrap:wrap;width:1280px;gap:8px 8px;padding:0px 23px 22px;align-items:flex-start;position:relative;justify-content:center}.title.svelte-1qihpy8{font-family:Helvetica, Arial, sans-serif;font-size:32px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;text-align:center;color:#333}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="frame svelte-1qihpy8">${form?.searchResults.length == 0 || form?.searchResults == void 0 || form?.searchResults == null ? `${data.species.length == 0 ? `<h1 class="title svelte-1qihpy8" data-svelte-h="svelte-18s0jvh">No species Submitted yet ¯\\_(ツ)_/¯</h1>` : `${each(data.species, (species) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        longName: species.longName,
        name: species.name,
        warning: species.warning,
        description: species.description,
        imageUrl: species.imageUrl
      },
      {},
      {}
    )}`;
  })}`}` : `${each(form?.searchResults, (species) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        longName: species.longName,
        name: species.name,
        warning: species.warning,
        description: species.description,
        imageUrl: species.imageUrl
      },
      {},
      {}
    )}`;
  })}`} </div>`;
});
export {
  Page as default
};
