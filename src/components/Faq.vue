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
            title: '問與答',
            topicFaq: [
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth <a href="#" target="_blank">123</a><img src="https://picsum.photos/id/684/600/400" alt="">',
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.<a href="#" target="_blank">123</a>',
                },
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth<a href="#" target="_blank">123</a>',
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.<a href="#" target="_blank">123</a>',
                },
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth<a href="#" target="_blank">123</a>',
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.<a href="#" target="_blank">123</a>',
                },
            ],
        }
    },
}
</script>
