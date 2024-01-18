export default function Display(props){
    const data= props.todoItem
    const newData=data.map((ele)=>{
        return <div key={ele.Key} className="form">
            <input className="input" onChange={(e)=>{props.handleUpdate(e.target.value,ele.Key)}} value={ele.description}></input>
            <button onClick={()=>{props.handleDelete(ele.Key)}}>Delete</button>
        </div>
    })
    return (
        <div>
            {newData}
        </div>
    )
}