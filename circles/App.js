// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    console.log(props)
    return (
        <Circle circle={getState()}/> 
    )
}

const Circle = (props) => {
    console.log(props)

    let { circles } = props
    return props.circle.map(function (circle, index) {
        return <div key={index} style={{width: circle.radius * 2, height: circle.radius * 2, borderRadius: circle.radius, backgroundColor: circle.color}}></div> 
    })
}

// CHALLENGE: Write a separate Circle component for use in the App component