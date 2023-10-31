import React from 'react'
import styles from './home.module.css';

export default function home() {
  return (
    <>    
    <div className={styles.hero}>

      <div className={styles.h1}>
        <h1>Conectando destinos</h1>
      </div>

      <video className={styles.video} width="640" height="480" src={require('../../assets/paisaje-sj 720p.mp4')} 
      type='video/mp4' autoPlay muted loop preload='auto'>
      </video>    
    </div>

    <svg className={styles.wave} preserveAspectRatio='none' id="visual" viewBox="0 0 900 600" width="900" height="700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="300" fill="#ffffff"></rect><path d="M0 90L37.5 93.7C75 97.3 150 104.7 225 113.8C300 123 375 134 450 132.7C525 131.3 600 117.7 675 115.3C750 113 825 122 862.5 126.5L900 131L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#bb0a24" strokeLinecap="round" strokeLinejoin="miter"></path></svg>

    <div className={styles.containerhome}>
         
      <h2 className={styles.h2}>
        Ubicados en la Provincia de San Juan, somos tu solución para encontrar tu destino ideal. Disfrutá el viaje y llegá de la mejor forma. 
      </h2>

      <h3 className={styles.h3}>
        Te ofrecemos: <br/>
        Transporte ejecutivo | Viajes corta y larga distancia | Tour turístico por diferentes puntos de interés | Traslado deportivo 

        {/* <ul className={styles.ul}>
          <li>Transporte ejecutivo</li>
          <li>Viajes corta y larga distancia</li>
          <li>Tour turístico por diferentes puntos de interés</li>
          <li>Traslado deportivo</li>
        </ul> */}
      </h3>      
    </div>
    </>
    
  )
}


