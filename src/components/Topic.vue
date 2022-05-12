<template>
    <div class="layout">
        <div class="layout_grid block_1">
            <div class="layout_grid_news" v-for="(news, index) of news_top" :key="index">
                <a :href="news.link" target="_blank"
                    ><div class="grid_cover">
                        <img :src="news.cover" />
                    </div>
                    <div class="grid_title">
                        <h4>{{ news.title }}</h4>
                    </div>
                </a>
            </div>
        </div>
        <div class="layout_grid block_2">
            <div class="layout_grid_news" v-for="(news, index) of news_bottom" :key="index">
                <a :href="news.link" target="_blank"
                    ><div class="grid_cover">
                        <img :src="news.cover" />
                    </div>
                    <div class="grid_title">
                        <h4>{{ news.title }}</h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            news_top: [
                {
                    cover: require('../assets/news_cover1.jpeg'),
                    title: `現代戰爭不只拚人數！除了「這兩點」台灣還有一課題`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022429W0067`,
                },
                {
                    cover: require('../assets/news_cover2.jpeg'),
                    title: `軍事大國俄羅斯侵烏卻代價慘重？專家盤點：誤判烏克蘭抵抗意志`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022424W0074`,
                },
            ],
            news_bottom: [
                {
                    cover: require('../assets/news_cover3.jpeg'),
                    title: `借鏡俄烏經驗 台灣採取「不對稱作戰」優勢在哪裡？`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022424W0075`,
                },
                {
                    cover: require('../assets/news_cover4.jpeg'),
                    title: `「全民皆兵」能提升台灣國防？專家提醒：對台灣而言「這點」更重要`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022424W0078`,
                },
                {
                    cover: require('../assets/news_cover5.jpeg'),
                    title: `四個月軍事訓練役太短？訓練內容不精實？王立：問題在預算`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022424W0079`,
                },
            ],
        }
    },
}
</script>

<style scoped>
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

.layout_grid_news {
    box-shadow: 1px 2px 3px #bcb9b9;
}

.layout_grid_news .grid_title h4 {
    background-color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    max-height: 55px;
    line-height: 2.3rem;
    padding: 10px 1rem 25px;
}

.layout_grid_news .grid_cover img {
    width: 100%;
    filter: saturate(0.3);
    transition: 0.3s;
}

.layout_grid_news .grid_cover {
    max-height: 295px;
    overflow: hidden;
}

a {
    color: black;
}

a:hover .grid_cover img {
    filter: saturate(1);
}

p {
    padding: 1rem;
    text-align: right;
}
</style>
