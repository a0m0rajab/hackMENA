<template>
<v-row justify="center" align="center">
    <v-col cols="12" sm="10">
        <v-row>
            <div class="text-center">
                <mcard />
            </div>
        </v-row>
        <v-row>
            <background />
        </v-row>
        <v-row>
            <situation />
        </v-row>
        <v-row>
            <situation1 />
        </v-row>
        <v-row>
            <background />
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
}
</script>
