import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success(`Correo enviado exitosamente!`)

export const Form = () => {

  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // Enviar al servidor
    console.log(data);
    notify();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[280px] m-auto mb-10 sm:flex sm:items-start sm:gap-4 sm:max-w-[637px]" action="">
      <Toaster />
      <div className="sm:w-full">
        <input 
          className={`border  p-2.5 text-[10px] border-Gray rounded-[28px] w-full placeholder:text-[10px] focus:outline-none pl-4 ${errors.email && 'border-Light-Red'} sm:text-base`} 
          type="email" 
          placeholder="Please enter your email" 
          {...register(
            "email", 
            { 
              required: true,
              pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g 
            })
          }
        />
        {
          errors.email?.type === 'pattern' && <p className="text-Light-Red italic text-[10px] text-center mt-1 sm:text-left ml-4">Please provide a valid email address</p>
        }
        {
          errors.email?.type === 'required' && <p className="text-Light-Red italic text-[10px] text-center mt-1 sm:text-left ml-4">The field is required</p>
        }
      </div>
      
      <input className="bg-Blue text-white w-full rounded-[28px] text-[.625rem] font-bold p-2.5 mt-[10px] shadow-lg shadow-Blue/40 cursor-pointer sm:w-[240px] sm:mt-0 sm:text-base" type="submit" value="Notify Me" />

    </form>
  )
}
