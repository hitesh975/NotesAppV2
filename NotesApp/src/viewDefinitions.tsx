import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function ViewDefinitions () {
    const [definitions, setDefintions] = useState(()=>{
        return JSON.parse(localStorage.getItem('definitions') || '[]')
    })
    return (
        <div className="container">
            {definitions.map((definition : String) => {
                return (
                    <div>
                        {definition}
                    </div>
                )
            })}
        </div>
    )
}