import { useState } from 'react'
import { cats } from '../constants/cats'

const styles = {
  catstagramContaine: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '4rem'
  },
  photo: {
    justifyContent: 'center',
    width: '500px',
    maxWidth: '100vw',
    maxHeight: '100vw',
    objectFit: 'contain'
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
  return (
    <div style={styles.catstagramContainer}>
      <h1>Catstagram</h1>
      <div style={styles.container}>
        {cats.map((cat) => (
          <div key={cat.id}>
            <img style={styles.photo} alt={cat.src} src={cat.src} />
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
