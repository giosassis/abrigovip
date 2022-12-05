const AWS = require('aws');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const param = {
    TableName: "PETS"
};

module.exports.getPets = async (event) => {
    try {
      let data = await dynamoDb.scan(param).promise();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data.Items),
      };
    } catch (err) {
      log.error("Error", err);
      return {
        statusCode: err.statusCode ? err.statusCode : 500,
        body: JSON.stringify({
          error: err.name ? err.name : "Exception",
          message: err.message ? err.message : "Unknown error",
        }),
      };
    }
  };