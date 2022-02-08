type PersonProps = { //Object type 지정하기.
  name: {
    first: string
    last: string
  }
}

const Person = (props: PersonProps) => { 
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default Person;