import Variables from "../../Globals/Variables";



const TRead = () => {


    const handleRead = async (token, body, endpoint) => {
        const response = await fetch(Variables.API + endpoint, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json()
    }

    return{
        handleRead
    }
}
export default TRead;