import PropTypes from 'prop-types'
function Student(props){

    return (
        <header>
            <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </header>
    )
}

// PropTypes are a runtime type-checking mechanism used to validate the data types of properties (props) 
// passed to components

Student.proptype ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
 


export default Student