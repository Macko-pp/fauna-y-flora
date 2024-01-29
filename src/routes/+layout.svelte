<script>
    import AppBar from "./app-bar.svelte"
</script>

<AppBar />

<div class="center">
    <slot />
</div>

<style>
    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 90px;
    }
</style>