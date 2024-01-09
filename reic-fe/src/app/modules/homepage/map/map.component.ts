import { Component, ViewChild } from '@angular/core';
import { PolygonEntity } from 'src/app/model/PolygonEntity';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('map') mapElement!: any;
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    backgroundColor: '#000000',
    mapTypeId: 'terrain',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers: google.maps.Marker[] = [];
  polygon: google.maps.Polygon | undefined;
  splitPolygons: google.maps.Polygon[] = [];

  constructor(private mapService: MapService) { 
    
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  mapClick(event: google.maps.MapMouseEvent) {
    const coordinates = event.latLng!.toJSON();
    console.log(coordinates)
    this.addMarkerAt(coordinates);
  }

  drawPolygon() {
    this.clearPolygon();
    this.polygon = new google.maps.Polygon({
      paths: this.markers.map((marker) => marker.getPosition()!),
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.mapElement.googleMap,
    });
  }

  clearPolygon() {
    this.polygon?.setMap(null);
    this.polygon = undefined;
    for (let i = 0; i < this.splitPolygons.length; i++) {
      this.splitPolygons[i].setMap(null);
    }
    this.splitPolygons = [];
  }

  clearMarkers() {
    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];
    this.clearPolygon();
  }

  private addMarkerAt(coordinates: google.maps.LatLngLiteral) {
    const marker = new google.maps.Marker({
      position: coordinates,
      label: this.markers.length.toString(),
      map: this.mapElement.googleMap,
    });
    marker.addListener('click', (event: google.maps.MapMouseEvent) => {
      this.handleMarkerClick(marker, event);
    });
    this.markers.push(marker);
  }

  private handleMarkerClick(
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent
  ) {
    const index = this.markers.indexOf(marker);
    if (index > -1) {
      this.markers.splice(index, 1);
      marker.setMap(null);
      this.relabelMarkers();
      this.clearPolygon();
    }
  }

  private relabelMarkers() {
    this.markers.forEach((marker, index) => {
      marker.setLabel(index.toString());
    });
  }

  public colorPolygon() {
    let polygon_coordinates = this.markers.map((marker) => marker.getPosition()!);
    let polygon_coordinates1 = polygon_coordinates.map((coordinate) => {
      return {lat: coordinate.lat(), lng: coordinate.lng()}
    })
    this.mapService.getPolygonColors(polygon_coordinates1).subscribe(
      (data) => {
        this.clearPolygon();
        for (let i = 0; i < data.length; i++) {
          let polygonEntity: PolygonEntity = data[i];
          let polygon = new google.maps.Polygon({
            paths: polygonEntity.coordinates,
            strokeColor: polygonEntity.color,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: polygonEntity.color,
            fillOpacity: 0.35,
            map: this.mapElement.googleMap,
          });
          this.splitPolygons.push(polygon);
        }
      }
    );
  }
}
