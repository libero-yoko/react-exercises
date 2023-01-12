import { useState, useEffect } from 'react'
const styles = {
  catstagramContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
    border: 'solid 1px white'
  },
  photo: {
    justifyContent: 'center',
    width: '500px',
    height: '500px',
    maxWidth: '100vw',
    maxHeight: '100vw',
    objectFit: 'contain',
    rowGap: '1rem'
  },
  like: {
    padding: '1rem'
  },
  orange: {
    color: 'orange'
  },
  gray: {
    color: 'gray'
  }
}

export default function Catstagram() {
  const [data, setData] = useState()

  useEffect(() => {
    fetchImages().then((res) => setData(res))
  }, [])

  return (
    <div style={styles.catstagramContainer}>
      <h1>Catstagram</h1>
      <div style={styles.container}>
        {data?.photos?.map((photo) => (
          <div key={photo?.id}>
            <img
              style={styles.photo}
              alt={photo?.photographer}
              src={photo?.src?.original}
            />
            <Like />
          </div>
        ))}
      </div>
    </div>
  )
}

function Like() {
  const [liked, setLiked] = useState(false)
  const color = liked ? styles.orange : styles.gray
  return (
    <div onClick={() => setLiked(!liked)} style={{ ...color, ...styles.like }}>
      ★
    </div>
  )
}

async function fetchImages() {
  const url = 'https://api.pexels.com/v1/search?query=cats'
  const apiKey = process.env['REACT_APP_PEXELS_KEY']
  const result = await fetch(url, {
    headers: {
      Authorization: apiKey
    }
  })

  const data = await result.json()
  return data
}
