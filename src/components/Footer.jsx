import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <footer>
      <ul className='flex gap-[11px] place-content-center mb-[27px]'>
        <li>
          <a className='size-8 border-2 border-Pale-Blue grid place-content-center rounded-full text-Blue hover:bg-Blue hover:text-white hover:border-Blue' href="https://www.youtube.com/@CodingTube" target='_blank'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a className='size-8 border-2 border-Pale-Blue grid place-content-center rounded-full text-Blue hover:bg-Blue hover:text-white hover:border-Blue' href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a className='size-8 border-2 border-Pale-Blue grid place-content-center rounded-full text-Blue hover:bg-Blue hover:text-white hover:border-Blue' href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <p className='text-center mb-20 text-Gray text-xs sm:text-base'>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  )
}
