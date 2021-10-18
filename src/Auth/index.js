export const TOKEN_KEY = "@airbnb-Token";
export const NAME_KEY = "@airbnb-Name";
//export const CPF_KEY = "@airbnb-Cpf";
export const EMAIL_KEY = "@airbnb-Email";
//export const TYPE_KEY = "@airbnb-Type";
export const IDUSER_KEY = "@airbnb-Iduser";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getName = () => localStorage.getItem(NAME_KEY);
//export const getCpf = () => localStorage.getItem(CPF_KEY);
export const getEmail = () => localStorage.getItem(EMAIL_KEY);
//export const getUser_type = () => localStorage.getItem(TYPE_KEY);
export const getIduser = () => localStorage.getItem(IDUSER_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const nameuser = name => {
  localStorage.setItem(NAME_KEY, name);
};
/*
export const cpfuser = cpf => {
  localStorage.setItem(CPF_KEY, cpf);
};*/
export const emailuser = email => {
  localStorage.setItem(EMAIL_KEY, email);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
/*
export const user_type = type => {
  localStorage.setItem(TYPE_KEY, type);
};*/
export const iduser = id => {
  localStorage.setItem(IDUSER_KEY, id);
};


