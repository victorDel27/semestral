import React from "react";

export const navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-3">
            <div className="flex items-center flex-shrink-2 text-white mr-6">
                <span className="font-semibold text-2xl tracking-tight">VacunApp</span>
                <ul className="flex">
                    {/* colocarlos a la izquierda*/}
                    <li className="mr-6">
                        <a className="inline-block border border-blue-1000 rounded py-0.5 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold" href="/">Inicio</a>
                    </li>
                    <li className="mr-6">
                        <a className="inline-block border border-blue-1000 rounded py-0.5 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold" href="/doctor">Doctor</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default navbar;