ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([100.311885, 13.490008, 100.956024, 13.979306]);
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
                popuplayertitle: 'district',
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
                popuplayertitle: 'bma_zone',
                interactive: false,
    title: 'bma_zone<br />\
    <img src="styles/legend/bma_zone_3_0.png" /> กรุงเทพกลาง<br />\
    <img src="styles/legend/bma_zone_3_1.png" /> กรุงเทพใต้<br />\
    <img src="styles/legend/bma_zone_3_2.png" /> กรุงเทพเหนือ<br />\
    <img src="styles/legend/bma_zone_3_3.png" /> กรุงเทพตะวันออก<br />\
    <img src="styles/legend/bma_zone_3_4.png" /> กรุงธนเหนือ<br />\
    <img src="styles/legend/bma_zone_3_5.png" /> กรุงธนใต้<br />' });
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
                popuplayertitle: 'ลานกีฬาสาธารณะ 99 ลาน',
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
                popuplayertitle: 'ลานกีฬาโรงเรียน 338 ลาน',
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
                popuplayertitle: 'ลานกีฬาชุมชน 471 ลาน',
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
                popuplayertitle: 'ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Type at Date 01.16.68',
                interactive: true,
    title: 'ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Type at Date 01.16.68<br />\
    <img src="styles/legend/908ClassifybyTypeatDate011668_7_0.png" /> ลานกีฬาชุมชน 471 ลาน<br />\
    <img src="styles/legend/908ClassifybyTypeatDate011668_7_1.png" /> ลานกีฬาโรงเรียนl 338 ลาน<br />\
    <img src="styles/legend/908ClassifybyTypeatDate011668_7_2.png" /> ลานกีฬาสาธารณะ 99 ลาน<br />' });
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
                popuplayertitle: 'ลานกีฬามาตรฐาน C 611 ลาน',
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
                popuplayertitle: 'ลานกีฬามาตรฐาน B 179 ลาน',
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
                popuplayertitle: 'ลานกีฬามาตรฐาน A 118 ลาน',
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
                popuplayertitle: 'ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Grade at Date 01.16.68',
                interactive: true,
    title: 'ลานกีฬากรุงเทพมหานคร จำนวน 908 ลาน Classify by Grade at Date 01.16.68<br />\
    <img src="styles/legend/908ClassifybyGradeatDate011668_11_0.png" /> ลานกีฬามาตรฐาน A 118 ลาน<br />\
    <img src="styles/legend/908ClassifybyGradeatDate011668_11_1.png" /> ลานกีฬามาตรฐาน B 179 ลาน<br />\
    <img src="styles/legend/908ClassifybyGradeatDate011668_11_2.png" /> ลานกีฬามาตรฐาน C 611 ลาน<br />' });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__12, 
                style: style__12,
                popuplayertitle: 'ห้องสมุดเพื่อการเรียนรู้บ้านจิรายุ-พูนทรัพย์',
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> ห้องสมุดเพื่อการเรียนรู้บ้านจิรายุ-พูนทรัพย์'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__13, 
                style: style__13,
                popuplayertitle: 'หอศิลปวัฒนธรรมกรุงเทพมหานคร',
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> หอศิลปวัฒนธรรมกรุงเทพมหานคร'
            });
var format_2_14 = new ol.format.GeoJSON();
var features_2_14 = format_2_14.readFeatures(json_2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_14.addFeatures(features_2_14);
var lyr_2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_14, 
                style: style_2_14,
                popuplayertitle: 'พิพิธภัณฑ์เด็กกรุงเทพมหานครแห่งที่ 2 (ทุ่งครุ)',
                interactive: true,
                title: '<img src="styles/legend/2_14.png" /> พิพิธภัณฑ์เด็กกรุงเทพมหานครแห่งที่ 2 (ทุ่งครุ)'
            });
