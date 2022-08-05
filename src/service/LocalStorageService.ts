import { Tarefa } from "@/dtos/Tarefa";
import { v4 as uuidv4 } from "uuid";

export class LocalStorageService {
    chave = "tarefas";
    tarefas: Tarefa[] | any = new Array<Tarefa>();
    setTarefas(tarefa: Tarefa) {
        this.tarefas = this.getTarefas() || new Array<Tarefa>();
        if (!tarefa.id) {
            tarefa.id = uuidv4();
            this.tarefas.push(tarefa);
            localStorage.setItem(this.chave, JSON.stringify(this.tarefas));
        } else {
            const tarefaEditadar:Tarefa = this.tarefas.find((t: { id: string; }) => t.id === tarefa.id);
            tarefaEditadar.descricao = tarefa.descricao;
            tarefaEditadar.tempo = tarefa.tempo;
            tarefaEditadar.tempoEmSegundos = tarefa.tempoEmSegundos;
            localStorage.setItem(this.chave, JSON.stringify(this.tarefas));
        }
    }

    getTarefas() {
        const tarefa: string | any = localStorage.getItem(this.chave);
        this.tarefas = JSON.parse(tarefa);
        return this.tarefas;
    }
}