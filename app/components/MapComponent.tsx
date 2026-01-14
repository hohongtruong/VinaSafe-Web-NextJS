'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
  const [Map, setMap] = useState<any>(null)
  const [customIcon, setCustomIcon] = useState<any>(null)

  useEffect(() => {
    // Import leaflet + react-leaflet chỉ ở client
    Promise.all([
      import('leaflet'),
      import('react-leaflet'),
    ]).then(([L, RL]) => {
      const icon = new L.Icon({
        iconUrl: '/images/icon/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })

      setCustomIcon(icon)
      setMap(RL)
    })
  }, [])

  if (!Map) return null

  const { MapContainer, TileLayer, Marker, Popup } = Map

  return (
    <MapContainer
      center={[20.9810265, 105.8147015]}
      zoom={17}
      style={{
        height: '400px',
        width: '100%',
        maxWidth: '80rem',
        margin: '0 auto',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,.1)',
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      {customIcon && (
        <Marker
          position={[20.9810265, 105.8147015]}
          icon={customIcon}
        >
          <Popup>
            <b>VINASAFE</b><br />
            Số 34 TT2, KĐT Mới Đại Kim, Phường Định Công, Hà Nội
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default dynamic(() => Promise.resolve(MapComponent), {
  ssr: true,
})