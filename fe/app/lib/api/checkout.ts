import axios from "axios"

const BASE_API = 'http://localhost:3001/api'


const checkout = async (price: number, voucher: number) => {
    try {
        const res = await axios.post(`${BASE_API}/checkout`, {
            voucher: voucher,
            price: price
        })
        return res.data.data
    } catch (error) {
        console.log(error)
        return null
    }

}

const getUser = async (results:number, page:number) => {
    try {
        const res = await axios.post(`${BASE_API}/user`, {
            results: results,
            page: page
        })
        
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export {checkout, getUser}