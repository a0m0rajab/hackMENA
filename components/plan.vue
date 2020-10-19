<template>
<v-card class="mx-auto ma-2 rounded-xl" outlined>
    <v-card-title>
        <v-icon large left>mdi-debug-step-over</v-icon>
        <span class="title font-weight-light">Plan</span>
    </v-card-title>
    <v-row class="col-12 pa-10">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, n) in steps" :key="n">
                <span slot="opposite">{{ item.slogan }}</span>
                <v-card class="elevation-2 rounded-xl">
                    <v-card-title class="headline">{{ item.title }}</v-card-title>
                    <v-card-text>
                        {{ item.content }}
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-row>
</v-card>
</template>

<script>
export default {
    data: () => ({
        steps: [{
                slogan: "Let's start",
                title: 'Getting to know Turkey',
                content: 'Starting by checking the situation in turkey and reach out the potentioal universities and communities to work with them',
            },
            {
                slogan: 'Let`s talk',
                title: 'Contacting the universities',
                content: 'Contacting the universities to let them know about open source projects and program to start suppourt them and their local events',
            },
            {
                slogan: 'Let`s Meet',
                title: 'Local Events',
                content: 'Hosting local events with local societies, communities and groups to talk about the benefits of open source to the society and how it can help, beside that I would advocate and talk about Campus Expert program and share some great stories about it.',
            },
            {
                slogan: 'Almost there',
                title: 'First 20 universities',
                content: 'After reaching to 10 universities and communities we can have a joint conference online to share their knowledge skills and talk about Open Source',
            },
            {
                slogan: "Let's hack together",
                title: 'Hackathon',
                content: 'Hosting and supporting a hackathon that can lead to social innovation and empower the open source in Turkey',
            },
            {
                slogan: 'The next country',
                title: "What's next?",
                content: 'after reaching to 50% of universities in Turkey we can start to check the next possible country to work with and  start a communitiy/initative with them',
            },
        ],
    }),
}
</script>
