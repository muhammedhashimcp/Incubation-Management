import axios from 'axios'
 const API_URL='/api/incubation/'

 const getCompanies=async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        },
    }
    const response=await axios.get(API_URL,config)
    console.log(response+'++++++++++++++');
    return response.data
 }


  const getAllCompanies = async (token) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
        console.log(token);
        console.log("get all companies")
		const response = await axios.get(API_URL, config)
        
		console.log(response.data)
		return response.data
  }
  const allApplication = async (token) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		console.log(token)
		console.log("get all Appications")
		const response = await axios.get(API_URL+allApplication, config)

		console.log(response.data)
		return response.data
  }

 const companyServices = {
		getCompanies,
		getAllCompanies,
 }

 export default companyServices