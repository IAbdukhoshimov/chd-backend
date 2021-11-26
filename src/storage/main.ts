import { SendStorage } from "./mongo/send";

interface IStorage {
    send:SendStorage
}

export let storage:IStorage = {
    send:new SendStorage()
}