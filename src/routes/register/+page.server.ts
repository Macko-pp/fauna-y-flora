import { supabase } from "$lib/supabaseClient";
import { redirect, type Actions } from "@sveltejs/kit";

export const load = async () => {
    const session = await supabase.auth.getSession();

    return { session };
};

export const actions: Actions = {
    login: async ({ url }) => {
        const { data, error } = await supabase.auth.signInWithOAuth({ provider: "google" });

        console.log(data);
        throw redirect(303, data.url);
    }
};
