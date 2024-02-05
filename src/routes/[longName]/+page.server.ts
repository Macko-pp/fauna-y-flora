import { supabase } from "$lib/supabaseClient";

export const load = async (serverLoadEvent) => {
    const { params } = serverLoadEvent;

    const longName = params.longName;

    const { data, error } = await supabase
        .from('species')
        .select()
        .eq('longName', `${longName}`)

    return {
        species: data ?? []
    };
}