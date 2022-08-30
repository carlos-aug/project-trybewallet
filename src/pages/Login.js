import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userEmail: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.enabledButton();
    });
  };

  handleClick = () => {
    const { userEmail } = this.state;
    const { history, dispatch } = this.props;
    dispatch(getUser(userEmail));
    history.push('/carteira');
  };

  enabledButton = () => {
    const { password, userEmail } = this.state;
    const minNumberOfCharactersPassword = 5;
    const validateEmail = /\S+@\S+\.\S+/.test(userEmail);
    const validatePassword = password.length > minNumberOfCharactersPassword;

    if (validateEmail && validatePassword === true) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  render() {
    const { isDisabled } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="input-login">
            Email:
            <input
              type="email"
              name="userEmail"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="password-login">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
