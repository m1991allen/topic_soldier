<template>
    <div class="layout">
        <h2><i class="fa-solid fa-block-question"></i> {{ title }}</h2>
        <div class="layout_grid">
            <VueFaqAccordion :items="topicFaq" />
        </div>
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
    components: {
        VueFaqAccordion,
    },
    data() {
        return {
            title: '軍事戰略Q&A',
            topicFaq: [
                {
                    title: `
                        Q1：傳統認知中，人數多寡很大程度決定了戰事勝負，請問在現代戰爭中真的是如此嗎？
                    `,
                    value: `
                    <p>
                        A：在冷兵器年代（刀槍弓箭），人多的意思代表戰力也多，但在現代戰爭（2000年後）實質上是工業、科技與資訊的年代，發揮火力不是只有靠人多，更重要的是人力素質、武器精準度、科技水準以及資訊傳播。
                    </p>
                    <a style="text-align:right; display: block;" href="https://www.ftvnews.com.tw/news/detail/2022429W0067" target="_blank">（<i class="fa-solid fa-link"></i> 深度回覆點這裡）</a>
                    `,
                },
                {
                    title: `
                        Q2：俄烏戰爭中，俄羅斯與烏克蘭兵力懸殊，俄軍卻遲遲無法攻下烏克蘭，您認為原因為何？
                    `,
                    value: `
                    <p>
                        A：俄軍原先預估烏克蘭人民會雙手歡迎，因此在烏克蘭漫長的邊境，發起了多條線、少兵力的全面性進攻，實際上卻遇到烏國人民激烈抵抗，不足以達成「烏克蘭全境」的目標。因此，並不是俄軍戰力低落，更大的問題是政治目標想定錯誤，誤判烏克蘭人的抵抗意志，才有戰略錯誤的結果。
                    </p>
                    <a style="text-align:right; display: block;" href="https://www.ftvnews.com.tw/news/detail/2022424W0074" target="_blank">（<i class="fa-solid fa-link"></i> 深度回覆點這裡）</a>`,
                },
                {
                    title: `
                        Q3：台海一旦開戰，烏克蘭採取的「不對稱作戰」能當作參考？
                    `,
                    value: `
                    <p>
                        A：面臨中國威脅，目前我國國軍朝著「不對稱作戰」發展，而台灣在這方面最大優勢，就是四面環海的地理位置。由於台灣屬海島，敵軍入侵勢必使用海空運輸，因此台灣只要加強海空防禦能力，在本土防衛優勢下，解放軍消耗的資源、時間勢必更多。此外，若台灣人民能從俄烏戰爭中，提早意識到戰爭的可能，就能儘早做足準備對抗外來威脅。
                    </p>
                    <a style="text-align:right; display: block;" href="https://www.ftvnews.com.tw/news/detail/2022424W0075" target="_blank">（<i class="fa-solid fa-link"></i> 深度回覆點這裡）</a>`,
                },
                {
                    title: `
                        Q4：面對中國威脅，台灣該全民皆兵嗎？
                    `,
                    value: `
                    <p>
                        A：大體上，需要喊出「全民皆兵」的情況，是像過去阿拉伯國家，明擺著不僅要滅國，甚至要屠殺清洗猶太人，以色列才需要不分男女老幼起身對抗。然而中國對台灣，始終宣稱「動武只是針對一小撮台獨份子」，若喊出全民皆兵，就可能提供敵人濫殺無辜的理由。
                    </p>
                    <p>
                        另外，台灣有數百萬人認為武裝自己是一種挑釁，在這種內部意見仍然混亂的情況下，開戰之後可能導致國民轉向希望和談，台灣也會在國際盟邦間迅速被放棄。
                    </p>
                    <a style="text-align:right; display: block;" href="https://www.ftvnews.com.tw/news/detail/2022424W0078" target="_blank">（<i class="fa-solid fa-link"></i> 深度回覆點這裡）</a>`,
                },
                {
                    title: `
                        Q5：關於台灣兵役改革、國防佈局或普遍民眾認知，王立有什麼想分享的嗎？
                    `,
                    value: `
                    <p>
                        A：兵役改革問題一直都存在，不是役期長短，而是施行內容，然而值得思考的是，台灣若對義務役重新設計一套課程，在人力、預算、彈藥消耗方面都會提高成本。再者，就國防佈局而言，台灣比較適合小型、分散化的組織防禦概念，但增加了防禦武器，也需要培養人力去操作，因此「說到底，一切都是錢」，大眾可以接受軍費增加，以及花時間去了解國防嗎？
                    </p> 
                    <a style="text-align:right; display: block;" href="https://www.ftvnews.com.tw/news/detail/2022424W0079" target="_blank">（<i class="fa-solid fa-link"></i> 深度回覆點這裡）</a>`,
                },
            ],
        }
    },
}
</script>

<style scoped>
a {
    color: azure !important;
}
</style>
