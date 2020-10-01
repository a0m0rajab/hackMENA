<template>
<v-card class="mx-auto ma-2 rounded-xl" outlined>
    <v-card-title>
        <v-icon large left>mdi-account-reactivate</v-icon>
        <span class="title font-weight-light">Background</span>
    </v-card-title>
    <v-row class="col-12 pa-10">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="n in 2" :key="n">
                <span slot="opposite">Tus eu perfecto</span>
                <v-card class="elevation-2 rounded-xl">
                    <v-card-title class="headline">Lorem ipsum</v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                        scaevola imperdiet nec ut, sed euismod convenire principes at. Est
                        et nobis iisque percipit, an vim zril disputando voluptatibus, vix
                        an salutandi sententiae.
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
        reverse: true,
    }),
}
</script>
