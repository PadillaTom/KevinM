import React from 'react';
// Icons:
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='section'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>
            Contactez<span>-</span>nous
          </h2>
        </div>
        <div className='contact-section-container'>
          <div className='contact-info-icons-container-desktop'>
            <div className='contact-info-container'>
              <p>
                <AiOutlinePhone></AiOutlinePhone> +00 00 000 00 00
              </p>
              <p>
                <AiOutlineMail></AiOutlineMail> kevin@kevin.com
              </p>
            </div>
            <div className='contact-social-container-desktop'>
              <AiOutlineInstagram></AiOutlineInstagram>
              <AiOutlineFacebook></AiOutlineFacebook>
            </div>
          </div>
          <div className='contact-social-container'>
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineFacebook></AiOutlineFacebook>
          </div>
          <div className='contact-form-container'>
            <form className='contact-form'>
              <div className='form-title'>
                <h5>Formulaire de contact </h5>
              </div>
              <div className='form-inputs'>
                <input type='text' name='Nom' placeholder='Nom et Prénom' />
                <input type='email' name='Email' placeholder='E-mail' />
                <input type='text' name='Adresse' placeholder='Adresse' />
                <input type='text' name='Phone' placeholder='Téléphone' />
                <br></br>
                <textarea
                  name='Message'
                  rows='10'
                  placeholder='Type d’évènement, Nombre de personnes, Thème ou menu préféré...'
                ></textarea>
              </div>
              <input type='submit' value='Send' className='btn-submit-form' />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
