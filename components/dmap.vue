<template>
<v-col col="12" class="rounded-xl">
    <h4>Zoom:</h4>
    <vue-datamaps class="rounded-xl" :scope="scope" :data="data" :fills="fills" :bubblesConfig="bubblesConfig" bubbles @custom:popup-bubble="popupTemplate" :setProjection="setProjection('zoom')">
        <div slot="hoverBubbleInfo" class="hoverinfo" style="text-align: center">
            {{ popupData.name }}
        </div>
    </vue-datamaps>
</v-col>
</template>

<script>
import {
    VueDatamaps
} from 'vue-datamaps'
import * as d3 from 'd3v4'
export default {
    components: {
        VueDatamaps,
    },
    data() {
        return {
            scope: 'world',
            fills: {
                passive: '#E1AD01',
                active: 'rgb(148, 0, 0)',
                defaultFill: '#dddddd',
            },
            data: {
                ARE: {
                    fillKey: 'passive',
                },
                DJI: {
                    fillKey: 'passive',
                },
                IRQ: {
                    fillKey: 'passive',
                },
                JOR: {
                    fillKey: 'active',
                },
                KWT: {
                    fillKey: 'passive',
                },
                LBN: {
                    fillKey: 'passive',
                },
                LBY: {
                    fillKey: 'passive',
                },
                MRT: {
                    fillKey: 'passive',
                },
                OMN: {
                    fillKey: 'passive',
                },
                ISR: {
                    fillKey: 'passive',
                },
                QAT: {
                    fillKey: 'passive',
                },
                SAU: {
                    fillKey: 'passive',
                },
                SYR: {
                    fillKey: 'passive',
                },
                YEM: {
                    fillKey: 'passive',
                },
                TUR: {
                    fillKey: 'active',
                },
                MAR: {
                    fillKey: 'passive',
                },
                EGY: {
                    fillKey: 'active',
                },
                DZA: {
                    fillKey: 'active',
                },
                SSD: {
                    fillKey: 'passive',
                },
                SDN: {
                    fillKey: 'passive',
                },
                SOM: {
                    fillKey: 'passive',
                },
                TUN: {
                    fillKey: 'passive',
                },
                PSE: {
                    fillKey: 'passive',
                },
                '-99': {
                    fillKey: 'passive',
                },
            },

            popupData: {
                name: '',
                test: 'xyz',
            },
        }
    },

    methods: {
        popupTemplate({
            datum
        }) {
            this.popupData.name = `Bubble for ${datum.name}`
        },
        setProjection(type) {
            const createProjection = {
                zoom: function (d3, element) {
                    var projection = d3
                        .geoEquirectangular()
                        .center([22, 15])
                        .rotate([5, 0])
                        .scale(element.offsetHeight)
                        .translate([element.offsetWidth / 2.5, element.offsetHeight / 2])
                    var path = d3.geoPath().projection(projection)
                    return {
                        path: path,
                        projection: projection,
                    }
                },
            }
            return createProjection[type]
        },
    },
}
</script>
