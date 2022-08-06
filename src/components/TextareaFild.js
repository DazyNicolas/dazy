const TextareaFild = (props) => {
  const { handleChange, label, name } = props;
  return (
    <div className="group-input">
      <label htmlFor={name}>{label}</label>
      <textarea onChange={handleChange} name={name}>
      </textarea>
    </div>
  );
};

export default TextareaFild;
