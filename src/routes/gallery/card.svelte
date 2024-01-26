<script lang="ts">
    export let longName: string;
    export let name: string;
    export let warning: string;
    export let description: string;
    export let imageUrl: string;

    const improvedUrl = `https://media.assets.so/?url=${imageUrl}&w=220&h=270&f=webp&fit=contain`

    const cardUrl = `/gallery/${encodeURIComponent(longName)}`
</script>

<a class="card" href={cardUrl}>
    <img src={improvedUrl} alt={longName} class="image" />
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
</a>

<style>
    @import "./card.css";
</style>
