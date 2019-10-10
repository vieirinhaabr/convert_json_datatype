//original json
var json = [
  {
    "NOME": "Daniel Braz",
    "NOMEFANTASIA": "alura",
    "CNPJ": 84984185118,
    "ENDERECO": "Rua Caetes",
    "NUMERO": 843,
    "COMPLEMENTO": "",
    "BAIRRO": "Caramuru",
    "CIDADE": "Tiros",
    "ESTADO": "MG",
    "CEP": 38701555,
    "FONE": 3438235899,
    "CELULAR": ""
  },
  {
    "NOME": "Daniel Braz",
    "NOMEFANTASIA": "alura",
    "CNPJ": 84984185118,
    "ENDERECO": "Rua Caetes",
    "NUMERO": 843,
    "COMPLEMENTO": "",
    "BAIRRO": "Caramuru",
    "CIDADE": "Tiros",
    "ESTADO": "MG",
    "CEP": 38701555,
    "FONE": 3438235899,
    "CELULAR": ""
  },
  {
    "NOME": "Daniel Braz",
    "NOMEFANTASIA": "alura",
    "CNPJ": 84984185118,
    "ENDERECO": "Rua Caetes",
    "NUMERO": 843,
    "COMPLEMENTO": "",
    "BAIRRO": "Caramuru",
    "CIDADE": "Tiros",
    "ESTADO": "MG",
    "CEP": 38701555,
    "FONE": 3438235899,
    "CELULAR": ""
  }
];

//value will passed to this variable after converted
var jsUpdated = [];

//loop to change all content in json file
for(var i = 0; i < json.length; i++){
	//passing cnpj to string
  json[i].CNPJ = json[i].CNPJ.toString();
	
	//saving in jsUpdated
  jsUpdated.push(json[i]);
}

//console.log(jsUpdated);

var fs = require('fs');

//will be saved in external file
fs.appendFile("json_lojas.txt", JSON.stringify(jsUpdated), function(err) {
  if (err) throw err;
  console.log("saved");
});

//Node For_loop.js