/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-5-27
 * Time: 下午9:54
 * To change this template use File | Settings | File Templates.
 */

var panel = {
    init: function(){
        var t = this

        // initialize
        t.dataView.init()
    },
    dataView: {
        template : $("#temp_dataViewList"),
        init: function(){
            var t = this

            console.info("ddddddd")
        },
        render: function(){

        },
        update: function(){

        }
    }
}
panel.init()