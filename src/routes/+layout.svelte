<script>
    import AppBar from "./app-bar.svelte"

    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";

    injectSpeedInsights();
    inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <title>Fauna & Flora</title>
</svelte:head>

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