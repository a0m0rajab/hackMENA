<template>
<v-card class="mx-auto ma-5 rounded-xl" max-width="150" outlined>
    <v-card-title>
        <v-img :src="img" height="100px" style="max-width: auto; height: 100%"></v-img>
        <h1 class="title font-weight-light">{{ title }}</h1>
    </v-card-title>
    <v-card-text>{{ descr }}</v-card-text>
</v-card>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        descr: String,
    },
    data: () => ({}),
}
</script>
