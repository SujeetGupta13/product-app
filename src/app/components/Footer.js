import React from "react";


//react call function
//function comp returns 
//export default function Footer (props) {
export default function Footer ({title, year, address, children}) {

    //es6, deconstruct
    //let {title, year} = props;
    return (
        <div>
            <hr/>
            <p> Copyrights, @{year}, {title}</p>
            <p>{address.city}, {address.state}</p>

            {/*contecnt view moved here props.children*/}
            {children[0]}
        </div>    
    )
}