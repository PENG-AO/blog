const initMap = (id, data) => {
    const map = L.map(id)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    const spot = Object.entries(data.spot).map((info) => {
        return L.marker(info[1]).bindPopup(info[0], { closeButton: false })
    })
    const span = Object.entries(data.span ?? {}).map((info) => {
        return L.circle(data.spot[info[0]], { fillColor: "blue", fillOpacity: 0.1, radius: info[1] })
    })
    const path = (data.path ?? []).map((names) => {
        return L.polyline(names.map((name) => data.spot[name]), { color: "grey" })
    })

    L.control.layers(null, {
        "地点": L.layerGroup(spot).addTo(map),
        ...(span.length > 0) && { "范围": L.layerGroup(span).addTo(map) },
        ...(path.length > 0) && { "路线": L.layerGroup(path).addTo(map) },
    }, { collapsed: false }).addTo(map)

    const bounds = L.polygon(Object.entries(data.spot).map((info) => info[1])).getBounds()
    const maxZoom = map.getBoundsZoom(bounds)
    map.fitBounds(bounds, { maxZoom: maxZoom > 14 ? 14 : maxZoom > 7 ? maxZoom - 1 : maxZoom })
}
