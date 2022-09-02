import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;
    return (
      <div>
        <div>Header</div>
        <p data-testid="email-field">{user}</p>
        <p data-testid="total-field">
          {expenses.length === 0 ? '0' : (expenses.reduce((acc, cur) => acc
          + Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask), 0).toFixed(2)
          )}

        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
