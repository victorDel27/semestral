import React from 'react';
import imgLogo from '../img/logoLogin.png';

export const Persona = () => {
    return (
        <section className="flex items-center justify-center h-screen w-screen bg-blue-50"> 
        <section className='flex flex-row h-4/5 w-4/5 bg-white rounded-2xl shadow-xl'>
            <div className='flex flex-1 flex-col bg-blue-800 rounded-l-2xl items-center'>
            <p className='2xl:text-7xl text-white font-semibold mt-4 lg: text-5xl '>Bienvenido a VacunApp</p>
            <img className=" w-3/4 mt-6"  src={imgLogo} alt='logo'/>
            </div> 
            <div className='flex flex-1 flex-col items-center justify-center'>
            <p className='2xl:text-5xl text-blue-800 font-bold lg:text-4xl'>Iniciar Sesion</p>
            <form className='flex flex-col mt-10 w-9/12 items-start' >
                <label className='text-2xl text-blue-500 font-semibold mb-2'>Email</label>
                <input className='w-full h-14 shadow-xl pl-4 mb-4' placeholder='Ingrese correo' />
                <label className='text-2xl text-blue-500 font-semibold mb-2'>Contraseña</label>
                <input className='w-full pl-4 shadow-xl h-14' placeholder='ingrese contrasena'/>
                <input type='submit' className=' w-full h-14 text-center bg-blue-800 text-white text-xl font-semibold mt-10 rounded-xl' value={'Iniciar Sesion'}></input>
                <p className=' text-gray-500 font-semibold mt-3 ml-4  lg: text-base'>no tienes cuenta? <a href='/' className='text-blue-500 font-bold'>Click Aqui</a> </p>
            </form>
            </div>
        </section>
    </section>
    );
}
export default Persona;