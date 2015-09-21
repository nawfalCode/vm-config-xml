/**
 * Created by Nawfal on 19-Sep-15.
 */

var fsIn = require('fs');
var fsOut = require('fs');
var tkn = require('tkn');
var outStr = "";
var newInboundValue = 500;
var newOutboundValue = 1500;


fsIn.readFile(__dirname + "/xmldata.xml", 'utf8', function (err, xmldata) {
    var tokens = xmldata.split('\r');

    console.dir(tokens.length);
    tokens.forEach(function (element, index, data) {
        if (element.indexOf("<inbound") > -1) {
            var bwAR = tkn.tokenise(element);
            element = element.replace(bwAR[2], newInboundValue);
            outStr += element;
        } else if (element.indexOf("<outbound") > -1) {
            var bwAR = tkn.tokenise(element);
            element = element.replace(bwAR[2], newOutboundValue);
            outStr += element;
        }
        else {
            outStr += element;
        }
    });
    fsOut.writeFile(__dirname + "/xmldata2.xml", outStr);
});

