import { s as supabase } from "../../../chunks/supabaseClient.js";
let filePath;
async function uploadFile(file) {
  const fileExt = file?.name.toString().split(".").pop();
  filePath = `${Math.random()}.${fileExt}`;
  const { data, error } = await supabase.storage.from("images").upload(filePath, file);
  if (error) {
    console.log("Error uploading image");
  } else {
    console.log("Succesfully uploaded image");
  }
}
const actions = {
  default: async ({ request }) => {
    const dataForm = await request.formData();
    const image = dataForm?.get("fileUpload");
    const longName = dataForm?.get("longName");
    const name = dataForm?.get("name");
    const warning = dataForm?.get("warning");
    const description = dataForm?.get("description");
    uploadFile(image);
    const imageUrl = supabase.storage.from("images").getPublicUrl(filePath).data.publicUrl;
    await supabase.from("species").insert([
      {
        longName,
        name,
        warning,
        description,
        imageUrl
      }
    ]).select();
    console.log(image);
    console.log(longName);
    console.log(name);
    console.log(warning);
    console.log(description);
    console.log(imageUrl);
    return { succsess: true };
  }
};
export {
  actions
};
