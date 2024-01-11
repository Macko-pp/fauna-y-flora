import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("species").select();
    return {
        species: data ?? []
    };
}