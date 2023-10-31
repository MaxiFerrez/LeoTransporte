import React, { useState } from 'react';
import styles from './footer.module.css';
import logo from '../../assets/logo.png';
import logoface from '../../assets/face.png';
import logoinsta from '../../assets/inta.png';
import logowhatsapp from '../../assets/Whatsapp.png';

export default function Footer() {

  return (
    <>
      <div className={styles.contenedor}>

        <div className={styles.imgfooter}>
          <img /* className={styles.imgLogoFooter} */ src={logo} alt="Logo de la pagina" />
        </div>

        <div className={styles.box1}>
          <div className={styles.colum1}>
            <span>Consultas: <a href="mailto:contacto@transportesleo.com.ar?subject=Solicitar presupuesto de viaje&body=Hola, me llamo 'nombre y apellido' , necesito saber la disponibilidad desde 'ingrese lugar de salida' hasta 'ingrese lugar de llegada' para el dia de salida: 'ingrese fecha de salida'  y el dia de regreso: 'ingrese dia de regreso' , somos 'cantidad de personas', Gracias">consultas@transportesleo.com.ar</a>  <br />
              Horarios de atención:<br /> Lunes a Viernes de 9 a 21 hs.<br />
              Sábados, Domingos y Feriados de 9 a 18hs <br />
              Busca nuestras oficinas en:<br />
              Calle Balmaceda - Rawson, San Juan, Argentina. <br />
            </span>
          </div>

          <div className={styles.colum2}>
            <div className={`${styles.fila} ${styles.uno}`}><a href="https://instagram.com/transportesleo?igshid=MzRlODBiNWFlZA==" target="_blank"><img className={styles.imgCl} src={logoinsta} alt="Instagram" /></a></div>
            <div className={`${styles.fila} ${styles.dos}`}><a href="https://www.facebook.com/ariel.espinosa.1485537?mibextid=ZbWKwL" target="_blank"><img className={styles.imgCl} src={logoface} alt="Facebook" /></a></div>
            <div className={`${styles.fila} ${styles.tres}`}><a href="https://api.whatsapp.com/send?phone=5492644892393" target="_blank"><img className={styles.imgCl} src={logowhatsapp} alt="Whatsapp" /></a></div>
          </div>
        </div>

      </div>
      <div className={styles.box2}>
          <span>Todos los derechos reservados<a href="https://zondapps.com/" target="_blank">zondapps.com</a></span>
        </div>
    </>
  );
}