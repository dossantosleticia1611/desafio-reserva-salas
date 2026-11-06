
// DESAFIO 1 - Dados das salas

const salas = [
    {
        salaId: 1,
        nome: "Sala 101",
        andar: 1,
        capacidade: 30,
        recursos: ["Projetor", "Ar-condicionado"]
    },
    {
        salaId: 2,
        nome: "Sala 202",
        andar: 2,
        capacidade: 40,
        recursos: ["Computador", "Projetor"]
    },
    {
        salaId: 3,
        nome: "Laboratorio",
        andar: 1,
        capacidade: 20,
        recursos: ["Computadores"]
    }
];

// Dados das reservas

const reservas = [
    {
        salaId: 1,
        data: "2026-11-07",
        inicio: "08:00",
        fim: "10:00",
        responsavel: "Ana",
        finalidade: "Aula de matematica",
        situacao: "aprovada"
    },
    {
        salaId: 2,
        data: "2026-11-07",
        inicio: "09:00",
        fim: "11:00",
        responsavel: "Carlos",
        finalidade: "Reuniao",
        situacao: "pendente"
    },
    {
        salaId: 1,
        data: "2026-11-07",
        inicio: "10:00",
        fim: "12:00",
        responsavel: "Maria",
        finalidade: "Aula de historia",
        situacao: "aprovada"
    },
    {
        salaId: 3,
        data: "2026-11-08",
        inicio: "13:00",
        fim: "15:00",
        responsavel: "Joao",
        finalidade: "Aula de informatica",
        situacao: "cancelada"
    },
    {
        salaId: 2,
        data: "2026-11-08",
        inicio: "14:00",
        fim: "16:00",
        responsavel: "Pedro",
        finalidade: "Trabalho em grupo",
        situacao: "pendente"
    }
];


// DESAFIO 2 - Verificar conflito de horario

function existeConflito(novaReserva, reservas) {

    if (novaReserva.situacao === "cancelada") {
        return false;
    }

    return reservas.some(reserva => {

        if (reserva.situacao === "cancelada") {
            return false;
        }

        if (reserva.salaId !== novaReserva.salaId) {
            return false;
        }

        if (reserva.data !== novaReserva.data) {
            return false;
        }

        return novaReserva.inicio < reserva.fim &&
               novaReserva.fim > reserva.inicio;

    });
}


// DESAFIO 3 - Verificar capacidade da sala

function cabeNaSala(quantidadeAlunos, salaId, salas) {

    const sala = salas.find(s => s.salaId === salaId);

    if (!sala) {
        return false;
    }

    return quantidadeAlunos <= sala.capacidade;
}


// TESTES

console.log("Salas:", salas);
console.log("Reservas:", reservas);

const testeReserva = {
    salaId: 1,
    data: "2026-11-07",
    inicio: "09:00",
    fim: "11:00",
    situacao: "pendente"
};

console.log("Existe conflito?", existeConflito(testeReserva, reservas));

console.log("30 alunos na sala 1:", cabeNaSala(30, 1, salas));
console.log("35 alunos na sala 1:", cabeNaSala(35, 1, salas));
console.log("20 alunos na sala 3:", cabeNaSala(20, 3, salas));
console.log("Sala inexistente:", cabeNaSala(10, 5, salas));
