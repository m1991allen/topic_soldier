<template>
    <div class="layout" id="part_news">
        <h2><i class="fa-solid fa-newspaper"></i> {{ title }}</h2>
        <div class="layout_grid">
            <div class="layout_grid_cover" v-for="item of 6" :key="item.id">
                <img src="https://picsum.photos/id/695/320/200" />
                <h3>Lorem ipsum dolor.</h3>
                <p>22/04/30</p>
            </div>
        </div>
        <a href="javascript;">更多新聞</a>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            title: '相關新聞',
        }
    },
}
</script>

<style scoped>
.layout {
    background-color: var(--layout_background);
}

.layout_grid {
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 1024px) {
    .layout_grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 768px) {
    .layout_grid {
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
