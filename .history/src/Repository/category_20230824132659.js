import axios from "axios";

const Baseurl = "https://ecommerce-backend-ochre-phi.vercel.app/";


export const getCategorybyGender = async (payload , setLoading , ) =>{
    setLoading(true)
    try{
        const response = await axios.get(`${Baseurl}api/v1/user/allCategory/${payload}`)

        setLoading(false)
    }catch(e) {
        console.log("Get Category by Gender" , e)
        setLoading(false)
    }
}