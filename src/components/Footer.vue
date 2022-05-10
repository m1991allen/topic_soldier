<template>
    <div class="layout">
        <div class="layout_grid">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: `Copyright © 2022 民視新聞網路部 社群中心`,
        }
    },
}
</script>

<style scoped>
.layout {
    color: var(--footer_font_color);
    background-color: var(--footer_background);
}
.layout_grid {
    grid-template-columns: 1fr;
    padding: 0rem 1rem 4rem;
}

p {
    text-align: center;
}
</style>
