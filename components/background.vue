<template>
<v-card class="mx-auto ma-2 rounded-xl" outlined>
    <v-card-title>
        <v-icon large left>{{ icon }}</v-icon>
        <span class="title font-weight-light">{{ title }}</span>
    </v-card-title>
    <v-row class="justify-center">
        <v-col v-for="(item, i) in list" :key="i" class="col-12 pa-0" sm="4" md="2">
            <activity :title="item.title" :descr="item.descr" :img="item.img" :icon="item.icon" />
        </v-col>
    </v-row>
</v-card>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        list: Array,
    },
    components: {
        activity: () => import('~/components/activity.vue'),
    },
    data: () => ({}),
}
</script>
