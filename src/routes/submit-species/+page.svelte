<script lang="ts">
    import Plus from "$lib/images/app-bar/plus.svg";

    let input: any;
    let image: any;
    let showImage = false;

    function onChange() {
        const file = input.files[0];

        if (file) {
            showImage = true;

            const reader = new FileReader();
            reader.addEventListener("load", function () {
                image.setAttribute("src", reader.result);
            });
            reader.readAsDataURL(file);

            return;
        }

        showImage = false;
    }
</script>

<svelte:head>
    <title>Submit Species</title>
</svelte:head>

<div class="box">
    <div class="input-areas">
        <form method="post" enctype="multipart/form-data">
            <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                accept=".png, .jpg, .jpeg, .tiff, .HEIC"
                style="display: none;"
                bind:this={input}
                on:change={onChange}
            />
            {#if showImage}
                <label for="fileUpload" class="image-upload">
                    <img class="image-upload" bind:this={image} src="" alt="Preview" />
                </label>
            {:else}
                <label for="fileUpload" class="image-upload">
                    <img class="plus" src={Plus} alt="plus" />
                </label>
            {/if}

            <div class="inputs">
                <div class="input-group">
                    <label for=".longName" class="text-wrapper">Scientific Name</label>
                    <input class="longName" type="text" name="longName" />
                </div>

                <div class="input-group">
                    <label for=".name" class="text-wrapper">Common Name</label>
                    <input class="name" type="text" name="name" />
                </div>

                <div class="input-group">
                    <label for=".warning" class="text-wrapper">Warning</label>
                    <input class="warning" type="text" name="warning" />
                </div>

                <div class="input-group">
                    <label for=".description" class="text-wrapper">Description</label>
                    <textarea class="description" name="description" />
                </div>
                <button type="submit" class="submit">Submit</button>
            </div>
        </form>
    </div>
</div>

<style>
    @import "./+styles.css";
</style>
