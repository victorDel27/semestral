import React from 'react';
import imgLogo from '../img/logoLogin.png';
import Gif from '../img/register_gif.mp4';

export const Register = () => {
    return (
        //registro de usuario con datos basicos tailwind
        <section className="flex items-center justify-center h-screen w-screen bg-blue-50">
            <section className='flex flex-row h-4/5 w-4/5 bg-white rounded-2xl shadow-xl'>
                <div className='flex flex-1 flex-col bg-blue-800 rounded-l-2xl items-center'>
                    <p className='2xl:text-7xl text-white font-semibold mt-4 lg: text-5xl '>Bienvenido a VacunApp</p>
                    {/*<img className=" w-3/4 mt-6" src={imgLogo} alt='logo' />*/}
                    <video className='w-3/4 mt-6' src={Gif} autoPlay loop muted></video>
                </div>
                <div className='flex flex-1 flex-col items-center justify-center'>
                    <p className='2xl:text-5xl text-blue-800 font-bold lg:text-4xl'>Registro de Usuario</p>
                    <form className='flex flex-col mt-10 w-9/12 items-start' >
                        <label className='text-2xl text-blue-500 font-semibold mb-2'>Nombre</label>
                        <input className='w-full h-12 shadow-xl pl-4 mb-3' placeholder='Ingrese su nombre' />
                        <label className='text-2xl text-blue-500 font-semibold mb-2'>Apellido</label>
                        <input className='w-full h-12 shadow-xl pl-4 mb-3' placeholder='Ingrese su apellido' />
                        <label className='text-2xl text-blue-500 font-semibold mb-2'>Email</label>
                        <input className='w-full h-12 shadow-xl pl-4 mb-3' placeholder='Ingrese correo' />
                        <label className='text-2xl text-blue-500 font-semibold mb-2'>Contraseña</label>
                        <input className='w-full pl-4 shadow-xl h-14' placeholder='ingrese contrasena' />
                        <input type='submit' className=' w-full h-14 text-center bg-blue-800 text-white text-xl font-semibold mt-10 rounded-xl' value={'Registrarse'}></input>
                        <p className=' text-gray-400 font-semibold mt-3 ml-4  lg: text-base'>ya tienes cuenta? <a href='/' className='text-blue-400 font-bold'>Click Aqui</a> </p>
                    </form>
                </div>
            </section>
        </section>
    );
}
export default Register;