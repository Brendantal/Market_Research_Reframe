var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AreaMedianIncome_1 = new ol.format.GeoJSON();
var features_AreaMedianIncome_1 = format_AreaMedianIncome_1.readFeatures(json_AreaMedianIncome_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaMedianIncome_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaMedianIncome_1.addFeatures(features_AreaMedianIncome_1);
var lyr_AreaMedianIncome_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaMedianIncome_1, 
                style: style_AreaMedianIncome_1,
                popuplayertitle: "Area Median Income",
                interactive: true,
    title: 'Area Median Income<br />\
    <img src="styles/legend/AreaMedianIncome_1_0.png" /> 1<br />\
    <img src="styles/legend/AreaMedianIncome_1_1.png" /> 2<br />\
    <img src="styles/legend/AreaMedianIncome_1_2.png" /> 3<br />\
    <img src="styles/legend/AreaMedianIncome_1_3.png" /> 4<br />\
    <img src="styles/legend/AreaMedianIncome_1_4.png" /> 5<br />\
    <img src="styles/legend/AreaMedianIncome_1_5.png" /> <br />'
        });
var format_ManufacturingBoomtowns_2 = new ol.format.GeoJSON();
var features_ManufacturingBoomtowns_2 = format_ManufacturingBoomtowns_2.readFeatures(json_ManufacturingBoomtowns_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturingBoomtowns_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturingBoomtowns_2.addFeatures(features_ManufacturingBoomtowns_2);
var lyr_ManufacturingBoomtowns_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturingBoomtowns_2, 
                style: style_ManufacturingBoomtowns_2,
                popuplayertitle: "Manufacturing Boomtowns",
                interactive: true,
    title: 'Manufacturing Boomtowns<br />\
    <img src="styles/legend/ManufacturingBoomtowns_2_0.png" /> <br />\
    <img src="styles/legend/ManufacturingBoomtowns_2_1.png" /> 1<br />\
    <img src="styles/legend/ManufacturingBoomtowns_2_2.png" /> 2<br />\
    <img src="styles/legend/ManufacturingBoomtowns_2_3.png" /> 3<br />\
    <img src="styles/legend/ManufacturingBoomtowns_2_4.png" /> 4<br />\
    <img src="styles/legend/ManufacturingBoomtowns_2_5.png" /> 5<br />'
        });
var format_BoomtownClustersforGIS_3 = new ol.format.GeoJSON();
var features_BoomtownClustersforGIS_3 = format_BoomtownClustersforGIS_3.readFeatures(json_BoomtownClustersforGIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoomtownClustersforGIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoomtownClustersforGIS_3.addFeatures(features_BoomtownClustersforGIS_3);cluster_BoomtownClustersforGIS_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BoomtownClustersforGIS_3
});
var lyr_BoomtownClustersforGIS_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BoomtownClustersforGIS_3, 
                style: style_BoomtownClustersforGIS_3,
                popuplayertitle: "Boomtown Clusters for GIS",
                interactive: true,
                title: '<img src="styles/legend/BoomtownClustersforGIS_3.png" /> Boomtown Clusters for GIS'
            });
var format_SkiCounties_4 = new ol.format.GeoJSON();
var features_SkiCounties_4 = format_SkiCounties_4.readFeatures(json_SkiCounties_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SkiCounties_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkiCounties_4.addFeatures(features_SkiCounties_4);
var lyr_SkiCounties_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SkiCounties_4, 
                style: style_SkiCounties_4,
                popuplayertitle: "Ski Counties",
                interactive: true,
    title: 'Ski Counties<br />\
    <img src="styles/legend/SkiCounties_4_0.png" /> 13<br />\
    <img src="styles/legend/SkiCounties_4_1.png" /> 17<br />\
    <img src="styles/legend/SkiCounties_4_2.png" /> 19<br />\
    <img src="styles/legend/SkiCounties_4_3.png" /> 20<br />\
    <img src="styles/legend/SkiCounties_4_4.png" /> 21<br />\
    <img src="styles/legend/SkiCounties_4_5.png" /> <br />'
        });
var format_MountainTownsforGIS_5 = new ol.format.GeoJSON();
var features_MountainTownsforGIS_5 = format_MountainTownsforGIS_5.readFeatures(json_MountainTownsforGIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountainTownsforGIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountainTownsforGIS_5.addFeatures(features_MountainTownsforGIS_5);
var lyr_MountainTownsforGIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountainTownsforGIS_5, 
                style: style_MountainTownsforGIS_5,
                popuplayertitle: "Mountain Towns for GIS",
                interactive: true,
                title: '<img src="styles/legend/MountainTownsforGIS_5.png" /> Mountain Towns for GIS'
            });
