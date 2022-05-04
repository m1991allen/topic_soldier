<template>
    <div class="layout_addition">
        <div class="layout_bottom">
            <div>
                <a v-for="(title, index) of titles" :key="index" :href="title.link">{{ title.name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [
                {
                    name: `台灣近況`,
                    link: `#part_tw`,
                },
                {
                    name: `王立專題文章`,
                    link: `#part_topic`,
                },
                {
                    name: `相關新聞`,
                    link: `#part_news`,
                },
            ],
        }
    },
}
</script>

<style>
.layout_bottom div {
    display: flex;
    position: fixed;
    bottom: 0;
    padding: 1rem 0;
    background-color: white;
    z-index: 999;
    width: 100%;
    border: 1px solid var(--main_color);
    height: 20px;
}
.layout_bottom a {
    width: 33.33%;
    display: block;
    color: var(--main_color);
}

.layout_bottom a:nth-child(1),
.layout_bottom a:nth-child(2) {
    border-right: 1px solid var(--main_color);
}
</style>
