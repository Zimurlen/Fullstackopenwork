const Header = (props) => {
  return (
  <h1>
    {props.course}
  </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part= {props.part1} exercise={props.exercise1} />
      <Part part= {props.part2} exercise={props.exercise2}/>
      <Part part= {props.part3} exercise={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {

  return (
    <p>
      Number of exercises in total: {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  const total = exercise1 + exercise2 + exercise3

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
      <Total total={total}/>
    </div>
  )
  }

export default App;
