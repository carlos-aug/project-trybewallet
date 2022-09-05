import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi, saveForm, saveInfoExpenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  handleChange = ({ target: { name, value } }) => {
    const { expenses } = this.props;
    this.setState({ [name]: value, id: expenses.length });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    this.setState({}, async () => {
      const response = await saveForm();
      this.setState({ exchangeRates: response }, () => {
        dispatch(saveInfoExpenses(this.state));
      });
      this.setState({
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      });
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <div>WalletForm</div>

        <form onSubmit={ this.handleSubmit }>
          Valor:
          <label htmlFor="value-input">
            <input
              id="value-input"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <input
              id="description-input"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }

            />
          </label>

          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((curr, key) => (
              <option key={ key }>
                {curr}
              </option>
            ))}
          </select>

          Método de pagamento:
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          Despesa:
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

          <button
            type="submit"
          >
            Adicionar despesa
          </button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
