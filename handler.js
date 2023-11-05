const cpf = require('cpf');

exports.handler = async (event) => {
  const cpfNumber = event.queryStringParameters.cpf; 

  if (!cpf.isValid(cpfNumber)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid CPF number' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Valid CPF number' })
  };
}