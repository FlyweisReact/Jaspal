import axios from "axios";

const BaseUrl = "https://ecommerce-backend-ochre-phi.vercel.app";


export const getCategorybyGender = async (payload , setLoading) =>{
    setLoading(true)
    try{

        setLoading(false)
    }catch(e) {
        console.log("Get Category by Gender" , e)
        setLoading(false)
    }
}