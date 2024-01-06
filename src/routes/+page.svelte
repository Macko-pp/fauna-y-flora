<script>
    import Hero from './hero.svelte'

    import blob3 from "$lib/images/main-page/blob-3.svg"
    import rectangle24 from "$lib/images/main-page/rectangle-24.png"
    import rectangle26 from "$lib/images/main-page/rectangle-26.png"
    import rectangle25 from "$lib/images/main-page/rectangle-25.png"
    import stockGroupPicture from "$lib/images/main-page/stock-group-picture.png"
    import AIPlantPaper from "$lib/images/main-page/ai-plant-paper.png"
</script>

<style>
    @import "./+styles.css";
</style>

<Hero />

<div class="home-page">
    <div class="text-section">
        <p class="text-wrapper">
            This tool works kind of like an image uploading service, like Pinterest or Instagram.
            You take a picture of a plant or animal in the school and then an AI will recognize the
            species and provide its scientific name and description, you will be able to edit the
            description and title in order to make it more accurate. If someone has already uploaded
            a picture of that same species, you wont have to provide a description or a title and
            your picture will be grouped with the rest of the pictures of that same species. In
            addition to the name and description, the AI will also provide warnings if the species
            is dangerous, or alerts if the species is invasive.
        </p>
        <div class="div">How it works</div>
        <div class="photo-group">
            <div class="overlap-group">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="blob" src={blob3} />
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="rectangle" src={rectangle24} />
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="img" src={rectangle26} />
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="rectangle-2" src={rectangle25} />
            </div>
        </div>
    </div>
    <div class="text-section-2">
        <div class="picture">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="stock-group-picture" src={stockGroupPicture} />
        </div>
        <p class="we-are-a-dedicated">
            We are a dedicated group of students from the &#34;Flora y Fauna&#34; Corazón Verde
            campaign, united by our passion for the environment and love for the natural world.
            Committed to making a positive impact, we have come together to create a comprehensive
            catalog of the flora and fauna in our school. Through our collective efforts, we aim to
            raise environmental awareness, promote biodiversity conservation, and inspire others to
            take action. With our diverse backgrounds and shared commitment, we strive to be
            stewards of nature, advocating for a greener and sustainable future. Together, as a
            group of enthusiastic students, we are determined to make a difference and preserve the
            beauty of our local ecosystem.
        </p>
        <div class="text-wrapper-2">Who are we?</div>
    </div>
    <div class="text-section-3">
        <p class="at-the-flora-y-fauna">
            At the &#34;Flora y Fauna&#34; Corazón Verde campaign website, we, a passionate group of
            students, have collaborated to create a remarkable catalog of the flora and fauna within
            our school. Our website is a go-to resource, offering extensive descriptions, scientific
            names, and warnings for each species. Our goal is to promote environmental awareness,
            expand knowledge about our local ecosystem, and instill a profound appreciation for the
            diverse life around us. Join us in our mission to protect and preserve the precious
            flora and fauna within our school grounds! Together, we can make a difference.
        </p>
        <div class="text-wrapper-3">What do we do?</div>
        <div class="AI-plant-paper-wrapper">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="AI-plant-paper" src={AIPlantPaper} />
        </div>
    </div>
</div>
