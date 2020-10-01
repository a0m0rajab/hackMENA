<template>
<v-card class="mx-auto ma-2 rounded-xl" outlined>
    <v-card-title>
        <v-icon large left>mdi-account-reactivate</v-icon>
        <span class="title font-weight-light">Background</span>
    </v-card-title>
    <v-row>
        <v-col v-for="(item, i) in activities" :key="i" class="pa-0">
            <activity :title="item.title" :descr="item.descr" :img="item.img" />
        </v-col>
    </v-row>
</v-card>
</template>

<script>
export default {
    components: {
        activity: () => import('~/components/activity.vue'),
    },
    data: () => ({
        activities: [{
                img: '/images/ce.png',
                title: 'Campus <br>Expert',
                descr: 'Being a github Campus expert for a year and suppourting the local FOSS community',
            },
            {
                img: '/images/MSFT_LA.png',
                title: 'MSFT learn <br>Ambassador',
                descr: 'Hosting and Leading the community to gain new skills and learn new technologies',
            },
            {
                img: '/images/MSFT_SP.png',
                title: 'MSFT <br>Student <br>Partner',
                descr: 'Students partners are leaders in their community that help others to learn latest technologies.',
            },
            {
                img: '/images/YGA.png',
                title: 'YGA <br>Volunteer',
                descr: 'Double winged Volunteers are those who have the skills and care about humanity at the same time.',
            },
            {
                img: '/images/Scout.png',
                title: 'Scout Boy',
                descr: 'Leading and teachning more than 100+ Scout boy about life and technology.',
            },
            {
                img: '/images/DET.png',
                title: 'Event <br>organiser',
                descr: 'Students partners are leaders in their community that help others to learn latest technologies.',
            },
        ],
    }),
}
</script>
