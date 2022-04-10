import React from 'react'

const AvatarIcon = ({initial}) => {
  return (
    <div
        style={{
            backgroundColor: '#E54065',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            width: 40,
            height: 40,
        }}
    >
        <span style={{marginLeft: 14, marginTop: 4, fontSize: 23, color: '#f4f5f9', position: 'absolute', fontWeight: 600}}>{initial}</span>
    </div>
  )
}

export default AvatarIcon