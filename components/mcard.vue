<template>
<v-card class="ma-2 rounded-xl" outlined>
    <v-row>
        <v-col cols="12" lg="4">
            <v-avatar class="profile" color="grey" size="164" tile>
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">Abdurrahman Rajab</v-list-item-title>
                    <v-list-item-subtitle>Computer engineer</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-btn :href="https+social.link" v-for="(social, i) in socials" :key="i" :color="social.color" fab icon small>
                <v-icon>mdi-{{social.icon}}</v-icon>
            </v-btn>
        </v-col>

        <v-col col="12" lg="6" class="col-12">
            <article class="text-left ma-5">
                <h1>Who Am I?</h1>
                <p>A curious Computer engineer who is looking to create a great FOSS atmosphere and have an impact that can last and help with solving the wicked problems around the world. I have been coding for more than 5 years and have published a few open source projects online.The projects help the public and researchers by using the computing power in our advantage.</p>
            </article>
        </v-col>
        <v-col col="12" lg="2"></v-col>
    </v-row>
</v-card>
</template>

<script>
export default {
    data: () => ({
        https: 'https://',
        socials: [{
                icon: 'facebook',
                color: 'indigo',
                link: 'fb.com/a0m0rajab',
            },
            {
                icon: 'linkedin',
                color: 'indigo darken-1',
                link: 'linkedin.com/in/a0m0rajab',
            },
            {
                icon: 'twitter',
                color: 'cyan darken-1',
                link: 'twitter.com/rajab_2',
            },
        ],
    }),
}
</script>
