import React from 'react';

import FormInput from '../from-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput name='email' type='email' label='email' value={ this.state.email } handleChange={ this.handleChange } required />
          <label>Email</label>

          <FormInput name='password' type='password' label='password' value={ this.state.password } handleChange={ this.handleChange } required />

          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn