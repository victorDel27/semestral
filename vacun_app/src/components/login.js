import React from 'react';

export const Persona = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Usuario</label>
                        <div className="flex">

                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" id="username" type="text" placeholder="Usuario" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                        <div className="flex">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ml-2" id="password" type="password" placeholder="******************" />
                        </div>
                        <p className="text-red-500 text-xs italic">Por favor ingrese una contraseña.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded focus:outline-none focus:shadow-outline" type="button">Ingresar</button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/doctor"> Olvidaste tu contraseña?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Persona;