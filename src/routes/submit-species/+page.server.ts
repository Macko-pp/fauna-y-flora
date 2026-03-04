import { supabase } from "$lib/supabaseClient";

let filePath: string;

async function uploadFile(file: File, fileName: any) {
    const fileExt = file?.name.toString().split(".").pop();

    fileName = fileName
        ?.toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

    filePath = `${fileName}.${fileExt}`;

    const { data, error } = await supabase.storage.from("images").upload(filePath, file);
    if (error) {
        console.log("Error uploading image");
        console.error(error)
    } else {
        console.log("Succesfully uploaded image");
    }
}

export const actions = {
    default: async ({ request }) => {
        const dataForm = await request.formData();

        const image = dataForm?.get("fileUpload") as File;
        const longName = dataForm?.get("longName");
        const name = dataForm?.get("name");
        const warning = dataForm?.get("warning");
        const description = dataForm?.get("description");

        uploadFile(image, longName);

        const imageUrl = supabase.storage.from("images").getPublicUrl(filePath).data.publicUrl;

        const { data, error } = await supabase
            .from("species")
            .insert([
                {
                    longName: longName,
                    name: name,
                    warning: warning,
                    description: description,
                    imageUrl: imageUrl
                }
            ])
            .select();

        if (error) {
            console.log("Error uploading form");
            console.error(error);
        } else {
            console.log("Succesfully uploaded form");
        }

        console.log(image);
        console.log(longName);
        console.log(name);
        console.log(warning);
        console.log(description);
        console.log(imageUrl);

        // console.table(dataForm);

        return { succsess: true };
    }
};
