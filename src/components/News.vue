<template>
    <div class="layout" id="part_news">
        <h2><i class="fa-solid fa-newspaper"></i> {{ title }}</h2>
        <div class="layout_grid">
            <div class="layout_grid_news" v-for="(news, index) of newsInfo" :key="index">
                <a :href="'https://www.ftvnews.com.tw/news/detail/' + news.ID" target="_blank">
                    <div class="grid_cover">
                        <img :src="news.Image" />
                    </div>
                    <div class="grid_info">
                        <h4>{{ news.Title }}</h4>
                        <p>{{ news.CreateDate }}</p>
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
            newsInfo: [],
            title: '相關新聞',
        }
    },
    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=兵役延長是與否&Page=1&sp=10')
            .then((response) => {
                console.log(response)
                let data = response.data.ITEM
                data.forEach((item) => {
                    this.newsInfo.push(item)
                })
            })
            .catch((error) => {
                console.log('error' + error)
            })
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

.layout_grid_news img {
    width: 100%;
}

.layout_grid_news {
    box-shadow: 1px 2px 3px #bcb9b9;
}

.layout_grid_news .grid_info h4 {
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

.layout_grid_news .grid_info p {
    margin: 0;
    color: #737059;
}

.layout_grid_news .grid_cover img {
    width: 100%;
    filter: saturate(0.3);
    transition: 0.3s;
}

.layout_grid_news .grid_cover {
    max-height: 160px;
    overflow: hidden;
}

a {
    color: black;
}

a:hover .grid_cover img {
    filter: saturate(1);
}

p {
    text-align: right;
    padding-right: 1rem;
}
</style>
