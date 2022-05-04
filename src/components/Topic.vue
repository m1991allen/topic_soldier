<template>
    <div class="layout" id="part_topic">
        <h2><i class="fa-solid fa-message-lines"></i> {{ title }}</h2>
        <div class="layout_grid block_1">
            <div class="layout_grid_cover" v-for="item of 2" :key="item.id">
                <img src="https://picsum.photos/id/522/320/200" />
                <h3>Lorem ipsum dolor.</h3>
            </div>
        </div>
        <div class="layout_grid block_2">
            <div class="layout_grid_cover" v-for="item of 3" :key="item.id">
                <img src="https://picsum.photos/id/522/320/200" />
                <h3>Lorem ipsum dolor.</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            title: '王立專題文章',
        }
    },
}
</script>

<style scoped>
.layout {
    background-color: var(--layout_background);
}

.block_1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.block_2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width: 768px) {
    .block_1,
    .block_2 {
        grid-template-columns: 1fr;
    }
}

.layout_grid .layout_grid_intro {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.layout_grid_cover img {
    width: 100%;
}

a {
    display: inline-block;
    text-align: center;
    margin: 1rem var(--layout_margin);
    max-width: var(--layout_max_width);
    color: var(--main_color);
    border: 1px solid var(--main_color);
    padding: var(--layout_padding);
    transition: 0.3s;
}

a:hover {
    color: white;
    background-color: var(--main_color);
}

p {
    padding: 1rem;
    text-align: right;
}
</style>
