ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([100.289531, 13.490253, 100.972575, 13.979320]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_district_2 = new ol.format.GeoJSON();
var features_district_2 = format_district_2.readFeatures(json_district_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_district_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_2.addFeatures(features_district_2);
var lyr_district_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_district_2, 
                style: style_district_2,
                popuplayertitle: "district",
                interactive: false,
                title: '<img src="styles/legend/district_2.png" /> district'
            });
var format_bma_zone_3 = new ol.format.GeoJSON();
var features_bma_zone_3 = format_bma_zone_3.readFeatures(json_bma_zone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bma_zone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bma_zone_3.addFeatures(features_bma_zone_3);
var lyr_bma_zone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bma_zone_3, 
                style: style_bma_zone_3,
                popuplayertitle: "bma_zone",
                interactive: false,
    title: 'bma_zone<br />\
    <img src="styles/legend/bma_zone_3_0.png" /> กรุงเทพกลาง<br />\
    <img src="styles/legend/bma_zone_3_1.png" /> กรุงเทพใต้<br />\
    <img src="styles/legend/bma_zone_3_2.png" /> กรุงเทพเหนือ<br />\
    <img src="styles/legend/bma_zone_3_3.png" /> กรุงเทพตะวันออก<br />\
    <img src="styles/legend/bma_zone_3_4.png" /> กรุงธนเหนือ<br />\
    <img src="styles/legend/bma_zone_3_5.png" /> กรุงธนใต้<br />'
        });
var format_99_4 = new ol.format.GeoJSON();
var features_99_4 = format_99_4.readFeatures(json_99_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_99_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_99_4.addFeatures(features_99_4);
var lyr_99_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_99_4, 
                style: style_99_4,
                popuplayertitle: "ลานกีฬาสาธารณะ 99 ลาน",
                interactive: true,
                title: '<img src="styles/legend/99_4.png" /> ลานกีฬาสาธารณะ 99 ลาน'
            });
var format_338_5 = new ol.format.GeoJSON();
var features_338_5 = format_338_5.readFeatures(json_338_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_338_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_338_5.addFeatures(features_338_5);
var lyr_338_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_338_5, 
                style: style_338_5,
                popuplayertitle: "ลานกีฬาโรงเรียน 338 ลาน",
                interactive: true,
                title: '<img src="styles/legend/338_5.png" /> ลานกีฬาโรงเรียน 338 ลาน'
            });
var format_471_6 = new ol.format.GeoJSON();
var features_471_6 = format_471_6.readFeatures(json_471_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_471_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_471_6.addFeatures(features_471_6);
var lyr_471_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_471_6, 
                style: style_471_6,
                popuplayertitle: "ลานกีฬาชุมชน 471 ลาน",
                interactive: true,
                title: '<img src="styles/legend/471_6.png" /> ลานกีฬาชุมชน 471 ลาน'
            });
var format_908ClassifybyTypeatDate011668_7 = new ol.format.GeoJSON();
var features_908ClassifybyTypeatDate011668_7 = format_908ClassifybyTypeatDate011668_7.readFeatures(json_908ClassifybyTypeatDate011668_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_908ClassifybyTypeatDate011668_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_908ClassifybyTypeatDate011668_7.addFeatures(features_908ClassifybyTypeatDate011668_7);
var lyr_908ClassifybyTypeatDate011668_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_908ClassifybyTypeatDate011668_7, 
                style: style_908ClassifybyTypeatDate011668_7,
                popuplayertitle: "ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Type at Date 01.16.68",
                interactive: true,
    title: 'ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Type at Date 01.16.68<br />\
    <img src="styles/legend/908ClassifybyTypeatDate011668_7_0.png" /> ลานกีฬาชุมชน 471 ลาน<br />\
    <img src="styles/legend/908ClassifybyTypeatDate011668_7_1.png" /> ลานกีฬาโรงเรียนl 338 ลาน<br />\
    <img src="styles/legend/908ClassifybyTypeatDate011668_7_2.png" /> ลานกีฬาสาธารณะ 99 ลาน<br />'
        });
