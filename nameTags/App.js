// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    console.log(props.nameTags[1])
    return (
        <span><NameTag /></span>
    )
}

const NameTag = (props) => {
    let { nameTags } = props
    // console.log(props)
    return props.nameTags.map(function (names, index) {
        return (
            <div>
     <div className="card" Style="width: 18rem;">
       <div className="card-body">
         <h5 className="card-title">{props.nameTags[index]}</h5>
         <p className="card-text">Hello</p>
       </div>
    </div>
            </div>
        ) 
    })
    // return ReactDOM.render(<App />, document.getElementById)

}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
