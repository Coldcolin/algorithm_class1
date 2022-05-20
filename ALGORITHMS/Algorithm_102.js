//Queue
class Queue {
    constructor(){
        this.collection = []
    }
    print(){
        console.log(this.collection)
    }
    enqueue(value){
        this.collection.push(value);
        return this.collection
    }
    dequeue(){
        this.collection.shift()
        return this.collection
    }
    front(){
        return this.collection[0]
    }
    size(){
        return this.collection.length;
    }
    isEmpty(){
        return (this.collection.length === 0)
    }
}

// let q = new Queue()
// q.enqueue("a")
// q.enqueue("b")
// q.enqueue("c")
// q.print()
// console.log(q.dequeue())
// console.log(q.front())

class priorityQueue {
    constructor(){
        this.collection = []
    }
    printCollection(){
        console.log(this.collection)
    };
    isEmpty(){
        return (this.collection === 0)
    };
    enqueue(value){
        if(this.isEmpty()){
            this.collection.push(value);
        }else{
            let added = false;
            for(let i = 0; i < this.collection.length; i++){
                if(value[1] < this.collection[i][1]){
                    this.collection.splice(i, 0, value);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.collection.push(value);
            }
        }
    }
    dequeue(){
        let value = this.collection.shift();
        return value[0];
    }
    front(){
        return this.collection[0]
    }
    size(){
        return this.collection.length;
    }
}

let pq = new priorityQueue()
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wojcik", 1]);
pq.printCollection()
pq.dequeue()
pq.front()
pq.printCollection()