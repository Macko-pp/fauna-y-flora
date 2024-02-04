<script>
    export let data;

    const species = data.species[0];
</script>

<svelte:head>
    <title>{species.name}</title>
</svelte:head>

<div class="macbook-air">
    <div class="div">
        <img src={species.imageUrl} class="image" alt="¯\_(ツ)_/¯">
        <div class="info">
            <div class="long-name">{species.longName}</div>
            <div class="name">{species.name}</div>

            {#if species.warning != ""}
                <div class="chip"><div class="warning">{species.warning}</div></div>
            {/if}

            <p class="description">
                {species.description}
            </p>

        </div>
    </div>
</div>

<style>
    @import "./+styles.css";
</style>
