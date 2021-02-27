export const FormControl = ({ data, value, name, change }) => {
  return (
    <div className="form-control">
      <label htmlFor="version">{name}</label>
      <input
        type="text"
        name={data}
        placeholder={name}
        id={data}
        value={value}
        onChange={change}
      />
    </div>
  );
};
