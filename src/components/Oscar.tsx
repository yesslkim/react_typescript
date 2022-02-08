type OscarProps = {
  children: React.ReactNode // props의 children으로 텍스트 뿐만아니라 컴포넌트도 들어올 수 있음. 
}

const Oscar = (props: OscarProps) => { 
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Oscar;