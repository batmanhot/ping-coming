import Logo from '../assets/images/logo.svg';

export const Hero = () => {
  return (
    <header className='text-center mt-20 mb-8'>

      <img className='m-auto mb-8 w-14 sm:w-[90px]' src={Logo} alt="Logo" />

      <h1 className='mb-4 text-[1.375rem] text-Gray sm:text-5xl'>We are launching  <span className='font-bold text-Very-Dark-Blue'>soon!</span></h1>

      <p className='text-Very-Dark-Blue text-xs font-light sm:text-xl'>Subscribe and get notified</p>

    </header>
  )
}
