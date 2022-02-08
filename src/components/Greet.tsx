// * props를 사용할 때는 type을 명시해 줘야한다.
// [type]과 [interface]가 있다. 둘의 차이는 거의 없고 type을 쓰는 것을 권장한다.
// type에 props를 명시했는데 컴포넌트에 해당 props가 없는 경우 오류발생!

type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => { 
  return (
    <div>
      {
        props.isLoggedIn ? 
          `<h2>Welcome to ${props.name}! You have ${props.messageCount} unread message</h2>` :
          `Welcome Guest!`
      }
      
    </div>
  )
}

export default Greet;