var format_1_15 = new ol.format.GeoJSON();
var features_1_15 = format_1_15.readFeatures(json_1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_15.addFeatures(features_1_15);
var lyr_1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_15, 
                style: style_1_15,
                popuplayertitle: 'พิพิธภัณฑ์เด็กกรุงเทพมหานครแห่งที่ 1 (จตุจักร)',
                interactive: true,
                title: '<img src="styles/legend/1_15.png" /> พิพิธภัณฑ์เด็กกรุงเทพมหานครแห่งที่ 1 (จตุจักร)'
            });
var format_35_16 = new ol.format.GeoJSON();
var features_35_16 = format_35_16.readFeatures(json_35_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_35_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_16.addFeatures(features_35_16);
var lyr_35_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_16, 
                style: style_35_16,
                popuplayertitle: 'ห้องสมุดเพื่อการเรียนรู้กรุงเทพมหานคร 35 แห่ง',
                interactive: true,
                title: '<img src="styles/legend/35_16.png" /> ห้องสมุดเพื่อการเรียนรู้กรุงเทพมหานคร 35 แห่ง'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__17, 
                style: style__17,
                popuplayertitle: 'ศูนย์เยาวชนกรุงเทพมหานคร(ไทย-ญี่ปุ่น)',
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> ศูนย์เยาวชนกรุงเทพมหานคร(ไทย-ญี่ปุ่น)'
            });
var format_34_18 = new ol.format.GeoJSON();
var features_34_18 = format_34_18.readFeatures(json_34_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_34_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_18.addFeatures(features_34_18);
var lyr_34_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_18, 
                style: style_34_18,
                popuplayertitle: 'ศูนย์เยาวชนกรุงเทพมหานคร 34 แห่ง',
                interactive: true,
                title: '<img src="styles/legend/34_18.png" /> ศูนย์เยาวชนกรุงเทพมหานคร 34 แห่ง'
            });
