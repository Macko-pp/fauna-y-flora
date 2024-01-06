<script>
    import plus from "$lib/images/app-bar/plus.png";
    import BIG_down_arrow from "$lib/images/app-bar/BIG-down-arrow.png";
    import magnifiyng_glass from "$lib/images/app-bar/search.png";
    import filters_down_arrow from "$lib/images/app-bar/filters-down-arrow.png";
    import githhub from "$lib/images/app-bar/githhub.png";
    import small_divider from "$lib/images/app-bar/small-divider.png";
    import gear from "$lib/images/app-bar/gear.png";

    let search = "";

    function handleSearch() {
        console.log(search)
    }

</script>

<style>
    @import "./app-bar.css";
</style>

<div class="app-bar">
    <div class="user">
        <img class="PFP" src="https://placehold.co/40?text=PFP" alt="Profile" />
        <div class="text-wrapper-2">User Name</div>
        <div class="text-wrapper-3">username@example.com</div>
    </div>
    <div class="search-bar">
        <div class="overlap">
            <button on:click={handleSearch} class="search-wrapper">
                <img class="search" src={magnifiyng_glass} alt="Search Icon" />
            </button>
            <input class="search-field" type="text" bind:value={search}>
            <div class="div">
                <img
                class="filters-down-arrow"
                src={filters_down_arrow}
                alt="Filters Down Arrow Icon"
                />
                <div class="text-wrapper">Filters</div>
            </div>
        </div>
    </div>
    <div class="links-button">
        <div class="links">
            <div class="overlap-2">
                <div class="rectangle"></div>
                <div class="rectangle-2"></div>
                <img class="githhub" src={githhub} alt="GitHub Icon" />
                <img class="small-divider" src={small_divider} alt="Small Divider" />
                <img class="gear" src={gear} alt="Gear Icon" />
            </div>
        </div>
        <div class="BIG-BUTTON">
            <a class="add" href="https://example.com">
                <img class="plus" src={plus} alt="Plus Icon" />
            </a>
            <div class="overlap-group">
                <img class="BIG-down-arrow" src={BIG_down_arrow} alt="Big Down Arrow Icon" />
            </div>
        </div>
    </div>
</div>
