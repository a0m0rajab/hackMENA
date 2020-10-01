<template>
<v-app dark>
    <v-app-bar class="rounded-b-xl" :clipped-left="clipped" app dense>
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <div class="text-center">
            <a href="/CV.pdf" download="CV.pdf">
                <v-btn small rounded color="primary" dark>CV</v-btn>
            </a>
            <a href="/Summary.pdf" download="Summary.pdf">
                <v-btn small rounded color="primary" dark>Summary</v-btn>
            </a>
        </div>
    </v-app-bar>
    <v-main>
        <v-container>
            <nuxt />
        </v-container>
    </v-main>

    <v-footer absolute app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            items: [{
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/',
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire',
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Hack MENA',
        }
    },
}
</script>
