<script lang="ts">
    export let longName: string;
    export let name: string;
    export let warning: string;
    export let description: string;
    export let imageUrl: string;

    // console.log(imageUrl)
</script>

<div class="card">
    <img src={imageUrl} alt={longName} class="image" />
    <p class="scientific-name">{longName}</p>
    <div class="text-wrapper">{name}</div>

    {#if warning != ""}
        <div class="chip"><div class="div">{warning}</div></div>
    {:else}
        <!-- ¯\_(ツ)_/¯ -->
    {/if}

    <p class="description">
        {description}
    </p>
</div>

<style>
    @import "./card.css";
</style>
