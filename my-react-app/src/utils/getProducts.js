import { ApiManager } from "./apicalls"

async function GetProducts(){
 const endPoint = 'products'
 const httpMethod = 'GET'
 const headers = {}
 const response = await ApiManager.makeRequest(endPoint, httpMethod, headers)
 return response
}
export {GetProducts}