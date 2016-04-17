/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/4/9
 * Time: 08:22
 */
'use strict';
export default{
    props:{
        "store":{
            type:Array
        },
        "record":{
            type:Object
        },
    },
    data(){
        return {
            "style":{}
        }
    },
    ready(){
        
    },
    methods:{
        renderer:function () {
            let me = this;
            if(typeof me.setting.renderer == "function"){
                return me.setting.renderer(me.$get("record."+me.setting.dataIndex),me.record,me.rowIndex);
            }else{
                return me.$get("record."+me.setting.dataIndex);
            }
        }
    }
}