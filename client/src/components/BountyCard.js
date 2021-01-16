import React, {useState} from "react"
import Form from "./Form.js"

function BountyCard (props) {
    const {firstName, lastName, living, bountyAmount, type, _id, deleteBounty, editBounty} = props
    console.log(living)
    const [canEditToggle, setCanEditToggle] = useState(false)
    return(
        <div>
            {!canEditToggle?
                <div className="bountyCard">
                <h1>Name: {firstName} {lastName}</h1>
                <h1>Is Alive?: {living}</h1>
                <h1>Bounty Amount: {bountyAmount}</h1>
                <h1>Type: {type}</h1>
                <button onClick={()=> deleteBounty(_id)}>Delete Bounty</button>
                <button onClick={()=>setCanEditToggle(prevToggle => !prevToggle)}> Edit</button>
                </div>
            :
            <div className="bountyCardEdit">
                <Form
                    firstName={firstName}
                    lastName={lastName}
                    living={living}
                    bountyAmount={bountyAmount}
                    type={type}
                    _id={_id}
                    submit={editBounty}
                    buttonText={"Submit Edit"}
                />
                <button onClick={()=>setCanEditToggle(prevToggle => !prevToggle)}> Close</button>
            </div>
            
            }

        </div>
    )

}

export default BountyCard