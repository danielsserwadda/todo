
const Button = ({ btnController, btnText, color }) => {
  return (
    <button className='btn' onClick={btnController} style={{ backgroundColor: color }}>{ btnText }</button>
  )
}

export default Button