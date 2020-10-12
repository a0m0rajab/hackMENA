<template>
<v-row justify="center" align="center">
    <v-col cols="12" sm="10">
        <v-row>
            <div class="text-center">
                <mcard />
            </div>
        </v-row>
        <v-row>
            <background :title="background.title" :icon="background.icon" :list="background.list" class="col-12" />
        </v-row>
        <v-row>
            <situation />
        </v-row>
        <v-row cols="12">
            <situation1 />
        </v-row>
        <v-row>
            <background :title="impact.title" :icon="impact.icon" :list="impact.list" class="col-12" />
        </v-row>
        <v-row>
            <plan />
        </v-row>
    </v-col>
</v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import background from '~/components/background.vue'

export default {
    components: {
        Logo,
        VuetifyLogo,
        mcard: () => import('~/components/mcard.vue'),
        situation1: () => import('~/components/situation1.vue'),
        dmap: () => import('~/components/dmap.vue'),
        plan: () => import('~/components/plan.vue'),

        background,
    },
    data: () => ({
        background: {
            icon: 'mdi-account-reactivate',
            title: 'Background',
            list: [{
                    img: 'images/ce.png',
                    title: 'Campus <br>Expert',
                    descr: 'Being a github Campus expert for a year and suppourting the local FOSS community',
                },
                {
                    img: 'images/MSFT_LA.png',
                    title: 'MSFT learn <br>Ambassador',
                    descr: 'Hosting and Leading the community to gain new skills and learn new technologies',
                },
                {
                    img: 'images/MSFT_SP.png',
                    title: 'MSFT <br>Student <br>Partner',
                    descr: 'Students partners are leaders in their community that help others to learn latest technologies.',
                },
                {
                    img: 'images/YGA.png',
                    title: 'YGA <br>Volunteer',
                    descr: 'Double winged Volunteers are those who have the skills and care about humanity at the same time.',
                },
                {
                    img: 'images/Scout.png',
                    title: 'Scout Boy',
                    descr: 'Leading and teachning more than 100+ Scout boy about life and technology.',
                },
                {
                    img: 'images/DET.png',
                    title: 'Event <br>organiser',
                    descr: 'Students partners are leaders in their community that help others to learn latest technologies.',
                },
            ],
        },
        impact: {
            icon: 'mdi-atom',
            title: 'impact',
            list: [{
                    icon: 'mdi-account-group-outline',
                    title: 'Diversity...',
                    descr: 'FOSS community will be empowered in the region with more diverse people and different ethnics.',
                },
                {
                    icon: 'mdi-map-check-outline',
                    title: 'New Region',
                    descr: 'A region full of creativity and youth, with a promising future',
                },
                {
                    icon: 'mdi-flash-circle',
                    title: 'Fresh Ideas',
                    descr: 'Ideas from a community that differ in culture, concepts and even language.',
                },
                {
                    icon: 'mdi-github',
                    title: 'Open Source',
                    descr: 'Suppourt Open source projects that can lead to high impact in the region and transferred to other regions.',
                },
                {
                    icon: 'mdi-charity',
                    title: 'Philanthropy',
                    descr: 'Suppourt Open source projects and communities that have faced the refugee problems that most.',
                },
            ],
        },
    }),
}
</script>
