import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const SignUpForm = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors({})
    const newErrors = {}
    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    if (Object.keys(newErrors).length === 0) {
      history.push('/success', {name: formData.name})
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="container">
      <h2 className="heading">Create Account</h2>
      <form onSubmit={handleSubmit} className="formId">
        <div>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Full Name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <input
            className="input"
            id="phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <input
            className="input"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
