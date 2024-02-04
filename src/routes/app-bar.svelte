<script>
    import plus from "$lib/images/app-bar/plus.svg";
    import BIG_down_arrow from "$lib/images/app-bar/big-down-arrow.svg";
    import magnifiyng_glass from "$lib/images/app-bar/search.svg";
    import filters_down_arrow from "$lib/images/app-bar/filters-down-arrow.svg";
    import githhub from "$lib/images/app-bar/githhub.svg";
    import small_divider from "$lib/images/app-bar/small-divider.svg";
    import home from "$lib/images/app-bar/home.svg";
    import logo from "$lib/images/app-bar/flora-y-fauna-40.svg";
</script>

<div class="app-bar">
    <a href="/" class="user">
        <img class="PFP" src={logo} alt="Logo" />
        <div class="text-wrapper-2">Flora & Fauna</div>
        <div class="text-wrapper-3">Made by Max Konietzko</div>
    </a>

    <div class="search-bar">
        <div class="overlap">

            <form method="POST" action="gallery/?/search">
                <label for="searchTerms">
                    <button type="submit" class="search-wrapper">
                        <img class="search" src={magnifiyng_glass} alt="Search Icon" />
                    </button>
                </label>
                <input class="search-field" type="text" formaction="?/search" name="searchTerms" />
            </form>

            <!-- <div class="div">
                <img
                    class="filters-down-arrow"
                    src={filters_down_arrow}
                    alt="Filters Down Arrow Icon"
                />
                <div class="text-wrapper">Filters</div>
            </div> -->
        </div>
    </div>
    <div class="links-button">
        <div class="links">
            <div class="overlap-2">
                <a href="https://github.com/Macko-pp/flora-y-fauna" class="rectangle">
                    <img class="githhub" src={githhub} alt="GitHub Icon" />
                </a>

                <img class="small-divider" src={small_divider} alt="Small Divider" />

                <a href="/" class="rectangle-2">
                    <img class="home" src={home} alt="Home Icon" />
                </a>
            </div>
        </div>
        <div class="BIG-BUTTON">
            <a class="add" href="/submit-species">
                <img class="plus" src={plus} alt="Plus Icon" />
            </a>
            <div class="overlap-group">
                <img class="BIG-down-arrow" src={BIG_down_arrow} alt="Big Down Arrow Icon" />
            </div>
        </div>
    </div>
</div>

<style>
    @import "./app-bar.css";
</style>
