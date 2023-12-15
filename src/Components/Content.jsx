const Content = ({data}) => {
    return(
        <div style={{backgroundColor: "black"}}>{data.success ? <><h1>{data.data.title}</h1><img src={data.data.image} alt={data.data.title}></img><h3>{data.data.authorName}</h3><p>{data.data.description}</p></> : <h1>There is no post with this id</h1>}</div>
    )
}

export default Content;