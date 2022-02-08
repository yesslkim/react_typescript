type HeadingProps = {
  children: string // *해당 컴포넌트 내에 텍스트를 입력하는 경우 chilren으로 type 명시 가능!
}

const Heading = (props: HeadingProps) => { 
  return (
    <h2>
      {props.children}
    </h2>
  )
}

export default Heading;