<template>
    <div class="layout_inner">
        <a href="#part_tw">點我</a>
        <picture>
            <source media="(max-width: 450px)" :srcset="banner_img.mobile" />
            <source media="(max-width: 768px)" :srcset="banner_img.tablet_ver" />
            <source media="(max-width: 1260px)" :srcset="banner_img.tablet_hor" />
            <img :src="banner_img.desktop" />
        </picture>
    </div>
</template>

<script>
export default {
    data() {
        return {
            banner_img: {
                desktop: require(`../assets/banner1920_400.jpg`),
                tablet_hor: require(`../assets/banner1260_500.jpg`),
                tablet_ver: require(`../assets/banner768_1024.jpg`),
                mobile: require(`../assets/banner768_500.jpg`),
            },
        }
    },
}
</script>

<style scoped>
.layout_inner {
    position: relative;
}

picture img {
    margin-top: 65px;
    width: 100%;
}
a {
    border: 1px solid var(--main_color);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    color: var(--main_color);
}
</style>
