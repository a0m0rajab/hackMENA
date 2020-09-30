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
            <dmap />
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
        situation: () => import('~/components/situation.vue'),
        dmap: () => import('~/components/dmap.vue'),

        background,
    },
}
</script>
