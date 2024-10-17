function Employee(props){
console.log(props)
    return (

        <div className="text-center text-primary">
            <h3>Employee Details</h3>
            <h2>To display props.object - {props.dtaFrmParent}</h2>
            <h4>Another way to display - {props.stringData}</h4>
            <h3>{props.empstatusname ? <span>active</span> : <span>inactive</span>} </h3>
        </div>
    )
}
export default Employee;