<template>
    <div id="app">
        <Header />
        <Banner />
        <Intro />
        <Content />
        <Faq />
        <Topic />
        <Video />
        <News />
        <Addition />
        <Bottom />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import Content from '@/components/Content.vue'
import Topic from '@/components/Topic.vue'

import Faq from '@/components/Faq.vue'
import Video from '@/components/Video.vue'
import News from '@/components/News.vue'
import Addition from '@/components/Addition.vue'
import Bottom from '@/components/Bottom.vue'

import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Banner,
        Intro,
        Content,
        Faq,
        Topic,
        Video,
        News,
        Addition,
        Bottom,
        Footer,
    },
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    text-decoration: none;
}

#app {
    font-family: 蘋果儷中黑, 微軟正黑體, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>

<style>
:root {
    --header_background: white;
    --header_box_shadow: 0px 2px 10px #1a1e30;

    --layout_background: #e7e4de;
    --layout_margin: auto;
    --layout_display: grid;
    --layout_max_width: 800px;
    --layout_gap: 20px;
    --layout_padding: 1rem;
    --layout_margin: auto;
    --layout_color: #054d8f;

    --footer_font_color: white;
    --footer_background: #6b6647;

    --width: 100%;
    --font_h1: 2rem;
    --font_h2: 1.6rem;
    --font_h3: 1.4rem;
    --font_h4: 1.2rem;
    --font_h5: 1.1rem;
    --font_h6: 1rem;
    --font_p: 1rem;
    --font_span: 1rem;
    --text_line_height: 1.5rem;

    --title_align: center;
    --text_align: left;

    --main_color: #6b6647;

    scroll-behavior: smooth;
}

h1 {
    font-size: var(--font_h1);
}

h2 {
    font-size: var(--font_h2);
    text-align: var(--title_align);
    margin: 1rem;
    padding: 2rem 0;
    font-weight: 500;
}

h3 {
    font-size: var(--font_h3);
    text-align: var(--title_align);
    padding: 2rem 0;
    font-weight: bolder;
}

p {
    text-align: var(--text_align);
    line-height: var(--text_line_height);
    margin: 1rem 0;
}

.layout {
    margin: 3rem var(--layout_margin) 0;
}

.layout_grid {
    display: var(--layout_display);
    max-width: var(--layout_max_width);
    margin: var(--layout_margin);
    padding: var(--layout_padding);
    grid-gap: var(--layout_gap);
}
</style>
