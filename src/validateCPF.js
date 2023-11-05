function isValidCPF(cpf) {
  const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
  return cpfRegex.test(cpf);
}

exports.handler = async (event) => {
  try {
    const requestBody = event.body;

 

    if (isValidCPF(requestBody)) {
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