var format_IECCAdoptionState_6 = new ol.format.GeoJSON();
var features_IECCAdoptionState_6 = format_IECCAdoptionState_6.readFeatures(json_IECCAdoptionState_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IECCAdoptionState_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IECCAdoptionState_6.addFeatures(features_IECCAdoptionState_6);
var lyr_IECCAdoptionState_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IECCAdoptionState_6, 
                style: style_IECCAdoptionState_6,
                popuplayertitle: "IECC Adoption - State",
                interactive: true,
    title: 'IECC Adoption - State<br />\
    <img src="styles/legend/IECCAdoptionState_6_0.png" /> true<br />\
    <img src="styles/legend/IECCAdoptionState_6_1.png" /> <br />'
        });
var format_IECCAdoptionCBSA_7 = new ol.format.GeoJSON();
var features_IECCAdoptionCBSA_7 = format_IECCAdoptionCBSA_7.readFeatures(json_IECCAdoptionCBSA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IECCAdoptionCBSA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IECCAdoptionCBSA_7.addFeatures(features_IECCAdoptionCBSA_7);
var lyr_IECCAdoptionCBSA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IECCAdoptionCBSA_7, 
                style: style_IECCAdoptionCBSA_7,
                popuplayertitle: "IECC Adoption - CBSA",
                interactive: true,
    title: 'IECC Adoption - CBSA<br />\
    <img src="styles/legend/IECCAdoptionCBSA_7_0.png" /> true<br />\
    <img src="styles/legend/IECCAdoptionCBSA_7_1.png" /> <br />'
        });
var format_StatewideHousingReform_8 = new ol.format.GeoJSON();
var features_StatewideHousingReform_8 = format_StatewideHousingReform_8.readFeatures(json_StatewideHousingReform_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatewideHousingReform_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatewideHousingReform_8.addFeatures(features_StatewideHousingReform_8);
var lyr_StatewideHousingReform_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatewideHousingReform_8, 
                style: style_StatewideHousingReform_8,
                popuplayertitle: "Statewide Housing Reform",
                interactive: true,
    title: 'Statewide Housing Reform<br />\
    <img src="styles/legend/StatewideHousingReform_8_0.png" /> 1<br />\
    <img src="styles/legend/StatewideHousingReform_8_1.png" /> 2<br />\
    <img src="styles/legend/StatewideHousingReform_8_2.png" /> 3<br />\
    <img src="styles/legend/StatewideHousingReform_8_3.png" /> 3.5<br />\
    <img src="styles/legend/StatewideHousingReform_8_4.png" /> 4<br />\
    <img src="styles/legend/StatewideHousingReform_8_5.png" /> 4.5<br />\
    <img src="styles/legend/StatewideHousingReform_8_6.png" /> 5<br />\
    <img src="styles/legend/StatewideHousingReform_8_7.png" /> <br />'
        });
var format_LocalUpzoning_9 = new ol.format.GeoJSON();
var features_LocalUpzoning_9 = format_LocalUpzoning_9.readFeatures(json_LocalUpzoning_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalUpzoning_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalUpzoning_9.addFeatures(features_LocalUpzoning_9);
var lyr_LocalUpzoning_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalUpzoning_9, 
                style: style_LocalUpzoning_9,
                popuplayertitle: "Local Upzoning",
                interactive: true,
    title: 'Local Upzoning<br />\
    <img src="styles/legend/LocalUpzoning_9_0.png" /> 1<br />\
    <img src="styles/legend/LocalUpzoning_9_1.png" /> 2<br />\
    <img src="styles/legend/LocalUpzoning_9_2.png" /> 3<br />\
    <img src="styles/legend/LocalUpzoning_9_3.png" /> 4<br />\
    <img src="styles/legend/LocalUpzoning_9_4.png" /> 5<br />\
    <img src="styles/legend/LocalUpzoning_9_5.png" /> <br />'
        });
var format_ADUMarketSizing_10 = new ol.format.GeoJSON();
var features_ADUMarketSizing_10 = format_ADUMarketSizing_10.readFeatures(json_ADUMarketSizing_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADUMarketSizing_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADUMarketSizing_10.addFeatures(features_ADUMarketSizing_10);
var lyr_ADUMarketSizing_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADUMarketSizing_10, 
                style: style_ADUMarketSizing_10,
                popuplayertitle: "ADU Market Sizing",
                interactive: true,
    title: 'ADU Market Sizing<br />\
    <img src="styles/legend/ADUMarketSizing_10_0.png" /> 55<br />\
    <img src="styles/legend/ADUMarketSizing_10_1.png" /> 79<br />\
    <img src="styles/legend/ADUMarketSizing_10_2.png" /> 109<br />\
    <img src="styles/legend/ADUMarketSizing_10_3.png" /> 357<br />\
    <img src="styles/legend/ADUMarketSizing_10_4.png" /> 455<br />\
    <img src="styles/legend/ADUMarketSizing_10_5.png" /> 2310<br />\
    <img src="styles/legend/ADUMarketSizing_10_6.png" /> <br />'
        });
