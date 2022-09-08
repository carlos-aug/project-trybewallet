import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import WalletForm from '../../components/WalletForm';
import renderWithRouterAndRedux from './renderWith';

describe('Tela de login', () => {
  test('Verifica se e a página inicial é renderizada', () => {
    renderWithRouterAndRedux(<App />);

    const wellcomeText = screen.getByText(/TrybeWallet/i);
    expect(wellcomeText).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /Entrar/i });
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    userEvent.type(inputEmail, 'xablau@xablau.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(button);
  });

  test('Verifica se redireciona para a página Wallet', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/carteira');
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });

  test('Verifica se botão existe', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const buttonAdicionar = screen.getByRole('button', { name: /Adicionar despesa/i });
    expect(buttonAdicionar).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
  });
});
