import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <div>WalletForm</div>

        <form>
          Valor:
          <label htmlFor="value-input">
            <input
              id="value-input"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <input
              id="description-input"
              data-testid="description-input"
            />
          </label>

          <select data-testid="currency-input">
            {currencies.map((curr, key) => (
              <option key={ key }>
                {curr}
              </option>
            ))}
          </select>

          Método de pagamento:
          <select
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
