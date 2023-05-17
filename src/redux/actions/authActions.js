export const login = (username, password) => {
  return (dispatch) => {
    setTimeout(() => {
      const trimmedUsername = username.trim(); // Remover espaços em branco
      const trimmedPassword = password.trim(); // Remover espaços em branco

      if (trimmedUsername === 'usuário' && trimmedPassword === 'senha') {
        dispatch({ type: 'LOGIN_SUCCESS', payload: 'Credenciais válidas' });
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'Credenciais inválidas' });
      }
    }, 500);
  };
};