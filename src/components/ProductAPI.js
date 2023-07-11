import axios from "axios"

export const postProduct = async (FormData) => {

	const header = {
		headers: {
				"Content-Type": "multipart/form-data",
		}
	}

	const res = await axios.post('http://localhost:8080/api/products/', FormData, header)

	return res.data

}