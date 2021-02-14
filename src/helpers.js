export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if ((presupuesto / 4) > restante) {
        clase = "max-w-2xl p-2 mx-auto my-3 bg-red-300 rounded-sm";
    } else if ((presupuesto / 2) > restante) {
        clase = "max-w-2xl p-2 mx-auto my-3 bg-yellow-300 rounded-sm";
    } else {
        clase = "max-w-2xl p-2 mx-auto my-3 bg-green-300 rounded-sm";
    }

    return clase;
}