var format_TriplexMarketAnalysis_11 = new ol.format.GeoJSON();
var features_TriplexMarketAnalysis_11 = format_TriplexMarketAnalysis_11.readFeatures(json_TriplexMarketAnalysis_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriplexMarketAnalysis_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriplexMarketAnalysis_11.addFeatures(features_TriplexMarketAnalysis_11);
var lyr_TriplexMarketAnalysis_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriplexMarketAnalysis_11, 
                style: style_TriplexMarketAnalysis_11,
                popuplayertitle: "Triplex Market Analysis",
                interactive: true,
    title: 'Triplex Market Analysis<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_0.png" /> 12<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_1.png" /> 40<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_2.png" /> 58<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_3.png" /> 103<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_4.png" /> 115<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_5.png" /> <br />'
        });
var format_DuplexMarketAnalysis_12 = new ol.format.GeoJSON();
var features_DuplexMarketAnalysis_12 = format_DuplexMarketAnalysis_12.readFeatures(json_DuplexMarketAnalysis_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuplexMarketAnalysis_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuplexMarketAnalysis_12.addFeatures(features_DuplexMarketAnalysis_12);
var lyr_DuplexMarketAnalysis_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuplexMarketAnalysis_12, 
                style: style_DuplexMarketAnalysis_12,
                popuplayertitle: "Duplex Market Analysis",
                interactive: true,
    title: 'Duplex Market Analysis<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_0.png" /> Connecticut (52)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_1.png" /> New Hampshire (121)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_2.png" /> Vermont (160)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_3.png" /> Maine (255)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_4.png" /> Massachusetts (376)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_5.png" /> Rhode Island (407)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_6.png" /> <br />'
        });
var group_MarketSizing = new ol.layer.Group({
                                layers: [lyr_ADUMarketSizing_10,lyr_TriplexMarketAnalysis_11,lyr_DuplexMarketAnalysis_12,],
                                fold: "open",
                                title: "Market Sizing"});
var group_ZoningReform = new ol.layer.Group({
                                layers: [lyr_StatewideHousingReform_8,lyr_LocalUpzoning_9,],
                                fold: "open",
                                title: "Zoning Reform"});
var group_IECCAdoption = new ol.layer.Group({
                                layers: [lyr_IECCAdoptionState_6,lyr_IECCAdoptionCBSA_7,],
                                fold: "open",
                                title: "IECC Adoption"});
var group_MountainTowns = new ol.layer.Group({
                                layers: [lyr_SkiCounties_4,lyr_MountainTownsforGIS_5,],
                                fold: "open",
                                title: "Mountain Towns"});
var group_ManufacturingBoomtownAnalysis = new ol.layer.Group({
                                layers: [lyr_ManufacturingBoomtowns_2,lyr_BoomtownClustersforGIS_3,],
                                fold: "open",
                                title: "Manufacturing Boomtown Analysis"});
var group_AreaMedianIncome = new ol.layer.Group({
                                layers: [lyr_AreaMedianIncome_1,],
                                fold: "open",
                                title: "Area Median Income"});
var group_UnderlyingFiles = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "Underlying Files"});

