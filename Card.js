import { useState} from "react";
function dropdown({selected,setSelected}){
    const [isactive,setIsactive]=useState(false);
    const options=[];

    return(
<div className="dropdown">
    <div className="dropdown-btn" onClick={(e)=>setIsactive(!isactive)}>Choose One</div>
    <span className="fas fa-caret-down"></span>
    </div>
    {isactive && (
        <div className="dropdown-content">
        {opt.map((option)=>{
                <div onClick={(e)=>{
                    setSelected(option);
                    setIsactive(false);
                }}
                className="dropdown-item"
                >
{option}
</div>
    ))}
            </div>
            )}
            </div>
            );
    }
export default dropdown;