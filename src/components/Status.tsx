type StatusProps = {
  status: 'loading' | 'success' | 'error'
  //type 외에도 정확한 값을 명시할 수 있다. 해당 값이 아닌 다른 값이 props에 들어오는 경우 에러가 뜬다!
}

const Status = (props: StatusProps) => {
  let message;
  if (props.status == 'loading') {
    message = 'loading...'
  } else if (props.status == 'success') {
    message = 'success!!!'
  }else if (props.status == 'error') {
    message = 'error -_-'
  }

  return (
    <div>
      Status - {message}
    </div>
  )
}

export default Status;