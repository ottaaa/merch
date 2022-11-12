
export const getItems = async () => {
    const respose = await fetch("http://host.docker.internal:3000/item");
    return await respose.json();
    }

