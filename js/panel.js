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
    init: function () {
        var t = this

        // initialize
        t.dataView.init()
        t.eventManage.init()
        t.check.init()
        t.filter.linkwork.init()
    },
    // manage the event lifecycle
    eventManage: {
        filter: $("button.btn-success"),
        batch: $("button.btn-batch"),
        loadIcon: $(".progress-striped"),
        init: function () {
            var t = this;

            t.filter.click(function () {
                panel.configurator();
                panel.dataView.table.after(t.loadIcon.show())
                panel.dataView.build()
            });
        }
    },

    // control the central  configuration of the option  in the panel
    configurator: function () {
        var t = this;
        t.configurator["status"] = $("input[name='status']:checked").val(),
        t.configurator["Multi/Single"] = $("input[name='items']:checked").val(),
        t.configurator["SIOC"] = $("input[name='SIOC']:checked").val(),
        t.configurator["Gilt"] = $("input[name='Gilt']:checked:visible").val() == "on" ? "yes" : "no",
        t.configurator["Hazmat"] = $("input[name='Hazmat']:checked:visible").val() == "on" ? "yes" : "no",
        t.configurator["ASIN"] = $("input[name='ASIN']:visible").val()
    }
    // Order Status

    ,
    //check the format of the input
    check: {
        input: $("input[type='text']"),
        init: function () {
            var t = this;

            t.input.focus(function () {
                var t = $(this);
                t.popover({ title: 'Notice', content: "The content of input is for filter datat to xxxxx, the format must be such as xxxxxx" })
                    .blur(function () {
                        $(this).popover('hide');
                    });
            })
        }
    },
    // the logic of the filter panel
    filter: {

        // bind the sub batch filter to the filter panel
        linkwork: {
            "control": $("input[name='status']:checked"),
            "container": $(".batch-con"),
            init: function () {
                var t = this

                t.link()
            },
            link: function () {
                var t = this,
                    btn = $("input[name='status']")

                //bind click
                btn.each(function () {
                    $(this).bind("click", function () {
                        var _t = $(this),
                            index = btn.index(_t)

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
        table: $(".table-striped"),
        init: function () {
            var t = this;
            t.data = panel.data

            // build the data
            // this shoud bind to the button
        },
        // build the data
        build: function () {
            var t = this;
            // query engine config
            t.filterConfig = {
                "status": panel.configurator["status"],
                "Multi/Single": panel.configurator["Multi/Single"],
                "SIOC": panel.configurator["SIOC"]
            },
                t.batchConfig = {
                    "Gilt": panel.configurator["Gilt"],
                    "Hazmat": panel.configurator["Hazmat"]
                },
                t.asinConfig = {
                    "ASIN": panel.configurator["ASIN"]
                }

            //manipulate the t.data and render it on ui
            t.data = t.query(panel.data, t.filterConfig)
            //render the data
            t.render(t.data)
        },
        /*
         * render the data in the ui
         * @params data {Object} the data to render in json format
         * */
        render: function (data) {
            var t = this,
                templ = t.template.html(),
                output = Mustache.render(templ, data)

            t.con.html(output)

            panel.eventManage.loadIcon.hide()
        },
        update: function () {

            // bind the filter and batch

        },
        /*
         * the core query function to implement the query list from source data
         * @params data {Object} data source for querying in json format
         * @params config {Object} configuration hashmap for filter
         * @return filterData {Object}
         * */
        query: function (data, config) {
            var _flag = true,
                collection  = $.grep(data.results, function (element, index) {
                                    _flag = true
                                    // iterate the config to check
                                    // element[key] == config[value]
                                    $.each(config, function (key, value) {
                                        if (element[key] != value) {
                                            _flag = false
                                        }

                                    })

                                    return _flag; // retain appropriate elements
                                });

            return {
                results: collection
            };
        }
    }
};

panel.init()