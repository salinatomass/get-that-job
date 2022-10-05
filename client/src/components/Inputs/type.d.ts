type InputType = 'text' | 'tel' | 'date' | 'url'

export interface InputProps {
  type: InputType
  name: string
  value: string
  label: string
  placeholder: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: () => void
}

export interface TextAreaInputProps {
  name: string
  value: string
  label: string
  placeholder: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: () => void
}
