/*
 * @Author: shitao
 * @Date: 2023-01-30 14:55:23
 * @LastEditTime: 2023-01-30 17:18:10
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \mapbox-gl-export\example\index.js
 * 无锡四维时空信息科技有限公司
 */
import mapboxgl from '@tommy2gis/swsk-mapbox-gl';
import { MapboxExportControl, Size, PageOrientation, Format, DPI} from '../lib/index';
import '../css/styles.css';

(()=>{
    // mapboxgl.accessToken='your mapbox access token'
    const map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/mapbox/streets-v11',
        style:{
            version: 8,
            sources: {
            //   bujians: {
            //     type: "vector",
            //     scheme: "xyz",
            //     zoomOffset: -1,
            //     minzoom: 10,
            //     tiles: ["http://localhost:8087/geoserver/swsk/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:rgbj&STYLE=&TILEMATRIX=EPSG:4326:{z}&TILEMATRIXSET=EPSG:4326&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"],
            //   },
              YX2020: {
                type: "raster",
                minzoom: 10,
                tiles: ["http://222.184.244.132:8088/gateway/wmts/YX2020?service=WMTS&request=GetTile&version=1.0.0&layer=YX_YX2020&style=default&tileMatrixSet=c&format=tiles&height=256&width=256&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"],
                tileSize: 256,
              },
            },
            // sprite: config.sprites_bj,
            // glyphs: config.glyphs,
          
            layers: [
              {
                id: "background",
                type: "background",
                layout: { visibility: "visible" },
                paint: { "background-color": "#FFF", "background-opacity": 0.6 },
              },
              {
                id: "YX2020",
                type: "raster",
                source: "YX2020",
                minzoom: 10,
                maxzoom: 20,
              },
            ],
          },
        center: [120.561394,32.3937],
        zoom: 12,
        crs:"EPSG:4490",
        hash:true,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new MapboxExportControl({
        PageSize: Size.A3,
        PageOrientation: PageOrientation.Portrait,
        Format: Format.PNG,
        DPI: DPI[96],
        Crosshair: true,
        PrintableArea: true,
        Local: 'zh'
    }), 'top-right');
})()