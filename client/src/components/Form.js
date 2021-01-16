import React, {useState} from "react"


function Form(props) {
    const initInputs = 
    {
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        living: props.living || "", 
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }

    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (event) => {
        const {name, value} = event.target
        return setInputs(prevInputs => ({...prevInputs, [name]:value})) 
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    console.log(inputs)
    console.log(inputs.living)
    console.log(inputs.firstName)

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={inputs.firstName}
                onChange={handleChange}

            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={inputs.lastName}
                onChange={handleChange}
            />
            <h4>Is Living?</h4>
            <select name="living" value={inputs.living} onChange={handleChange}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <input 
                type="number"
                name="bountyAmount"
                placeholder="Bounty Amount"
                value={inputs.bountyAmount}
                onChange={handleChange}
            />
            <h4>Sith or Jedi?</h4>
            <select name="type" value={inputs.type} onChange={handleChange}>
                <option value=""></option>
                <option value="Sith">Sith</option>
                <option value="Jedi">Jedi</option>
            </select>
            <button >{props.buttonText}</button>
        </form>
    )

}

export default Form