var format_C611_8 = new ol.format.GeoJSON();
var features_C611_8 = format_C611_8.readFeatures(json_C611_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_C611_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C611_8.addFeatures(features_C611_8);
var lyr_C611_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C611_8, 
                style: style_C611_8,
                popuplayertitle: "ลานกีฬามาตรฐาน C 611 ลาน",
                interactive: true,
                title: '<img src="styles/legend/C611_8.png" /> ลานกีฬามาตรฐาน C 611 ลาน'
            });
var format_B179_9 = new ol.format.GeoJSON();
var features_B179_9 = format_B179_9.readFeatures(json_B179_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_B179_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B179_9.addFeatures(features_B179_9);
var lyr_B179_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B179_9, 
                style: style_B179_9,
                popuplayertitle: "ลานกีฬามาตรฐาน B 179 ลาน",
                interactive: true,
                title: '<img src="styles/legend/B179_9.png" /> ลานกีฬามาตรฐาน B 179 ลาน'
            });
var format_A118_10 = new ol.format.GeoJSON();
var features_A118_10 = format_A118_10.readFeatures(json_A118_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_A118_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A118_10.addFeatures(features_A118_10);
var lyr_A118_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A118_10, 
                style: style_A118_10,
                popuplayertitle: "ลานกีฬามาตรฐาน A 118 ลาน",
                interactive: true,
                title: '<img src="styles/legend/A118_10.png" /> ลานกีฬามาตรฐาน A 118 ลาน'
            });
