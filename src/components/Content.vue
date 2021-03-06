<template>
    <div class="layout" id="part_tw">
        <h2><i class="fa-solid fa-person-rifle"></i> {{ title }}</h2>
        <div class="layout_grid" v-for="(item, index) of data" :key="index">
            <div class="layout_grid_intro">
                <h3>{{ item.title }}</h3>
                <p v-html="item.description"></p>
            </div>
            <div class="layout_grid_cover">
                <img class="img" :src="item.img" />
            </div>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            title: '台灣兵役現況',
            data: [
                {
                    img: require(`../assets/台灣兵力人數.jpg`),
                    title: `台灣兵力人數？`,
                    description: `台灣目前採「徵募併行」制度，職業軍人約有16.3萬人，其中陸海空軍分別約有8.8萬人、4萬人、3.5萬人，1994年1月1日以後出生的役男，則須接受4個月軍事訓練，完訓納入後備列管。然而立法院法制局發布報告顯示，國軍部分部隊已出現人力不足的情況，加上少子化趨勢，若兵役制度不變，到了2039年可召募的役男，只剩下5.6萬人。`,
                },
                {
                    img: require(`../assets/台灣兵制變革.jpg`),
                    title: `台灣兵制變革`,
                    description: `回顧台灣兵役歷史，1987年解嚴前，義務役役期長達3年，1990年代減為2年。到了2000年起，役期縮短至1年10個月，並首度徵集替代役。而後因為對中國戰略轉攻為守，加上國防預算有限，軍隊遂展開三次裁軍「精實案、精進案、精粹案」，更宣布從2013年起，1994年後出生的役男，全面施行4個月的軍事訓練役。`,
                },
                {
                    img: require(`../assets/四個月役男做什麼.jpg`),
                    title: `四個月役男做什麼？`,
                    description: `國防部2021年9月調整政策，恢復軍事訓練役「5+11」訓練，意指軍事訓練役完成5週入伍訓練後，即分發本、外島部隊，實施11週編制專長與實務工作訓練。國防部長邱國正表示，役男多了解部隊經驗是好事，比起過去訓完就回家，將有所助益。`,
                },
                {
                    img: require(`../assets/民眾支持兵役延長嗎.jpg`),
                    title: `民眾支持兵役延長嗎？`,
                    description: `根據台灣民意基金會3月22日公布的民調顯示，有76.8%受訪者認為，台灣役男只服4個月軍事訓練役不合理；至於役期是否延長至1年，則有75.9%受訪者支持。台灣民意基金會董事長游盈隆分析，民調結果顯示在中國武力威嚇下，加上烏克蘭情境效應，改革現行兵役制度已是社會共識。`,
                },
                {
                    img: require(`../assets/正反意見怎麼說.jpg`),
                    title: `正反意見怎麼說？`,
                    description: `時代力量立委邱顯智、王婉諭指出，4個月軍事訓練無法培養有戰力的後備軍人，應該將役期延長為1年，改革軍事訓練及教召訓練內容，並將女性納入多元化後備戰力。陸軍退役少將于北辰則認為「人多不一定能增加戰力」，拉長服役時間不如提升訓練質量，就現有體制讓軍力更精實、更穩固。`,
                },
                {
                    img: require(`../assets/俄烏軍力比一比.jpg`),
                    title: `從俄烏戰爭看「不對稱作戰」`,
                    description: `
                    <p>
                        根據「global firepower」資料顯示，俄羅斯和烏克蘭軍力對比懸殊，但俄羅斯此次侵略行動卻頻頻受阻，外界認為關鍵就在於烏克蘭採取「不對稱作戰」。
                    </p>
                    <p>
                        民視異言堂「兵役延長Yes or No？」專題指出，所謂「不對稱作戰」，意指利用天然優勢與敵人弱點，用最低成本獲得最大作戰成效。如烏克蘭憑藉外援飛彈，在地面與空中部隊相互協調下，帶給俄軍重大傷亡，或善用資訊及認知作戰，加劇國際反對入侵的聲浪，各種應對模式值得台灣借鏡。
                    </p>`,
                },
                {
                    img: require(`../assets/海空戰力計畫特別預算.jpg`),
                    title: `台灣「不對稱作戰」優勢在哪裡？`,
                    description: `
                    <p>
                        長期關注國際局勢與軍事戰略的「王立第二戰研所」指出，台灣在地理上屬於海島，具有防守優勢，運用海空戰力及高密度的飛彈防禦能力，中國就很難輕鬆進軍。
                    </p>
                    <p>
                        而為了提升台灣防衛作戰能力，我國總統蔡英文上任後致力推動「國防自主」，包括國機國造、潛艦國造等計畫都有重大進展，行政院去年也提出「海空戰力提升條例」，編列2400億元預算，採購8大項目國造武器，期盼快速提升國軍海空防戰力。
                    </p>`,
                },
                {
                    img: require(`../assets/兵役延長不只yn.jpg`),
                    title: `兵役延長不只 YES or NO？`,
                    description: `
                    <p>
                        俄羅斯入侵烏克蘭，激發了台灣民眾的防衛決心，也帶動「兵役要不要延長」的話題。對此，總統府發言人張惇涵表示，評估兵役役期長度同時，必須加大訓練量能，更重要的是，訓練內容必須進行改革，讓軍事訓練能夠有效應對現代戰爭需求，強化國軍「不對稱作戰」的建軍思維。
                    </p>
                    <p>
                        「王立第二戰研所」也指出，台灣民眾應該從俄烏戰爭中意識到戰爭的可能，儘早做出準備，並有抗戰精神，「那麼中國就不敢動手，攻打一個全民有準備的對象」。
                    </p>`,
                },
            ],
        }
    },

    methods: {},
}
</script>

<style scoped>
hr {
    width: 100%;
    border: 2px #d5d5d5 dashed;
}

.layout {
    background-color: var(--layout_background);
}

.layout_grid {
    margin: 1rem auto;
}

.layout_grid:nth-of-type(1),
.layout_grid:nth-of-type(5),
.layout_grid:nth-of-type(8) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    .layout_grid,
    .layout_grid:nth-of-type(1),
    .layout_grid:nth-of-type(5),
    .layout_grid:nth-of-type(8) {
        grid-template-columns: 1fr;
    }
}

.layout_grid:nth-of-type(1) .layout_grid_intro,
.layout_grid:nth-of-type(5) .layout_grid_intro,
.layout_grid:nth-of-type(8) .layout_grid_intro {
    width: 100%;
}

.layout_grid_cover {
    position: relative;
}

.layout_grid_cover img {
    max-width: 100%;
    cursor: pointer;
    box-shadow: 1px 2px 5px rgb(78, 78, 78);
}

.layout_grid .layout_grid_intro {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    line-height: 1.6rem;
    width: 700px;
    margin: auto;
}

@media screen and (max-width: 768px) {
    .layout_grid .layout_grid_intro {
        width: 100%;
    }
}

p {
    text-align: left;
}

a {
    display: block;
    text-align: right;
}
</style>
