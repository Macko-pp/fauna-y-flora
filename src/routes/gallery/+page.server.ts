import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from "./$types";

export const actions = {
    search: async ({ request }) => {
        const dataForm = await request.formData();

        const searchTerms = dataForm?.get("searchTerms") as string;

        const { data, error } = await supabase
            .from("species")
            .select()
            .textSearch("name", searchTerms, {
                type: "websearch",
                config: "english"
            });

        console.log(data);

        return { searchResults: data ?? [] }
    }
};

export const load: PageServerLoad = async () => {
    const { data } = await supabase.from("species").select();
    return {
        species: data ?? [],
        // searchResult
    };
}