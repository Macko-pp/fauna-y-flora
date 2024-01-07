<script>
    import Card from "./card.svelte";

    const arabidopsisDescription =
        "Arabidopsis thaliana is a small flowering plant commonly used in scientific research. It is known for its rapid life cycle, simple genome, and widespread use as a model organism in molecular biology and genetics research.";

    const ficusDescription =
        "Ficus elastica, commonly known as the Rubber Plant, is a popular indoor plant with large, glossy leaves. It is known for its resilience and ability to tolerate low light conditions, making it a favorite choice for indoor gardening.";

    const hydrangeaDescription =
        "Hydrangea macrophylla, also known as Bigleaf Hydrangea, is a shrub species that produces showy clusters of flowers in various colors, including blue, pink, and white. It is a popular ornamental plant, often used in landscaping.";

    const aloeDescription =
        "Aloe vera, commonly referred to as Aloe Vera, is a succulent plant known for its medicinal properties. It is widely used in skincare products and natural remedies for its soothing and moisturizing effects on the skin.";

    const agaveDescription =
        "Agave americana, commonly known as the Century Plant, is a large succulent with spiky leaves. It is native to arid regions and is known for its ability to survive in harsh environments. The plant typically lives for many years before producing a tall flowering stalk.";

    const pelargoniumDescription =
        "Pelargonium graveolens, also known as Rose Geranium, is a fragrant plant often used in essential oil production. It has a rosy scent and is reputed to have calming and insect-repellent properties.";

    const musaDescription =
        "Musa paradisiaca, commonly known as the Banana Tree, is a tropical plant that produces edible fruit. Bananas are one of the most widely consumed fruits in the world and are rich in potassium and other nutrients.";

    const lavandulaDescription =
        "Lavandula angustifolia, also known as English Lavender, is a fragrant herb with narrow leaves and purple flowers. It is widely cultivated for its aromatic properties and is often used in perfumes, soaps, and culinary preparations.";

    const rhododendronDescription =
        "Rhododendron ponticum, also known as Pontic Rhododendron, is a dense shrub species that produces colorful, bell-shaped flowers. It is native to regions of Southeast Europe and has become invasive in some areas.";

    const citrusDescription =
        "Citrus sinensis, commonly known as Sweet Orange, is a citrus tree that produces fragrant white flowers and sweet oranges. Oranges are a popular fruit known for their rich vitamin C content and refreshing flavor.";
</script>

<div class="frame">
    <Card
        longName="Arabidopsis thaliana"
        name="Thale Cress"
        warning=""
        description={arabidopsisDescription}
    />

    <Card
        longName="Ficus elastica"
        name="Rubber Plant"
        warning="Caution"
        description={ficusDescription}
    />

    <Card
        longName="Hydrangea macrophylla"
        name="Bigleaf Hydrangea"
        warning="Toxic"
        description={hydrangeaDescription}
    />

    <Card longName="Aloe vera" name="Aloe Vera" warning="Irritant" description={aloeDescription} />

    <Card
        longName="Agave americana"
        name="Century Plant"
        warning="Spiky"
        description={agaveDescription}
    />

    <Card
        longName="Pelargonium graveolens"
        name="Rose Geranium"
        warning="Allergenic"
        description={pelargoniumDescription}
    />

    <Card
        longName="Musa paradisiaca"
        name="Banana Tree"
        warning="Poisonous"
        description={musaDescription}
    />

    <Card
        longName="Lavandula angustifolia"
        name="English Lavender"
        warning="Prune"
        description={lavandulaDescription}
    />

    <Card
        longName="Rhododendron ponticum"
        name="Pontic Rhododendron"
        warning="Toxic"
        description={rhododendronDescription}
    />

    <Card
        longName="Citrus sinensis"
        name="Sweet Orange"
        warning="Photosensitive"
        description={citrusDescription}
    />
</div>

<style>
    @import "./+styles.css";
</style>
