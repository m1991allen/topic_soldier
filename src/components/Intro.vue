<template>
    <div class="layout">
        <h1>兵役延長yes or no？</h1>
        <div class="layout_grid" v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            content: `
            <p>
                最近俄烏戰爭，讓不少人也擔心起台灣的處境，甚至開始檢討現行兵役制度，因為少子化，使得募兵制招募到的志願役士兵人數不如預期，有部分民意認為，應該將目前四個月的義務役，再恢復為從前的一年，來補足兵力缺口。
            </p>
            <p>
                不過延長兵役、增加役男人數，就能夠強化國防安全嗎？面對現代化戰爭，武器越來越複雜，台灣應該採取怎樣的戰略？
            </p>`,
        }
    },
}
</script>

<style scoped>
h1 {
    opacity: 0;
    position: absolute;
}

.layout p {
    text-align: left;
}
</style>
