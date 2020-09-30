<template>
<v-col col="12">
    <h4>Zoom:</h4>
    <vue-datamaps :scope="scope" :data="data" :fills="fills" :bubblesConfig="bubblesConfig" bubbles @custom:popup-bubble="popupTemplate" :setProjection="setProjection('zoom')">
        <div slot="hoverBubbleInfo" class="hoverinfo" style="text-align:center;">{{ popupData.name }}</div>
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
                gt50: d3.schemeCategory20[Math.floor(Math.random() * 20)],
                eq50: d3.schemeCategory20b[Math.floor(Math.random() * 20)],
                lt25: d3.schemeCategory20c[Math.floor(Math.random() * 20)],
                gt75: d3.schemeCategory20[Math.floor(Math.random() * 20)],
                lt50: d3.schemeCategory10[Math.floor(Math.random() * 10)],
                eq0: d3.schemeCategory10[Math.floor(Math.random() * 1)],
                pink: '#0fa0fa',
                gt500: d3.schemeCategory10[Math.floor(Math.random() * 1)],
            },
            data: {
                ZAF: {
                    fillKey: 'gt50',
                },
                ZWE: {
                    fillKey: 'lt25',
                },
                NGA: {
                    fillKey: 'lt50',
                },
                MOZ: {
                    fillKey: 'eq50',
                },
                MDG: {
                    fillKey: 'eq50',
                },
                EGY: {
                    fillKey: 'gt75',
                },
                TZA: {
                    fillKey: 'gt75',
                },
                LBY: {
                    fillKey: 'red',
                },
                DZA: {
                    fillKey: 'gt500',
                },
                SSD: {
                    fillKey: 'pink',
                },
                SOM: {
                    fillKey: 'gt50',
                },
                GIB: {
                    fillKey: 'eq50',
                },
                AGO: {
                    fillKey: 'lt50',
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