var format_14_19 = new ol.format.GeoJSON();
var features_14_19 = format_14_19.readFeatures(json_14_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_14_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14_19.addFeatures(features_14_19);
var lyr_14_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14_19, 
                style: style_14_19,
                popuplayertitle: 'ศูนย์กีฬากรุงเทพมหานคร 14 แห่ง',
                interactive: true,
                title: '<img src="styles/legend/14_19.png" /> ศูนย์กีฬากรุงเทพมหานคร 14 แห่ง'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleMap_1.setVisible(true);lyr_district_2.setVisible(true);lyr_bma_zone_3.setVisible(false);lyr_99_4.setVisible(false);lyr_338_5.setVisible(false);lyr_471_6.setVisible(false);lyr_908ClassifybyTypeatDate011668_7.setVisible(false);lyr_C611_8.setVisible(false);lyr_B179_9.setVisible(false);lyr_A118_10.setVisible(false);lyr_908ClassifybyGradeatDate011668_11.setVisible(false);lyr__12.setVisible(false);lyr__13.setVisible(false);lyr_2_14.setVisible(false);lyr_1_15.setVisible(false);lyr_35_16.setVisible(false);lyr__17.setVisible(false);lyr_34_18.setVisible(false);lyr_14_19.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMap_1,lyr_district_2,lyr_bma_zone_3,lyr_99_4,lyr_338_5,lyr_471_6,lyr_908ClassifybyTypeatDate011668_7,lyr_C611_8,lyr_B179_9,lyr_A118_10,lyr_908ClassifybyGradeatDate011668_11,lyr__12,lyr__13,lyr_2_14,lyr_1_15,lyr_35_16,lyr__17,lyr_34_18,lyr_14_19];
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
lyr__12.set('fieldAliases', {'no': 'no', 'center': 'center', 'x': 'x', 'y': 'y', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'website': 'website', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', });
lyr__13.set('fieldAliases', {'no': 'no', 'center': 'center', 'x': 'x', 'y': 'y', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'website': 'website', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', });
lyr_2_14.set('fieldAliases', {'no': 'no', 'center': 'center', 'x': 'x', 'y': 'y', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'website': 'website', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', });
lyr_1_15.set('fieldAliases', {'no': 'no', 'center': 'center', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'website': 'website', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', 'x': 'x', 'y': 'y', });
lyr_35_16.set('fieldAliases', {'no': 'no', 'center': 'center', 'x': 'x', 'y': 'y', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'website': 'website', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', });
lyr__17.set('fieldAliases', {'no': 'no', 'center': 'center', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'website': 'website', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', 'x': 'x', 'y': 'y', });
lyr_34_18.set('fieldAliases', {'no': 'no', 'center': 'center', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcost': 'postcost', 'officehousr': 'officehousr', 'timeopen': 'timeopen', 'timeclose': 'timeclose', 'tel': 'tel', 'goolgemap': 'goolgemap', 'x': 'x', 'y': 'y', });
lyr_14_19.set('fieldAliases', {'no': 'no', 'center': 'center', 'address': 'address', 'khang': 'khang', 'district': 'district', 'postcode': 'postcode', 'officehours1': 'officehours1', 'officehours2': 'officehours2', 'tel': 'tel', 'facebook': 'facebook', 'googlemap': 'googlemap', 'bus': 'bus', 'carpark': 'carpark', 'x': 'x', 'y': 'y', });
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
lyr__12.set('fieldImages', {'no': 'CheckBox', 'center': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'website': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', });
lyr__13.set('fieldImages', {'no': 'CheckBox', 'center': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'website': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', });
lyr_2_14.set('fieldImages', {'no': 'CheckBox', 'center': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'website': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', });
lyr_1_15.set('fieldImages', {'no': 'CheckBox', 'center': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'website': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_35_16.set('fieldImages', {'no': 'Range', 'center': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'website': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', });
lyr__17.set('fieldImages', {'no': 'CheckBox', 'center': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'website': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_34_18.set('fieldImages', {'no': 'Range', 'center': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcost': 'Range', 'officehousr': 'TextEdit', 'timeopen': 'TextEdit', 'timeclose': 'TextEdit', 'tel': 'TextEdit', 'goolgemap': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_14_19.set('fieldImages', {'no': 'Range', 'center': 'TextEdit', 'address': 'TextEdit', 'khang': 'TextEdit', 'district': 'TextEdit', 'postcode': 'Range', 'officehours1': 'TextEdit', 'officehours2': 'TextEdit', 'tel': 'TextEdit', 'facebook': 'TextEdit', 'googlemap': 'TextEdit', 'bus': 'TextEdit', 'carpark': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
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
lyr__12.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'website': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', });
lyr__13.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'website': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', });
lyr_2_14.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'website': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', });
lyr_1_15.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'website': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', 'x': 'no label', 'y': 'no label', });
lyr_35_16.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'website': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', });
lyr__17.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'website': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', 'x': 'no label', 'y': 'no label', });
lyr_34_18.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcost': 'inline label - always visible', 'officehousr': 'inline label - always visible', 'timeopen': 'inline label - always visible', 'timeclose': 'inline label - always visible', 'tel': 'inline label - always visible', 'goolgemap': 'inline label - always visible', 'x': 'no label', 'y': 'no label', });
lyr_14_19.set('fieldLabels', {'no': 'no label', 'center': 'inline label - always visible', 'address': 'inline label - always visible', 'khang': 'inline label - always visible', 'district': 'inline label - always visible', 'postcode': 'inline label - always visible', 'officehours1': 'inline label - always visible', 'officehours2': 'inline label - always visible', 'tel': 'inline label - always visible', 'facebook': 'inline label - always visible', 'googlemap': 'inline label - always visible', 'bus': 'inline label - always visible', 'carpark': 'inline label - always visible', 'x': 'no label', 'y': 'no label', });
lyr_14_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});