define({

    //基础地图
    //http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer
    "baseMapUrl": "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer",

    //全国省市界限
    "proviceBoundryUrl": "http://cache1.arcgisonline.cn/ArcGIS/rest/services/SimpleFeature/ChinaBoundaryLine/MapServer",

    //古村古镇点图层
    "villageTownUrl": "http://localhost:6080/arcgis/rest/services/ChinaHistoricVillages/MapServer",

    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingKey": "",

    //Add the home extent button to the toolbar
    "homeButton": true,

    //Add the geolocation button on the toolbar. Only displayed if browser supports geolocation
    "locateButton": true,

    //When true display a scalebar on the map
    "scalebar": true,

    //放大级别
    "zoom": 4,

    //地图中心[112,34]
    "center": [112, 34],

    //地图初始范围
    "extent": "",

    "searchLayers": [{
        "id": "",
        "fields": []
    }],

    //Set of tools that will be added to the toolbar
    "tools": [
        {
            "name": "legend",
            "enabled": true
        },
        {
            "name": "bookmarks",
            "enabled": true
        },
        {
            "name": "layers",
            "enabled": true
        },
        {
            "name": "basemap",
            "enabled": true
        },
        {
            "name": "overview",
            "enabled": true
        },
        {
            "name": "measure",
            "enabled": true
        },
        {
            "name": "edit",
            "enabled": true,
            "toolbar": false
        },
        {
            "name": "print",
            "enabled": true,
            "legend": false,
            "layouts": false,
            "format": "pdf"
        },
        {
            "name": "details",
            "enabled": true
        },
        {
            "name": "share",
            "enabled": true
        }
    ],

    //Set the active tool on the toolbar. Note home and locate can't be the active tool.Set to "" to display no tools at startup
    "activeTool": "legend"
});
