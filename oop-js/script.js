class Stopwatch {

    // privat property
    #duration = 0
    #seconds = null
    #running = false

    start() {
        if(this.#running) {
            throw new Error("stopwatch has already started.")
        }
        this.#seconds = setInterval(() => this.#duration += 1, 1000)
        this.#running = true
    }

    stop() {
        if(this.#running == false) {
            throw new Error("stopwatch is not started.")
        }
        clearInterval(this.#seconds)
        this.#running = false
    }

    getDuration() {
        return this.#duration
    }

    reset() {
        this.#duration = 0
    }

}



// function Stopwatch() {
    
//     // privat property
//     let seconds = null
//     let duration = 0
//     let running = false

//     this.start = () => {
//         if(running) {
//             throw new Error("stopwatch has already started.")
//         }
//         seconds = setInterval(() => duration += 1 , 1000)
//         running = true        
//     }

//     this.stop = () => {
//         if(!running) {
//             throw new Error("stopwatch is not started.")
//         }
//         clearInterval(seconds)
//         running = false
//     }

//     this.getDuration = () => duration

//     this.reset = () => {
//         duration = 0
//     }

// }