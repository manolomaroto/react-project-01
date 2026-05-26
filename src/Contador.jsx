import { useState } from 'react';
import MiBoton from './MiBoton';

function Contador() {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div>
            <p>contador: {cuenta}</p>
            <MiBoton texto='Sumar' onClick={() => setCuenta(cuenta + 1)} />
        </div>
    )
}

export default Contador;