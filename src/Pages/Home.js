import React, { useState } from 'react'
import api from "../Services/api";

export const Home = () => {

	const [searchQuery, setSearchQuery] = useState("");
	const [searchResult, setSearchResult] = useState([]); //[] - pusta tablica

	const createMarkup = (html) => {
		return { __html: html };
	};

	const onSearch = async () => { //async - asynchroniczne, nieblokujace, w tle
		console.log("Search", searchQuery);
		try {
			const response = await api.get(`api.php?action=query&prop=info&inprop=url&meta=siteinfo&origin=*&list=search&format=json&srlimit=20&srsearch=${searchQuery}`);
			console.log(response.data.query);
			setSearchResult(response.data.query.search);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='wiki-content'>
			<div className='search-bar'>
				<h1> Szukajka </h1>
				<div style={{width:"100%", display:"flex", padding: ".5em 0"}}>
					<div className='search-input'>
						<input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
						<button onClick={onSearch}>Szukaj </button>
					</div>
				</div>
			</div>
			<div className='wiki-results'>
				{searchResult.map(r => (
					<div key={r.pageid} className="result-item">
						<h3>{r.title}</h3>
						<div dangerouslySetInnerHTML={createMarkup(r.snippet)}></div>
					</div>
				))}
			</div>
		</div>
	)
}