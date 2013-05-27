/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-5-27
 * Time: 下午4:44
 * To change this template use File | Settings | File Templates.
 */

// simulate the data for manipulating
var data = {
    "results": [
        {
        "id": "1",
        "status": "New",
        "date": "01/06/2013",
        "time": "24:00",
        "Multi/Single": "Both",
        "SIOC": "Non-SIOC",
        "Gilt": "yes",
        "Hazmat": "yes",
        "ASIN": "12341234"
    },{
        "id": "2",
        "status": "New",
        "date": "01/06/2013",
        "time": "24:00",
        "Multi/Single": "Single",
        "SIOC": "Non-SIOC",
        "Gilt": "yes",
        "Hazmat": "yes",
        "ASIN": "1234123455123"
    },{
        "id": "3",
        "status": "New",
        "date": "01/06/2013",
        "time": "24:00",
        "Multi/Single": "Multi",
        "SIOC": "SIOC",
        "Gilt": "yes",
        "Hazmat": "no",
        "ASIN": "123451234"
    },{
        "id": "4",
        "status": "Canceled",
        "date": "01/06/2013",
        "time": "24:00",
        "Multi/Single": "Single",
        "SIOC": "Both",
        "Gilt": "no",
        "Hazmat": "yes",
        "ASIN": "1241234"
    },{
        "id": "5",
        "status": "Packed",
        "date": "01/06/2013",
        "time": "24:00",
        "Multi/Single": "Single",
        "SIOC": "SIOC",
        "Gilt": "no",
        "Hazmat": "no",
        "ASIN": "123412431234"
    },{
        "id": "6",
        "status": "Accepted",
        "date": "01/06/2013",
        "time": "24:00",
        "Multi/Single": "Both",
        "SIOC": "SIOC",
        "Gilt": "yes",
        "Hazmat": "yes",
        "ASIN": "1234151234"
    },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        },{
            "id": "2",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Non-SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234123455123"
        },{
            "id": "3",
            "status": "New",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Multi",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "no",
            "ASIN": "123451234"
        },{
            "id": "4",
            "status": "Canceled",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "Both",
            "Gilt": "no",
            "Hazmat": "yes",
            "ASIN": "1241234"
        },{
            "id": "5",
            "status": "Packed",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Single",
            "SIOC": "SIOC",
            "Gilt": "no",
            "Hazmat": "no",
            "ASIN": "123412431234"
        },{
            "id": "6",
            "status": "Accepted",
            "date": "01/06/2013",
            "time": "24:00",
            "Multi/Single": "Both",
            "SIOC": "SIOC",
            "Gilt": "yes",
            "Hazmat": "yes",
            "ASIN": "1234151234"
        }
    ]
}
