function isValidCPF(cpf) {
  const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

  return cpfRegex.test(cpf);
}

exports.handler = async (event) => {
  try {
    const queryStringParameters = event.queryStringParameters;
    
    if (!queryStringParameters || !queryStringParameters.cpf) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request: Missing or malformed CPF parameter' })
      };
    }
    
    const cpfNumber = queryStringParameters.cpf;

    if (!isValidCPF(cpfNumber)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid CPF number' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Valid CPF number' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
    };
  }
};