var format_908ClassifybyGradeatDate011668_11 = new ol.format.GeoJSON();
var features_908ClassifybyGradeatDate011668_11 = format_908ClassifybyGradeatDate011668_11.readFeatures(json_908ClassifybyGradeatDate011668_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_908ClassifybyGradeatDate011668_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_908ClassifybyGradeatDate011668_11.addFeatures(features_908ClassifybyGradeatDate011668_11);
var lyr_908ClassifybyGradeatDate011668_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_908ClassifybyGradeatDate011668_11, 
                style: style_908ClassifybyGradeatDate011668_11,
                popuplayertitle: "ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Grade at Date 01.16.68",
                interactive: true,
    title: 'ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Grade at Date 01.16.68<br />\
    <img src="styles/legend/908ClassifybyGradeatDate011668_11_0.png" /> ลานกีฬามาตรฐาน A 118 ลาน<br />\
    <img src="styles/legend/908ClassifybyGradeatDate011668_11_1.png" /> ลานกีฬามาตรฐาน B 179 ลาน<br />\
    <img src="styles/legend/908ClassifybyGradeatDate011668_11_2.png" /> ลานกีฬามาตรฐาน C 611 ลาน<br />'
        });

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleMap_1.setVisible(true);lyr_district_2.setVisible(false);lyr_bma_zone_3.setVisible(true);lyr_99_4.setVisible(false);lyr_338_5.setVisible(false);lyr_471_6.setVisible(false);lyr_908ClassifybyTypeatDate011668_7.setVisible(false);lyr_C611_8.setVisible(false);lyr_B179_9.setVisible(false);lyr_A118_10.setVisible(true);lyr_908ClassifybyGradeatDate011668_11.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMap_1,lyr_district_2,lyr_bma_zone_3,lyr_99_4,lyr_338_5,lyr_471_6,lyr_908ClassifybyTypeatDate011668_7,lyr_C611_8,lyr_B179_9,lyr_A118_10,lyr_908ClassifybyGradeatDate011668_11];
lyr_district_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'pname': 'pname', 'z_code': 'z_code', 'num_female': 'num_female', 'num_male': 'num_male', 'num_health': 'num_health', 'num_temple': 'num_temple', 'num_comm': 'num_comm', 'num_hos': 'num_hos', 'num_sch': 'num_sch', 'area_dis': 'area_dis', });
lyr_bma_zone_3.set('fieldAliases', {'z_code': 'z_code', 'z_name': 'z_name', 'z_name_e': 'z_name_e', 'z_area': 'z_area', 'num_male': 'num_male', 'num_female': 'num_female', 'num_house': 'num_house', 'num_commu': 'num_commu', });
lyr_99_4.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_338_5.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_471_6.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_908ClassifybyTypeatDate011668_7.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_C611_8.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_B179_9.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_A118_10.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_908ClassifybyGradeatDate011668_11.set('fieldAliases', {'district': 'district', 'name': 'name', 'grade': 'grade', 'type_': 'type_', 'ownership': 'ownership', 'volunteer': 'volunteer', 'status': 'status', 'status_oth': 'status_oth', 'activity': 'activity', 'sport': 'sport', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'area_': 'area_', 'user_': 'user_', 'x': 'x', 'y': 'y', });
lyr_district_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'pname': 'TextEdit', 'z_code': 'TextEdit', 'num_female': 'TextEdit', 'num_male': 'TextEdit', 'num_health': 'Range', 'num_temple': 'Range', 'num_comm': 'Range', 'num_hos': 'Range', 'num_sch': 'Range', 'area_dis': 'TextEdit', });
lyr_bma_zone_3.set('fieldImages', {'z_code': 'TextEdit', 'z_name': 'TextEdit', 'z_name_e': 'TextEdit', 'z_area': 'TextEdit', 'num_male': 'Range', 'num_female': 'Range', 'num_house': 'Range', 'num_commu': 'Range', });
lyr_99_4.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_338_5.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_471_6.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_908ClassifybyTypeatDate011668_7.set('fieldImages', {'district': 'TextEdit', 'name': 'TextEdit', 'grade': 'TextEdit', 'type_': 'TextEdit', 'ownership': 'TextEdit', 'volunteer': 'TextEdit', 'status': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'sport': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'area_': 'TextEdit', 'user_': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_C611_8.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_B179_9.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_A118_10.set('fieldImages', {'district': '', 'name': '', 'grade': '', 'type_': '', 'ownership': '', 'volunteer': '', 'status': '', 'status_oth': '', 'activity': '', 'sport': '', 'sport_othe': '', 'public_space': '', 'area_': '', 'user_': '', 'x': '', 'y': '', });
lyr_908ClassifybyGradeatDate011668_11.set('fieldImages', {'district': 'TextEdit', 'name': 'TextEdit', 'grade': 'TextEdit', 'type_': 'TextEdit', 'ownership': 'TextEdit', 'volunteer': 'TextEdit', 'status': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'sport': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'area_': 'TextEdit', 'user_': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_district_2.set('fieldLabels', {'OBJECTID': 'no label', 'dcode': 'no label', 'dname': 'no label', 'dname_e': 'no label', 'pcode': 'no label', 'pname': 'no label', 'z_code': 'no label', 'num_female': 'no label', 'num_male': 'no label', 'num_health': 'no label', 'num_temple': 'no label', 'num_comm': 'no label', 'num_hos': 'no label', 'num_sch': 'no label', 'area_dis': 'no label', });
lyr_bma_zone_3.set('fieldLabels', {'z_code': 'no label', 'z_name': 'no label', 'z_name_e': 'no label', 'z_area': 'no label', 'num_male': 'no label', 'num_female': 'no label', 'num_house': 'no label', 'num_commu': 'no label', });
lyr_99_4.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_338_5.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_471_6.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_908ClassifybyTypeatDate011668_7.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_C611_8.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_B179_9.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_A118_10.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_908ClassifybyGradeatDate011668_11.set('fieldLabels', {'district': 'inline label - always visible', 'name': 'inline label - always visible', 'grade': 'inline label - always visible', 'type_': 'inline label - always visible', 'ownership': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'status': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'sport': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'area_': 'inline label - always visible', 'user_': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_908ClassifybyGradeatDate011668_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});