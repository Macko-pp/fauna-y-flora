<script lang="ts">
    export let longName: string;
    export let name: string;
    export let warning: string;
    export let description: string;
</script>

<div class="card">
    <img src="https://placehold.co/270x220?text={name.replace(/ /g, "+")}" alt="species" class="image">
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