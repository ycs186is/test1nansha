// js/script.js
const map = L.map('map').setView([22.8016, 113.5253], 13);

// 加载 WMS 图层
const wmsLayer = L.tileLayer.wms('http://localhost:8080/geoserver/test1/wms', {
  layers: 'test1:nansha',     // 格式：工作区名:图层名
  format: 'image/png',        // 必须与 GeoServer 支持的格式一致
  transparent: true,          // 允许底图透显
  version: '1.1.0',           // WMS 版本
  attribution: 'GeoServer WMS'
}).addTo(map);

// 可选：添加底图切换控件
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
});

L.control.layers({
  "街道地图": osmLayer
}, {
  "南沙区WMS图层": wmsLayer
}).addTo(map);