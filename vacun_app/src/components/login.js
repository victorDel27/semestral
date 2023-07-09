function Persona() {
    return (
        //login CON TAILWINCSS

        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded shadow-2xl p-8 m-4 max-w-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Usuario</label>
                        <div className="flex">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 00-7.64 16.36l.
                                    01.01.01.01L12 22l7.63-3.63.01-.01.01-.01A10 10 0 0012
                                    2zm0 18l-5.5-4.5 1.39-1.39L12 16l4.11-4.11
                                    1.39 1.39L12 20z" />
                                </svg>
                            </span>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" id="username" type="text" placeholder="Usuario" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                        <div className="flex">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 00-7.64 16.36l.
                                    01.01.01.01L12 22l7.63-3.63.01-.01.01-.01A10 10 0 0012
                                    2zm0 18l-5.5-4.5 1.39-1.39L12 16l4.11-4.11
                                    1.39 1.39L12 20z" />
                                </svg>
                            </span>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ml-2" id="password" type="password" placeholder="******************" />
                        </div>
                        <p className="text-red-500 text-xs italic">Por favor ingrese una contraseña.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Ingresar</button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"> Olvidaste tu contraseña?</a>
                    </div>
                </form>
            </div>
        </div>



    );
}
export default Persona;