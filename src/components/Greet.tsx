// * props를 사용할 때는 type을 명시해 줘야한다.
// [type]과 [interface]가 있다. 둘의 차이는 거의 없고 type을 쓰는 것을 권장한다.
// type에 props를 명시했는데 컴포넌트에 해당 props가 없는 경우 오류발생!

type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
  optional?: string //props의 값이 필수사항이 아닌 경우 `?` 입력시 선택사항으로 바뀌어 props를 전달하지 않아도 오류가 뜨지 않음.
}

const Greet = (props: GreetProps) => { 
  const {optional = "선택하지않음"} = props // 선택사항 값의 경우 기본값을 설정할 수 있음.
  return (
    <div>
      {
        props.isLoggedIn ? 
          `<h2>Welcome to ${props.name}! You have ${props.messageCount} unread message. 옵션으로는 ${optional}을/를 선택했습니다.</h2>` :
          `Welcome Guest! 옵션으로는 ${optional}을/를 선택했습니다.`
      }
      
    </div>
  )
}

export default Greet;