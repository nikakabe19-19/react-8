import axios from "axios";

export async function FetchData(setData) {
  try {
    let products = await axios.get(" https://dummyjson.com/quotes");
    setData(products.data.quotes);
  } catch (error) {
    console.log(error);
  }
}