lyr_OSMStandard_0.setVisible(true);lyr_AreaMedianIncome_1.setVisible(true);lyr_ManufacturingBoomtowns_2.setVisible(true);lyr_BoomtownClustersforGIS_3.setVisible(true);lyr_SkiCounties_4.setVisible(true);lyr_MountainTownsforGIS_5.setVisible(true);lyr_IECCAdoptionState_6.setVisible(true);lyr_IECCAdoptionCBSA_7.setVisible(true);lyr_StatewideHousingReform_8.setVisible(true);lyr_LocalUpzoning_9.setVisible(true);lyr_ADUMarketSizing_10.setVisible(true);lyr_TriplexMarketAnalysis_11.setVisible(true);lyr_DuplexMarketAnalysis_12.setVisible(true);
var layersList = [group_UnderlyingFiles,group_AreaMedianIncome,group_ManufacturingBoomtownAnalysis,group_MountainTowns,group_IECCAdoption,group_ZoningReform,group_MarketSizing];
lyr_AreaMedianIncome_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'STUSPS': 'STUSPS', 'NAMELSADCO': 'NAMELSADCO', 'STATE_NAME': 'STATE_NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'AMI Only_Geographic Area Name': 'AMI Only_Geographic Area Name', 'AMI Only_Households--Total': 'Total Households', 'AMI Only_Household Median income': 'Household Median Income', 'AMI Only_Income Quintile': 'Income Quintile', });
lyr_ManufacturingBoomtowns_2.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Boomtown Shortlist_GeoName': 'Boomtown Shortlist_GeoName', 'Boomtown Shortlist_OVERALL SCORE': 'Overall Score', 'Boomtown Shortlist_OVERALL RANK': 'Overall Rank', 'Boomtown Shortlist_field_5': 'Quintile', 'Boomtown Shortlist_MANUFACTURING SCORE (100)': 'Manufacturing Score', 'Boomtown Shortlist_MANUFACTURING RANK': 'Manufacturing Rank', 'Boomtown Shortlist_HOUSING DEMAND (50)': 'Housing Demand', 'Boomtown Shortlist_HOUSING DEMAND RANK': 'Housing Demand Rank', 'Boomtown Shortlist_ECONOMIC VITALITY SCORE (35': 'Economic Vitality Score', 'Boomtown Shortlist_ECONOMIC VITALITY RANK': 'Economic Vitality Rank', 'Boomtown Shortlist_NET MIGRATION SCORE (15)': 'Net Migration Score', 'Boomtown Shortlist_NET MIGRATION RANK': 'Net Migration Rank', 'Boomtown Shortlist_CSAFP': 'Boomtown Shortlist_CSAFP', 'Boomtown Shortlist_field_15': 'Boomtown Shortlist_field_15', 'Boomtown Shortlist_field_16': 'Boomtown Shortlist_field_16', 'Boomtown Shortlist_field_17': 'Boomtown Shortlist_field_17', 'Boomtown Shortlist_field_18': 'Boomtown Shortlist_field_18', 'Boomtown Shortlist_field_19': 'Boomtown Shortlist_field_19', 'Boomtown Shortlist_field_20': 'Boomtown Shortlist_field_20', 'Boomtown Shortlist_field_21': 'Boomtown Shortlist_field_21', 'Boomtown Shortlist_field_22': 'Boomtown Shortlist_field_22', });
lyr_BoomtownClustersforGIS_3.set('fieldAliases', {'CBSA': 'CBSA', 'MARKET NAME': 'MARKET NAME', 'Cluster': 'Cluster', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SkiCounties_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Mountain Counties for GIS_Location': 'Mountain Counties for GIS_Location', 'Mountain Counties for GIS_County municipalities': 'Municipalities', 'Mountain Counties for GIS_Development Incentives Score': 'Development Incentives Score', 'Mountain Counties for GIS_Public-Private Partnership Score': 'Public-Private Partnership Score', 'Mountain Counties for GIS_ADU Score': 'ADU Score', 'Mountain Counties for GIS_Overall Score (25)': 'overall Score', 'Mountain Counties for GIS_Overall Development Incentive Score': 'Overall Incentives SCore', 'Mountain Counties for GIS_PSF Construction Costs': 'PSF Construction Costs', 'Mountain Counties for GIS_Housing Production Need': 'Housing Production Need', 'Mountain Counties for GIS_field_11': 'Mountain Counties for GIS_field_11', 'Mountain Counties for GIS_field_12': 'Mountain Counties for GIS_field_12', });
lyr_MountainTownsforGIS_5.set('fieldAliases', {'Town': 'Town', 'Development Incentives Score': 'Development Incentives Score', 'Public-Private Partnership Score': 'Public-Private Partnership Score', 'ADU Score': 'ADU Score', 'Overall Score (25)': 'Overall Score (25)', 'PSF Construction Costs': 'PSF Construction Costs', 'Housing Production Need': 'Housing Production Need', 'Latitude': 'Latitude', 'field_9': 'field_9', 'Longitude': 'Longitude', });
lyr_IECCAdoptionState_6.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'IECC Adoption_City FIPS': 'IECC Adoption_City FIPS', 'IECC Adoption_Name': 'IECC Adoption_Name', 'IECC Adoption_IECC Adoption': 'IECC Adoption_IECC Adoption', });
lyr_IECCAdoptionCBSA_7.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'IECC Adoption_State FIPS': 'IECC Adoption_State FIPS', 'IECC Adoption_Name': 'IECC Adoption_Name', 'IECC Adoption_IECC Adoption': 'IECC Adoption_IECC Adoption', });
lyr_StatewideHousingReform_8.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Housing Policy_State_GIS_FIPS': 'Housing Policy_State_GIS_FIPS', 'Housing Policy_State_GIS_Description': 'Description', 'Housing Policy_State_GIS_Dedicated Funds': 'Dedicated Funding Sources', 'Housing Policy_State_GIS_Density Bonus': 'Density Bonus', 'Housing Policy_State_GIS_ADU Reform': 'ADU Reform', 'Housing Policy_State_GIS_Duplex Statewide?': 'Duplexes Permited Statewide?', 'Housing Policy_State_GIS_Triplex Statewide?': 'Triplexes Permitted Statewide?', 'Housing Policy_State_GIS_Notes': 'Notes', 'Housing Policy_State_GIS_Score': 'Overall Score', });
lyr_LocalUpzoning_9.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Upzoning Sheet for GIS_CBSA': 'Upzoning Sheet for GIS_CBSA', 'Upzoning Sheet for GIS_Municipality': 'Municipality', 'Upzoning Sheet for GIS_State': 'State', 'Upzoning Sheet for GIS_state_short': 'Upzoning Sheet for GIS_state_short', 'Upzoning Sheet for GIS_region': 'Upzoning Sheet for GIS_region', 'Upzoning Sheet for GIS_Reform.Type': 'Reform Type', 'Upzoning Sheet for GIS_year': 'Year Passed', 'Upzoning Sheet for GIS_description': 'Description', 'Upzoning Sheet for GIS_ADU Score (5)': 'ADU Score (5)', 'Upzoning Sheet for GIS_Infill Development Score': 'Infill Development Score (10)', 'Upzoning Sheet for GIS_Combined Score (Unweighted)': 'Combined Score (Unweighted)', 'Upzoning Sheet for GIS_Combined Score (Weighted)': 'Combined Score (Weighted)', 'Upzoning Sheet for GIS_Score Quintiles': 'Quintile', });
lyr_ADUMarketSizing_10.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Market Sizing Summary_GIS_FIPS': 'Market Sizing Summary_GIS_FIPS', 'Market Sizing Summary_GIS_ADU - Low': 'ADU - Low Estimate', 'Market Sizing Summary_GIS_ADU - Middle': 'ADU - Middle Estimate', 'Market Sizing Summary_GIS_ADU - High': 'ADU - High Estimate', 'Market Sizing Summary_GIS_Duplex - Low': 'Market Sizing Summary_GIS_Duplex - Low', 'Market Sizing Summary_GIS_Duplex - Middle': 'Market Sizing Summary_GIS_Duplex - Middle', 'Market Sizing Summary_GIS_Duplex - High': 'Market Sizing Summary_GIS_Duplex - High', 'Market Sizing Summary_GIS_Triplex - Low': 'Market Sizing Summary_GIS_Triplex - Low', 'Market Sizing Summary_GIS_Triplex - Middle': 'Market Sizing Summary_GIS_Triplex - Middle', 'Market Sizing Summary_GIS_Triplex - High': 'Market Sizing Summary_GIS_Triplex - High', });
lyr_TriplexMarketAnalysis_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Market Sizing Summary_GIS_FIPS': 'Market Sizing Summary_GIS_FIPS', 'Market Sizing Summary_GIS_ADU - Low': 'Market Sizing Summary_GIS_ADU - Low', 'Market Sizing Summary_GIS_ADU - Middle': 'Market Sizing Summary_GIS_ADU - Middle', 'Market Sizing Summary_GIS_ADU - High': 'Market Sizing Summary_GIS_ADU - High', 'Market Sizing Summary_GIS_Duplex - Low': 'Market Sizing Summary_GIS_Duplex - Low', 'Market Sizing Summary_GIS_Duplex - Middle': 'Market Sizing Summary_GIS_Duplex - Middle', 'Market Sizing Summary_GIS_Duplex - High': 'Market Sizing Summary_GIS_Duplex - High', 'Market Sizing Summary_GIS_Triplex - Low': 'Triplex - Low Estimate', 'Market Sizing Summary_GIS_Triplex - Middle': 'Triplex - Middle Estimate', 'Market Sizing Summary_GIS_Triplex - High': 'Triplex - High Estimate', });
lyr_DuplexMarketAnalysis_12.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Market Sizing Summary_GIS_FIPS': 'Market Sizing Summary_GIS_FIPS', 'Market Sizing Summary_GIS_ADU - Low': 'ADU - Low Estimate', 'Market Sizing Summary_GIS_ADU - Middle': 'ADU - Middle Estimate', 'Market Sizing Summary_GIS_ADU - High': 'ADU - High Estimate', 'Market Sizing Summary_GIS_Duplex - Low': 'Duplex - Low Estimate', 'Market Sizing Summary_GIS_Duplex - Middle': 'Duplex - Middle Estimate', 'Market Sizing Summary_GIS_Duplex - High': 'Duplex - High Estimate', 'Market Sizing Summary_GIS_Triplex - Low': 'Triplex - Low Estimate', 'Market Sizing Summary_GIS_Triplex - Middle': 'T', 'Market Sizing Summary_GIS_Triplex - High': 'Market Sizing Summary_GIS_Triplex - High', });
lyr_AreaMedianIncome_1.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'STUSPS': 'Hidden', 'NAMELSADCO': 'Hidden', 'STATE_NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'AMI Only_Geographic Area Name': 'TextEdit', 'AMI Only_Households--Total': 'Range', 'AMI Only_Household Median income': 'Range', 'AMI Only_Income Quintile': 'Range', });
lyr_ManufacturingBoomtowns_2.set('fieldImages', {'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'MEMI': 'Hidden', 'MTFCC': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Boomtown Shortlist_GeoName': 'TextEdit', 'Boomtown Shortlist_OVERALL SCORE': 'TextEdit', 'Boomtown Shortlist_OVERALL RANK': 'Range', 'Boomtown Shortlist_field_5': 'Range', 'Boomtown Shortlist_MANUFACTURING SCORE (100)': 'TextEdit', 'Boomtown Shortlist_MANUFACTURING RANK': 'Range', 'Boomtown Shortlist_HOUSING DEMAND (50)': 'TextEdit', 'Boomtown Shortlist_HOUSING DEMAND RANK': 'Range', 'Boomtown Shortlist_ECONOMIC VITALITY SCORE (35': 'TextEdit', 'Boomtown Shortlist_ECONOMIC VITALITY RANK': 'Range', 'Boomtown Shortlist_NET MIGRATION SCORE (15)': 'TextEdit', 'Boomtown Shortlist_NET MIGRATION RANK': 'Range', 'Boomtown Shortlist_CSAFP': 'Hidden', 'Boomtown Shortlist_field_15': 'Hidden', 'Boomtown Shortlist_field_16': 'Hidden', 'Boomtown Shortlist_field_17': 'Hidden', 'Boomtown Shortlist_field_18': 'Hidden', 'Boomtown Shortlist_field_19': 'Hidden', 'Boomtown Shortlist_field_20': 'Hidden', 'Boomtown Shortlist_field_21': 'Hidden', 'Boomtown Shortlist_field_22': 'Hidden', });
lyr_BoomtownClustersforGIS_3.set('fieldImages', {'CBSA': 'Hidden', 'MARKET NAME': 'TextEdit', 'Cluster': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SkiCounties_4.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'COUNTYNS': 'Hidden', 'GEOID': 'TextEdit', 'GEOIDFQ': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'CLASSFP': 'Hidden', 'MTFCC': 'TextEdit', 'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'METDIVFP': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Mountain Counties for GIS_Location': 'TextEdit', 'Mountain Counties for GIS_County municipalities': 'TextEdit', 'Mountain Counties for GIS_Development Incentives Score': 'Range', 'Mountain Counties for GIS_Public-Private Partnership Score': 'Range', 'Mountain Counties for GIS_ADU Score': 'Range', 'Mountain Counties for GIS_Overall Score (25)': 'Range', 'Mountain Counties for GIS_Overall Development Incentive Score': 'Range', 'Mountain Counties for GIS_PSF Construction Costs': 'TextEdit', 'Mountain Counties for GIS_Housing Production Need': 'Range', 'Mountain Counties for GIS_field_11': 'Hidden', 'Mountain Counties for GIS_field_12': 'Hidden', });
lyr_MountainTownsforGIS_5.set('fieldImages', {'Town': 'TextEdit', 'Development Incentives Score': 'Range', 'Public-Private Partnership Score': 'Range', 'ADU Score': 'Range', 'Overall Score (25)': 'Range', 'PSF Construction Costs': 'TextEdit', 'Housing Production Need': 'Range', 'Latitude': 'TextEdit', 'field_9': 'Hidden', 'Longitude': 'TextEdit', });
lyr_IECCAdoptionState_6.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'IECC Adoption_City FIPS': 'Range', 'IECC Adoption_Name': 'TextEdit', 'IECC Adoption_IECC Adoption': 'CheckBox', });
lyr_IECCAdoptionCBSA_7.set('fieldImages', {'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'MEMI': 'TextEdit', 'MTFCC': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'IECC Adoption_State FIPS': 'Range', 'IECC Adoption_Name': 'TextEdit', 'IECC Adoption_IECC Adoption': 'CheckBox', });
lyr_StatewideHousingReform_8.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Housing Policy_State_GIS_FIPS': 'Hidden', 'Housing Policy_State_GIS_Description': 'TextEdit', 'Housing Policy_State_GIS_Dedicated Funds': 'CheckBox', 'Housing Policy_State_GIS_Density Bonus': 'CheckBox', 'Housing Policy_State_GIS_ADU Reform': 'CheckBox', 'Housing Policy_State_GIS_Duplex Statewide?': 'TextEdit', 'Housing Policy_State_GIS_Triplex Statewide?': 'TextEdit', 'Housing Policy_State_GIS_Notes': 'TextEdit', 'Housing Policy_State_GIS_Score': 'TextEdit', });
lyr_LocalUpzoning_9.set('fieldImages', {'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'GEOID': 'TextEdit', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'MEMI': 'Hidden', 'MTFCC': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Upzoning Sheet for GIS_CBSA': 'Hidden', 'Upzoning Sheet for GIS_Municipality': 'TextEdit', 'Upzoning Sheet for GIS_State': 'TextEdit', 'Upzoning Sheet for GIS_state_short': 'Hidden', 'Upzoning Sheet for GIS_region': 'Hidden', 'Upzoning Sheet for GIS_Reform.Type': 'TextEdit', 'Upzoning Sheet for GIS_year': 'TextEdit', 'Upzoning Sheet for GIS_description': 'TextEdit', 'Upzoning Sheet for GIS_ADU Score (5)': 'Range', 'Upzoning Sheet for GIS_Infill Development Score': 'Range', 'Upzoning Sheet for GIS_Combined Score (Unweighted)': 'Range', 'Upzoning Sheet for GIS_Combined Score (Weighted)': 'TextEdit', 'Upzoning Sheet for GIS_Score Quintiles': 'TextEdit', });
lyr_ADUMarketSizing_10.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Market Sizing Summary_GIS_FIPS': 'Range', 'Market Sizing Summary_GIS_ADU - Low': 'Range', 'Market Sizing Summary_GIS_ADU - Middle': 'Range', 'Market Sizing Summary_GIS_ADU - High': 'Range', 'Market Sizing Summary_GIS_Duplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Duplex - High': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Triplex - High': 'Hidden', });
lyr_TriplexMarketAnalysis_11.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'TextEdit', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Market Sizing Summary_GIS_FIPS': 'Range', 'Market Sizing Summary_GIS_ADU - Low': 'Hidden', 'Market Sizing Summary_GIS_ADU - Middle': 'Hidden', 'Market Sizing Summary_GIS_ADU - High': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Duplex - High': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Low': 'Range', 'Market Sizing Summary_GIS_Triplex - Middle': 'Range', 'Market Sizing Summary_GIS_Triplex - High': 'Range', });
lyr_DuplexMarketAnalysis_12.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Market Sizing Summary_GIS_FIPS': 'Hidden', 'Market Sizing Summary_GIS_ADU - Low': 'Hidden', 'Market Sizing Summary_GIS_ADU - Middle': 'Hidden', 'Market Sizing Summary_GIS_ADU - High': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Low': 'Range', 'Market Sizing Summary_GIS_Duplex - Middle': 'Range', 'Market Sizing Summary_GIS_Duplex - High': 'Range', 'Market Sizing Summary_GIS_Triplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Triplex - High': 'Hidden', });
lyr_AreaMedianIncome_1.set('fieldLabels', {'AFFGEOID': 'inline label - visible with data', 'STATE_NAME': 'inline label - visible with data', 'AMI Only_Geographic Area Name': 'inline label - visible with data', 'AMI Only_Households--Total': 'inline label - visible with data', 'AMI Only_Household Median income': 'inline label - visible with data', 'AMI Only_Income Quintile': 'inline label - visible with data', });
lyr_ManufacturingBoomtowns_2.set('fieldLabels', {'GEOID': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'Boomtown Shortlist_GeoName': 'inline label - visible with data', 'Boomtown Shortlist_OVERALL SCORE': 'inline label - visible with data', 'Boomtown Shortlist_OVERALL RANK': 'inline label - visible with data', 'Boomtown Shortlist_field_5': 'inline label - visible with data', 'Boomtown Shortlist_MANUFACTURING SCORE (100)': 'inline label - visible with data', 'Boomtown Shortlist_MANUFACTURING RANK': 'inline label - visible with data', 'Boomtown Shortlist_HOUSING DEMAND (50)': 'inline label - visible with data', 'Boomtown Shortlist_HOUSING DEMAND RANK': 'inline label - visible with data', 'Boomtown Shortlist_ECONOMIC VITALITY SCORE (35': 'inline label - visible with data', 'Boomtown Shortlist_ECONOMIC VITALITY RANK': 'inline label - visible with data', 'Boomtown Shortlist_NET MIGRATION SCORE (15)': 'inline label - visible with data', 'Boomtown Shortlist_NET MIGRATION RANK': 'inline label - visible with data', });
lyr_BoomtownClustersforGIS_3.set('fieldLabels', {'MARKET NAME': 'inline label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SkiCounties_4.set('fieldLabels', {'GEOID': 'inline label - visible with data', 'MTFCC': 'inline label - visible with data', 'Mountain Counties for GIS_Location': 'inline label - visible with data', 'Mountain Counties for GIS_County municipalities': 'inline label - visible with data', 'Mountain Counties for GIS_Development Incentives Score': 'inline label - visible with data', 'Mountain Counties for GIS_Public-Private Partnership Score': 'inline label - visible with data', 'Mountain Counties for GIS_ADU Score': 'inline label - visible with data', 'Mountain Counties for GIS_Overall Score (25)': 'inline label - visible with data', 'Mountain Counties for GIS_Overall Development Incentive Score': 'inline label - visible with data', 'Mountain Counties for GIS_PSF Construction Costs': 'inline label - visible with data', 'Mountain Counties for GIS_Housing Production Need': 'inline label - visible with data', });
lyr_MountainTownsforGIS_5.set('fieldLabels', {'Town': 'inline label - visible with data', 'Development Incentives Score': 'inline label - visible with data', 'Public-Private Partnership Score': 'inline label - visible with data', 'ADU Score': 'inline label - visible with data', 'Overall Score (25)': 'inline label - visible with data', 'PSF Construction Costs': 'inline label - visible with data', 'Housing Production Need': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_IECCAdoptionState_6.set('fieldLabels', {'STATEFP': 'inline label - visible with data', 'STATENS': 'inline label - visible with data', 'AFFGEOID': 'inline label - visible with data', 'GEOID': 'inline label - visible with data', 'STUSPS': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'LSAD': 'inline label - visible with data', 'ALAND': 'inline label - visible with data', 'AWATER': 'inline label - visible with data', 'IECC Adoption_City FIPS': 'inline label - visible with data', 'IECC Adoption_Name': 'inline label - visible with data', 'IECC Adoption_IECC Adoption': 'inline label - visible with data', });
lyr_IECCAdoptionCBSA_7.set('fieldLabels', {'CSAFP': 'inline label - visible with data', 'CBSAFP': 'inline label - visible with data', 'GEOID': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'NAMELSAD': 'inline label - visible with data', 'LSAD': 'inline label - visible with data', 'MEMI': 'inline label - visible with data', 'MTFCC': 'inline label - visible with data', 'ALAND': 'inline label - visible with data', 'AWATER': 'inline label - visible with data', 'INTPTLAT': 'inline label - visible with data', 'INTPTLON': 'inline label - visible with data', 'IECC Adoption_State FIPS': 'inline label - visible with data', 'IECC Adoption_Name': 'inline label - visible with data', 'IECC Adoption_IECC Adoption': 'inline label - visible with data', });
lyr_StatewideHousingReform_8.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Housing Policy_State_GIS_Description': 'inline label - visible with data', 'Housing Policy_State_GIS_Dedicated Funds': 'inline label - visible with data', 'Housing Policy_State_GIS_Density Bonus': 'inline label - visible with data', 'Housing Policy_State_GIS_ADU Reform': 'inline label - visible with data', 'Housing Policy_State_GIS_Duplex Statewide?': 'inline label - visible with data', 'Housing Policy_State_GIS_Triplex Statewide?': 'inline label - visible with data', 'Housing Policy_State_GIS_Notes': 'inline label - visible with data', 'Housing Policy_State_GIS_Score': 'inline label - visible with data', });
lyr_LocalUpzoning_9.set('fieldLabels', {'GEOID': 'inline label - always visible', 'Upzoning Sheet for GIS_Municipality': 'inline label - visible with data', 'Upzoning Sheet for GIS_State': 'inline label - visible with data', 'Upzoning Sheet for GIS_Reform.Type': 'header label - visible with data', 'Upzoning Sheet for GIS_year': 'inline label - visible with data', 'Upzoning Sheet for GIS_description': 'inline label - visible with data', 'Upzoning Sheet for GIS_ADU Score (5)': 'inline label - visible with data', 'Upzoning Sheet for GIS_Infill Development Score': 'inline label - visible with data', 'Upzoning Sheet for GIS_Combined Score (Unweighted)': 'inline label - visible with data', 'Upzoning Sheet for GIS_Combined Score (Weighted)': 'inline label - visible with data', 'Upzoning Sheet for GIS_Score Quintiles': 'inline label - visible with data', });
lyr_ADUMarketSizing_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Market Sizing Summary_GIS_FIPS': 'inline label - visible with data', 'Market Sizing Summary_GIS_ADU - Low': 'inline label - visible with data', 'Market Sizing Summary_GIS_ADU - Middle': 'inline label - visible with data', 'Market Sizing Summary_GIS_ADU - High': 'inline label - visible with data', });
lyr_TriplexMarketAnalysis_11.set('fieldLabels', {'GEOID': 'inline label - always visible', 'NAME': 'inline label - visible with data', 'Market Sizing Summary_GIS_FIPS': 'inline label - visible with data', 'Market Sizing Summary_GIS_Triplex - Low': 'header label - visible with data', 'Market Sizing Summary_GIS_Triplex - Middle': 'inline label - visible with data', 'Market Sizing Summary_GIS_Triplex - High': 'inline label - visible with data', });
lyr_DuplexMarketAnalysis_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Market Sizing Summary_GIS_Duplex - Low': 'inline label - visible with data', 'Market Sizing Summary_GIS_Duplex - Middle': 'inline label - visible with data', 'Market Sizing Summary_GIS_Duplex - High': 'inline label - visible with data', });
lyr_DuplexMarketAnalysis_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});