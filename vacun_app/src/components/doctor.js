import React from 'react';


export const Doctor = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <h1>{data}</h1>
    );

}
export default Doctor;