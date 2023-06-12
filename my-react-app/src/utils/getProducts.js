import { ApiManager } from "./apicalls";

// Function to fetch products from the API
async function GetProducts() {
  const endPoint = 'products';
  const httpMethod = 'GET';
  const headers = {};
  
  // Make a request to the API using the ApiManager
  const response = await ApiManager.makeRequest(endPoint, httpMethod, headers);
  
  return response;
}

export { GetProducts };