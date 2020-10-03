import React from 'react';
import mojito from '../assets/mojito2.jpg';
import cuba from '../assets/mojito3.jpg';
import girly from '../assets/sexonthebeach1.jpg';
import classic from '../assets/events1.jpg';
import mock from '../assets/cocktail1.jpg';
import tiki from '../assets/mixologyfire1.jpg';

export default function Soirees() {
  return (
    <section className='section'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>
            Soirées Thématiques <span>!</span>
          </h2>
        </div>
        <div className='soirees-cards-container'>
          {/* Single Card */}
          <article className='soiree'>
            <img className='soiree-img' src={mojito} alt='mojito-party' />
            <div className='soiree-info'>
              <h3 className='soiree-title'>Mojito Party</h3>
              <p className='soiree-desc'>
                Pouvant aller du Mijito classique à ceux revisité aux fruits,
                sans alcools, épicés etc…
                <br />
                <br />
                Simple mais bon et efficaces
              </p>
            </div>
          </article>
          {/* End Single Card */}
          {/* Single Card */}
          <article className='soiree'>
            <img className='soiree-img' src={cuba} alt='mojito-party' />
            <div className='soiree-info'>
              <h3 className='soiree-title'>Soirée Cuba</h3>
              <p className='soiree-desc'>
                Essayez les classiques Cubain avec le Mojito, Daïquiri ou encore
                le Cuba Libre.
              </p>
            </div>
          </article>
          {/* End Single Card */}
          {/* Single Card */}
          <article className='soiree'>
            <img className='soiree-img' src={tiki} alt='mojito-party' />
            <div className='soiree-info'>
              <h3 className='soiree-title'>Soirée Tiki</h3>
              <p className='soiree-desc'>
                Sans oublier l’incontournable Zombie, d’autres cocktails dans
                cet esprit festif viendrons apporter chaleur et exotisme à vos
                soirée.
                <br />
                Dress code obligatoire (chapeau de paille, short, chemise de
                vacances, collier à fleur…)!
              </p>
            </div>
          </article>
          {/* End Single Card */}
          {/* Single Card */}
          <article className='soiree'>
            <img className='soiree-img' src={girly} alt='mojito-party' />
            <div className='soiree-info'>
              <h3 className='soiree-title'>Soirée Fancy</h3>
              <p className='soiree-desc'>
                Au programme les « fancy drinks » ou encore « cocktails de
                femmes » (que de noms en vérité) tels que le cosmopolitain, le
                sex on the beach, le pink/white lady, Tequila sunrise…
              </p>
            </div>
          </article>
          {/* End Single Card */}
          {/* Single Card */}
          <article className='soiree'>
            <img className='soiree-img' src={classic} alt='mojito-party' />
            <div className='soiree-info'>
              <h3 className='soiree-title'>Soirée Classic Spirit</h3>
              <p className='soiree-desc'>
                Choisissez votre spiritueux favori et nous concocterons les
                classiques incontournables autour de celui-ci.
              </p>
            </div>
          </article>
          {/* End Single Card */}
          {/* Single Card */}
          <article className='soiree'>
            <img className='soiree-img' src={mock} alt='mojito-party' />
            <div className='soiree-info'>
              <h3 className='soiree-title'>Soirée Like a Virgin ! </h3>
              <p className='soiree-desc'>
                Un super menu de cocktail sans alcool superbement élaboré à
                partir de la gamme « Seed Lip » pour tous les goûts, petit et
                grand !
              </p>
            </div>
          </article>
          {/* End Single Card */}
        </div>
      </div>
    </section>
  );
}
