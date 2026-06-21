const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map",
  center: listing.geometry.coordinates,
  zoom: 11,
});

const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  offset: 25,
}).setHTML(`
  <h4>${listing.location}</h4>
  <p>Exact Location will be provided after booking</p>
`);

const marker = new mapboxgl.Marker({ color: "#34A853" })
  .setLngLat(listing.geometry.coordinates)
  .addTo(map);

// Show popup on hover
marker.getElement().addEventListener("mouseenter", () => {
  popup.setLngLat(listing.geometry.coordinates).addTo(map);
});

// Hide popup when mouse leaves
marker.getElement().addEventListener("mouseleave", () => {
  popup.remove();
});














