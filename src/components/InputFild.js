
const InputFild = (props) => {

    const{ handleChange, label, name, type, value} = props;

  return (
            <div className='group-input'>
                <label htmlFor={name}>{label}</label>
                <input onChange={handleChange} type={type} name={name} value={value} required/>  
            </div>
     
  )
}

export default InputFild