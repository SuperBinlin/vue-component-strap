<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 16/4/9
Time: 10:12-->
<template>
    <th v-show="hidden" :style="[columnWidthStyle]" >
        <div>{{{ renderer }}}</div>
    </th>
</template>
<script>
    import GridMixin from "../GridMixin";
    export default{
        name:"grid-header",
        mixins:[GridMixin],
        props:{
            "rowIndex":{},
            "colIndex":{},
            "flexCount":{},
            "surplusWidth":{},
            "setting":{
                type:Object,
                default:function () {
                    return {
                        "width":10,
                        "align":"center",
                        "hidden":false
                    }
                }
            }
        },
        data(){
            return {

            }
        },
        ready(){
            let me = this;

        },
        computed:{
            "renderer":function () {
                let me = this;
                return me.setting.text;
            }
        },
        methods:{

        },
        components:{
        }
    }
</script>
<style>

</style>
