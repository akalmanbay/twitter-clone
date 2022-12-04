export default function Search({ searchTweetsByText, onChangeSearchInput, searchContent }) {
    return (
        <div className='p-3 d-flex flex-row' >
            <div >
                <input onChange={onChangeSearchInput} value={searchContent} placeholder='Search on Twitter' style={{ border: 'none', fontSize: 18, outline: 'none' }} className='mx-3' />
            </div>
            {/* <button onClick={() => searchTweetsByText(searchContent)} style={{ alignSelf: 'flex-end', color: 'white', backgroundColor: '#1D9BF0', borderRadius: 20, height: 40, width: 75, border: 'none' }}>Search</button> */}
        </div>
    )
}