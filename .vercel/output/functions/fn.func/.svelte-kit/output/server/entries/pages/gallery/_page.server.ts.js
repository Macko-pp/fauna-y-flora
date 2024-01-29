import { s as supabase } from "../../../chunks/supabaseClient.js";
const actions = {
  search: async ({ request }) => {
    const dataForm = await request.formData();
    const searchTerms = dataForm?.get("searchTerms");
    const { data, error } = await supabase.from("species").select().textSearch("name", searchTerms, {
      type: "websearch",
      config: "english"
    });
    console.log(data);
    return { searchResults: data ?? [] };
  }
};
const load = async () => {
  const { data } = await supabase.from("species").select();
  return {
    species: data ?? []
    // searchResult
  };
};
export {
  actions,
  load
};
