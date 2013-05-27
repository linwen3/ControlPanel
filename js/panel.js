/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-5-27
 * Time: 下午9:54
 * To change this template use File | Settings | File Templates.
 */

var panel = {
    // simulate the data source from server/data.js,actually ,it would come from server api
    data: data,
    // the start of the global lifecycle
    init: function(){
        var t = this

        // initialize
        t.dataView.init()

        t.filter.linkwork.init()
    },
    // control the central  configuration of the option  in the panel
    configurator: {
       // Order Status
            // linkwork to the filters
       // date
       // time
       // items
       // SIOC
       // Track
    },
    //check the format of the input
    check: {

    },
    // the logic of the filter panel
    filter: {

        // bind the sub batch filter to the filter panel
        linkwork: {
            "control": $("input[name='status']:checked"),
            "container": $(".batch-con"),
            init: function(){
                var t = this
                console.info("control :", t.control)
                console.info("container :", t.container)

                t.link()
            },
            link: function(){
                var t = this,
                    btn = $("input[name='status']")

                //bind click
                btn.each(function(){
                  $(this).bind("click",function(){
                      var _t = $(this),
                          index = btn.index(_t)

                      console.info("index :", index)
                      t.container.hide()
                      $(t.container.get(index)).show()

                  })
                })

            }
        }
    },
    batch: {

    },
    dataView: {
        template: $("#temp_dataViewList"),
        con: $(".table-striped > tbody"),
        init: function(){
            var t = this;
                t.data = panel.data

            // build the data
            // this shoud bind to the button
            t.build()

        },
        // build the data
        build: function(){
            var t = this;

            //manipulate the t.data and render it on ui
            t.data = t.query(panel.data, panel.configurator)
            //render the data
            t.render(t.data)
        },
        /*
        * render the data in the ui
        * @params data {Object} the data to render in json format
        * */
        render: function(data){
            var t = this,
                templ = t.template.html(),
                output = Mustache.render(templ, data)

            t.con.html(output)
        },
        update: function(){

             // bind the filter and batch

        },
        /*
        * the core query function to implement the query list from source data
        * @params data {Object} data source for querying in json format
        * @params config {Object} configuration hashmap for filter
        * @return filterData {Object}
        * */
        query: function(data, config){
            var _flag = true;

            return   $.grep(data, function(element, index){
                        _flag = true
                        // iterate the config to check
                        // element[key] == config[value]
                        $.each(config, function(key, value){
                            if(element[key] != config[value]){
                                _flag = false
                            }

                        })

                        return _flag; // retain appropriate elements
                     });
        }
    }
}

panel.init()