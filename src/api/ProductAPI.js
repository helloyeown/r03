import axios from "axios"

export const getList = async (param) => {

	const {page, size, type, keyword} = param || {page:1, size:10, type:null, keyword:null}

	let queryStr = `?page=${page}&size=${size}`

	if(keyword){
		queryStr += `&type=${type}&keyword=${keyword}`
	}

	const res = await axios.get(`http://localhost:8080/api/products/list${queryStr}`)

	return res.data		// 결과: pageResponse

}

export const postProduct = async (formData) => {

	const header = {
		headers: {
				"Content-Type": "multipart/form-data",
		}
	}

	const res = await axios.post('http://localhost:8080/api/products/', formData, header)

	return res.data

}