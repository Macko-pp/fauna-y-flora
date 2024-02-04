<script>
    import wavesOppacity from "$lib/images/hero/waves-oppacity.svg";
    import corazonVerde from "$lib/images/hero/corazon-verde.svg";
    import CCB from "$lib/images/hero/CCB.svg";
    import logo from "$lib/images/hero/flora-y-fauna-300.svg";
</script>

<div class="main-page-home">
    <img class="waves-oppacity" src={wavesOppacity} alt="Colored waves with different oppacity that make the website look cool and modern"/>
    <div class="main-section">
        <div class="overlap">
            <div class="overlap-group">
                <img class="corazon-verde" src={corazonVerde} alt="Corazon Verde Logo"/>
                <img class="CCB" src={CCB} alt="CCB Logo"/>
                <img class="logo" src={logo} alt="plaeholder" />
            </div>
            <div class="TITLE">
                <div class="div">
                    <div class="text-wrapper-3">El Diccionario de</div>
                    <div class="text-wrapper-2">Fauna & Flora</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import "./hero.css";
</style>
