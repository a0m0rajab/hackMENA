<template>
<v-card class="col-12 mx-auto ma-2 rounded-xl" outlined>
    <v-card-title>
        <v-icon large left>mdi-earth</v-icon>
        <span class="title font-weight-light">MENA</span>
    </v-card-title>
    <v-row>
        <v-col class="col-12" md="8">
            <dmap />
        </v-col>
        <v-col class="col-12" md="4">
            <v-row>
                <v-col class="col-6" md="12">
                    <h1 style="color: rgb(148, 0, 0)">Situation</h1>
                    <h2>6 Campus Experts</h2>
                    <h2>6 Universities</h2>
                    <h2>4 Countries</h2>
                </v-col>
                <v-col class="col-6" md="12">
                    <h1 style="color: #e1ad01">Possibilities</h1>
                    <h2>22+ Countries</h2>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-card>
</template>

<script>
export default {
    components: {
        dmap: () => import('~/components/dmap.vue'),
        TRmap: () => import('~/components/TurkeyMap.vue'),
    },
    data: () => ({}),
}
</script>
