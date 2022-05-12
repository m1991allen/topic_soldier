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
                // {
                //     name: `台灣兵役現況`,
                //     link: `https://www.ftvnews.com.tw/topics/soldier/?utm_source=topicpage&utm_term=台灣兵役現況#part_tw`,
                // },
                // {
                //     name: `軍事國防Q&A`,
                //     link: `https://www.ftvnews.com.tw/topics/soldier/?utm_source=topicpage&utm_term=王立專訪文章#part_topic`,
                // },
                // {
                //     name: `相關新聞`,
                //     link: `https://www.ftvnews.com.tw/topics/soldier/?utm_source=topicpage&utm_term=相關新聞#part_news`,
                // },
                {
                    name: `台灣兵役現況`,
                    link: `#part_tw`,
                },
                {
                    name: `軍事國防Q&A`,
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
