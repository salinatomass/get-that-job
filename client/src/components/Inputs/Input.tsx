import { InputProps } from './type'
import classNames from 'classnames'

export const Input = (props: InputProps) => {
  const {
    type,
    name,
    value,
    placeholder,
    label,
    caption,
    required,
    autocomplete,
    handleChange,
    error,
    touched,
    handleBlur,
    img,
  } = props

  const style = classNames(['input', { error: error && touched }])

  return (
    <label htmlFor={`input-${name}`} className={style}>
      <span className="input__label">{label}</span>
      <input
        type={type}
        name={name}
        id={`input-${name}`}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ background: `url(${img}) no-repeat left var(--white-color)` }}
      />
      {error && touched ? (
        <p className="input__caption error">{error}</p>
      ) : (
        caption && <p className="input__caption">{caption}</p>
      )}
    </label>
  )
}
