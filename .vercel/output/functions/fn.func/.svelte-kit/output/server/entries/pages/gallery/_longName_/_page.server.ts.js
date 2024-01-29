import { s as supabase } from "../../../../chunks/supabaseClient.js";
const load = async (serverLoadEvent) => {
  const { params } = serverLoadEvent;
  const longName = params.longName;
  const { data, error } = await supabase.from("species").select().eq("longName", `${longName}`);
  return {
    species: data ?? []
  };
};
export {
  load
};
