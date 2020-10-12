<template>
<v-card class="ma-2 rounded-xl" outlined>
    <v-row>
        <v-col cols="12" lg="4">
            <v-avatar class="profile" color="grey" size="164" tile>
                <v-img style="background-color: white" src="hackMENA/images/MeEmpty.png"></v-img>
            </v-avatar>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">Abdurrahman Rajab</v-list-item-title>
                    <v-list-item-subtitle>Computer engineer</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-btn :href="https + social.link" v-for="(social, i) in socials" :key="i" :color="social.color" fab icon small>
                <v-icon>mdi-{{ social.icon }}</v-icon>
            </v-btn>
        </v-col>

        <v-col col="12" lg="6" class="col-12">
            <article class="text-left ma-5">
                <h1>Who Am I?</h1>
                <p>
                    A Creative Computer engineer who is looking to create a great FOSS
                    atmosphere and have an impact that can last and help with solving
                    the wicked problems around the world. I have been coding for more
                    than 5 years and have published a few open source projects
                    online.The projects help the public and researchers by using the
                    computing power in our advantage.
                </p>
            </article>
            <article class="text-left ma-5">
                <h1>What is this?</h1>
                <p>
                    The open source community in the world can be suppourted and get
                    together by some programs like the Github Campus Expert program.
                    This website is my proposal to GitHub to Extend and help to create
                    and support local FOSS communities in a overlooked region (MENA and
                    Turkey). The main idea is that the more people we can support to get
                    into FOSS or help them the better technologies and diversity we can
                    reach. The more we can help each other to create a better world by
                    using the latest technologies we have.
                </p>
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
