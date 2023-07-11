import { useRef, useState } from "react";
import { postProduct } from "./ProductAPI";

const initState = {
	title: '',
	content: '',
	writer: '',
	images: []
}

const ProductInput = () => {

	const fileRef = useRef()	// 참조값 물기
	const [board, setBoard] = useState({...initState})

	const handleChange = (e) => {
		board[e.target.name] = e.target.value
		setBoard({...board})	// 제목, 내용, 작성자는 처리됨
	}

	const handleClickSave = (e) => {
		const formData = new FormData()

		formData.append("title", board.title)
		formData.append("content", board.content)
		formData.append("writer", board.writer)

		console.dir(fileRef.current)

		const arr = fileRef.current.files

		for(let file of arr){
			formData.append("images", file)
		}

		postProduct(formData)
	}

	const handleClickClear = (e) => {
		fileRef.current.value = ''
	}



	return (  
		<div>
			<h1>Input</h1>
			<div>
				<input type="text" name="title" value={board.title} onChange={handleChange}></input>
			</div>
			<div>
				<input type="text" name="content" value={board.content} onChange={handleChange}></input>
			</div>
			<div>
				<input type="text" name="writer" value={board.writer} onChange={handleChange}></input>
			</div>
			<div>
				<input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
			</div>
			<div>
				<button onClick={handleClickSave}>SAVE</button>
				<button onClick={handleClickClear}>CLEAR FILES</button>
			</div>
		</div>
	);
}
 
export default ProductInput;