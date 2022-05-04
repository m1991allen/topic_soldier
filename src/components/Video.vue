<template>
    <div class="layout">
        <h2><i class="fa-solid fa-video"></i> {{ title }}</h2>
        <div class="layout_grid">
            <div class="iframe-container">
                <iframe
                    width="1695"
                    height="847"
                    src="https://www.youtube.com/embed/NkeYa6X2vuc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '相關影音',
        }
    },
}
</script>

<style scoped>
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    margin-top: 3rem;
    z-index: 1;
    width: 100%;
    min-height: 100px;
}
.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.iframe-container-4x3 {
    padding-top: 75%;
}
</style>
