const obtenerDigimonAsyncAwait = async() => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');

        if(!response.ok) {
            throw new Error('hubo un problema al obtener datos del digimon')
        }

        const data = await response.json();
        return data;
        }catch(error){
        throw error;
        }
    }

(async function(){
    try{
        const data = await obtenerDigimonAsyncAwait();
        console.log('datos de digimon obtenidos con exito: ', data);
    } catch (error) {
        console.error('error al obtener datis del digimon: ', data);
    }
})();