<template>
<v-card class="mx-auto ma-2 rounded-xl" outlined>
    <v-card-title>
        <v-icon large left>mdi-account-reactivate</v-icon>
        <span class="title font-weight-light">Now</span>
    </v-card-title>
    <v-row>
        <v-col v-for="i in 18" :key="i">
            <activity />
        </v-col>
    </v-row>
    <v-row>
        <v-col v-for="i in 18" :key="i">
            <activity />
        </v-col>
    </v-row>
</v-card>
</template>

<script>
export default {
    components: {
        activity: () => import('~/components/activity.vue'),
    },
    data: () => ({}),
}
</script>
