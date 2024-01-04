import { Component, ViewChild } from '@angular/core';

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
}
