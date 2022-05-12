<template>
    <div class="layout_header">
        <div class="progress"></div>
        <div class="layout_grid">
            <div>
                <p @click="linkToHome">
                    <img :src="logo" />
                    <span>{{ title }}</span>
                </p>
            </div>

            <div>
                <div class="layout_grid_icon">
                    <!-- line -->
                    <a
                        href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/soldier/"
                        target="_blank"
                    >
                        <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/soldier/">
                            <i class="fa-brands fa-line fa-xl"></i
                        ></span>
                    </a>

                    <!-- facebook -->
                    <a
                        target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Fsoldier%2F&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore"
                        ><i class="fa-brands fa-facebook-square fa-xl"> </i
                    ></a>

                    <!-- localUrl -->
                    <i id="social_link" @click="getLocalUrl" class="fa-solid fa-square-share-nodes fa-xl"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',

    data() {
        return {
            title: `民視新聞網`,
            logo: require('../assets/logo_ftv.svg'),
        }
    },

    methods: {
        scroll() {
            window.addEventListener('scroll', () => {
                this.moveBar('#4d482e')
            })
        },

        moveBar(color = '#4d482e') {
            let bar = document.querySelector('.progress')
            let w = Math.ceil(
                (Math.round(window.pageYOffset) / (document.body.scrollHeight - window.innerHeight)) * 100
            )
            bar.style.width = w + '%'
            bar.style.background = color
        },

        linkToHome() {
            window.open('https://www.ftvnews.com.tw/', '_blank')
        },

        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=topicpage&utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功!')
        },
    },

    mounted() {
        this.scroll()
        this.moveBar()
    },
}

</script>

<style scoped>
.layout_header {
    width: var(--width);
    box-shadow: var(--header_box_shadow);
    background-color: var(--header_background);
    position: fixed;
    z-index: 9999;
}

.layout_grid {
    grid-template-columns: 9fr 1fr;
    padding: var(--layout_padding);
}

.layout_grid div:nth-child(2) {
    margin: var(--layout_margin);
}

p {
    font-size: var(--font_h2);
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
}

p span {
    padding: 0 var(--layout_padding);
}

p img {
    width: 32px;
}

/* 進度條 */
.progress {
    position: fixed;
    bottom: 53px;
    width: 0.5%;
    height: 10px;
    z-index: 999;
}

/* 社群分享 */

.layout_grid_icon {
    display: var(--layout_display);
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--layout_gap);
}

i {
    color: var(--main_color);
    display: block;
}
</style>
