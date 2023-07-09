import React from "react";

export const Notfound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <h1 className="text-2xl font-bold mb-4">Not Found</h1>
                <h2 className="text-2xl font-bold mb-4">404</h2>
            </div>
        </div>
    );
}
export default Notfound;