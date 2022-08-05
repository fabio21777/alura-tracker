export class Tarefa {
    id: string;
    tempo: string;
    descricao: string;
    tempoEmSegundos: number;

    constructor(tarefa: Tarefa  = null !) {
        if (tarefa) {
            this.id = tarefa.id;
            this.tempo = tarefa.tempo;
            this.descricao = tarefa.descricao;
            this.tempoEmSegundos = tarefa.tempoEmSegundos;
        } else {
            this.id = "";
            this.tempo = "";
            this.descricao = "";
            this.tempoEmSegundos = 0;
        }
    }
}