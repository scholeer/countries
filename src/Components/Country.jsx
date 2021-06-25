function Country({info}) {
    return (
        <div style={{padding: '50px', margin: '0px',  width: '19%'}}>
            <img style={{width: '200px', height: '150px', boxShadow: "5px 10px 8px #888888"}} 
            src={info.flag} alt="" /><br/>
            {info.name}<br/>
            Population: {info.population}<br/>

        </div>
    )
}

export default Country;