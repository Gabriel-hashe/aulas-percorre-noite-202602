let idade = 27
let nome = "Gabriel"

// Para tirar carteira de motorista a pessoa precisa TER 18 ou MAIS anos de idade.
// Se você não tem 18 anos nãomé possivel tirar habilitação.

// Eu enquanto usuário efetivarei validação de idade para saber se posso obter uma Carteira Nacional de Habilitação.
// Para obter a CNH devo ter idade igual ou superior a 18 anos no ato da validação, caso contrário, espera receber uma mensagem informando que não possuo idade suficiente;

if (idade >= 18) {
    console.log("Você tem 18 anos ou mais, pode tirar CNH");
}
else (
    console.log("Você não tem 18 anos, não pode tirar CNH")
)
