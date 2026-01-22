import React from 'react'

export interface Property {
  id: string
  title: string
  type: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  featured: boolean
  description: string
  amenities: string[]
}

export default function PropertyCard({ property }: { property: Property }) {
  const img = property.images[0] ?? ''
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
      <div style={{ height: 200, background: '#f3f4f6' }}>
        {img ? <img src={img} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
      </div>
      <div style={{ padding: 12 }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: 18 }}>{property.title}</h2>
        <p style={{ margin: 0, color: '#6b7280' }}>{property.location} • {property.type}</p>
        <p style={{ marginTop: 8, fontWeight: 700 }}>${property.price.toLocaleString()}</p>
        <p style={{ marginTop: 8, fontSize: 13 }}>{property.bedrooms} bd • {property.bathrooms} ba • {property.area} sqft</p>
        <p style={{ marginTop: 8, fontSize: 13, color: '#374151' }}>{property.description}</p>
      </div>
    </div>
  )
}