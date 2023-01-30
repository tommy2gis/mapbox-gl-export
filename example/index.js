/*
 * @Author: shitao
 * @Date: 2023-01-30 14:55:23
 * @LastEditTime: 2023-01-30 15:05:20
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \mapbox-gl-export\example\index.js
 * 无锡四维时空信息科技有限公司
 */
import mapboxgl from 'mapbox-gl';
import { MapboxExportControl, Size, PageOrientation, Format, DPI} from '../lib/index';
import '../css/styles.css';

(()=>{
    // mapboxgl.accessToken='your mapbox access token'
    const map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/mapbox/streets-v11',
        style:'https://narwassco.github.io/mapbox-stylefiles/unvt/style.json',
        center: [35.87063, -1.08551],
        zoom: 12,
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