import { writable } from 'svelte/store'

const store = writable([
  {
    id: 1,
    question: 'Quel est votre langage de programmation préféré ?',
    answerA: 'JavaScript',
    answerB: 'Python',
    votesA: 15,
    votesB: 10,
  },
])

export default store
