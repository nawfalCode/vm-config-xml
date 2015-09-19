/**
 * Created by Nawfal on 19-Sep-15.
 */

var xml2json=require('xml2js');
var js2xml=require('js2xmlparser');
var fileSystem=require('fs');
var parseString=xml2json.parseString(xmldata,function(err,data){
   console.dir(data);

});
