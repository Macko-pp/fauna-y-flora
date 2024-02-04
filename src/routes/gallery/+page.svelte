<script>
    import Card from "./card.svelte";

    export let data;
    export let form;
</script>

<svelte:head>
    <title>Species Gallery</title>
</svelte:head>

<div class="frame">
    {#if form?.searchResults.length == 0 || form?.searchResults == undefined || form?.searchResults == null}
        {#if data.species.length == 0}
            <h1 class="title">No species Submitted yet ¯\_(ツ)_/¯</h1>
        {:else}
            {#each data.species as species}
                <Card
                    longName={species.longName}
                    name={species.name}
                    warning={species.warning}
                    description={species.description}
                    imageUrl={species.imageUrl}
                />
            {/each}
        {/if}
    {:else}
        {#each form?.searchResults as species}
            <Card
                longName={species.longName}
                name={species.name}
                warning={species.warning}
                description={species.description}
                imageUrl={species.imageUrl}
            />
        {/each}
    {/if}
</div>

<style>
    @import "./+styles.css";
</style>
