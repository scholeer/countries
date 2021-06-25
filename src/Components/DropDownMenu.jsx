function DropDownMenu(props) {
    return (
        <select name="region" id="region" defaultValue={props.region} onChange={(event) => props.setRegion(event.target.value)}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>            
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>                                    
        </select>
    )
}

export default DropDownMenu;