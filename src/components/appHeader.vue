<script>
export default {
    name: "appHeader",
};
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-auto">
                    <img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
                        alt="Logo" class="logo" />
                    <h1 class="title">Yu-Gi-Oh API</h1>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.logo {
    max-width: 10%;
    margin-right: 20px;
    margin-left: 20px;
    float: left;

}

.title {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
}
</style>
