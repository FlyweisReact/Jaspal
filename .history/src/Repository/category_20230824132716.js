import axios from "axios";

const Baseurl = "https://ecommerce-backend-ochre-phi.vercel.app/";


export const getCategorybyGender = async (payload , setLoading , setResponse) =>{
    setLoading(true)
    try{
        const response = await axios.get(`${Baseurl}api/v1/user/allCategory/${payload}`)
        setResponse(response.data.data)
        setLoading(false)
    }catch(e) {
        console.log("Get Category by Gender" , e)
        setLoading(false)
    }
}