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
        data: data,
        init: function(){
            var t = this

            t.render()

        },
        render: function(){
            var t = this,
                templ = t.template.html()
            console.info("data :", t.data)
            console.info("templ :", templ)
            console.info("output :", output)
            var output = Mustache.render(t.data, templ)


        },
        update: function(){

        }
    }
}

panel.init()