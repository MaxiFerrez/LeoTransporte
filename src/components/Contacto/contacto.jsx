import React, { useState } from 'react';
import styles from './contacto.module.css';
import Swal from "sweetalert2";
import logo from '../../assets/logo-color.png';
import { useForm } from 'react-hook-form';


export default function TuComponente() {
    
    //Estados y metodos del form validate
    const { register, handleSubmit, formState: { errors } /* ,reset */ } = useForm();

    //Evento que se lanza en onclick para el envio del formulario
    const onSubmit = data => {
        fetch('https://transportesleo.com.ar/form/send_mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.isOk) {
                    Swal.fire({
                        title: 'Gracias por contactarnos',
                        imageUrl: logo,
                        imageHeight: 160,
                        imageWidth: 350,
                        text: 'En breve le enviaremos el presupuesto',
                        confirmButtonColor: 'rgb(133, 15, 15)',
                    })
                    /* data.target.reset(); */
                    
                    
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error al enviar el correo',
                        text: result.msj,
                        text: 'Algo salio mal, vuelva a intentarlo en unos minutos',
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <> <div className={styles.fondo_contact}>
            <div className={styles.fondo_blur}>

                <form /* id='Contacto' action="https://formsubmit.co/ad7b8bb443dd65c80f88c66d08ed9d8e" */ className={styles.contact_form} /* method='POST' */ onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.title_contact}><span className={styles.title_1}>CONSULTE</span> <span className={styles.title_2}> SU VIAJE</span></div>
                    <div className={styles.inputContainer}>
                        <label className={styles.labelContainer}>NOMBRE Y APELLIDO</label>
                        <input
                            type="text"
                            placeholder="Nombre y Apellido"
                            name="nombre"
                            {...register("nombre", {})}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.labelContainer}>MAIL</label>
                        <input
                            type="email"
                            placeholder="email@correo.com"
                            name="correo"
                            className={styles.inputField}
                            {...register("correo", {})}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.labelContainer}>ORIGEN</label>
                        <input
                            type="text"
                            placeholder="Desde donde viajas?"
                            name="origen"
                            className={styles.inputField}
                            {...register("origen", {})}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.labelContainer}>DESTINO</label>
                        <input
                            type="text"
                            placeholder="Hasta donde viajas?"
                            name="destino"
                            className={styles.inputField}
                            {...register("destino", {})}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.labelContainer}>FECHA DE SALIDA</label>
                        <input
                            type="date"
                            name="fechaSalida"
                            className={styles.inputField}
                            {...register("fechaSalida", {})}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.labelContainer}>FECHA DE REGRESO</label>
                        <input
                            type="date"
                            name="fechaRegreso"
                            className={styles.inputField}
                            {...register("fechaRegreso", {})}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.labelContainer}>CANTIDAD DE PERSONAS</label>
                        <input
                            type="number"
                            placeholder="Cuantas personas viajan?"
                            name="cantPers"
                            className={styles.inputField}
                            {...register("cantPers", {})}
                            required
                        />
                    </div>
                    <button className={styles.button_contact} type="submit">ENVIAR</button>
                </form>
            </div>
        </div>
        </>
    );
}