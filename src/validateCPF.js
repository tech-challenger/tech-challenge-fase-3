function isValidCPF(cpf) {
  const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

  return cpfRegex.test(cpf);
}

exports.handler = async (event) => {
  const cpfNumber = event.queryStringParameters && event.queryStringParameters.cpf;

  if (!cpfNumber || !isValidCPF(cpfNumber)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid CPF number' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Valid CPF number' })
  };
};