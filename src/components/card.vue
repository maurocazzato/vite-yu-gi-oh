<script>
export default {
    name: "card",

};
</script>

<template>
    <div class="card">
        <img src="https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0" alt="Card Image" />
        <div>
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text">{{ card.type }}</p>
        </div>
    </div>
</template>
