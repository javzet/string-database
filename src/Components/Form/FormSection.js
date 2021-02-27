import { FormControl } from './FormControl';
export const FormSection = ({ name, campos }) => {
  return (
    <div className="form-gap">
      <div className="form-group">
        <p>{name}</p>
        {campos.map((campo) => (
          <FormControl
            key={campo.data}
            value={campo.value}
            name={campo.name}
            data={campo.data}
            change={campo.change}
          />
        ))}
      </div>
    </div>
  );
};
