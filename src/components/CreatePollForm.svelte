<script>
  import { createEventDispatcher } from 'svelte'
  import Button from './shared/Button.svelte'
  import polls from '../stores/polls'

  const dispatch = createEventDispatcher()

  let fields = {
    question: '',
    answerA: '',
    answerB: '',
  }

  let errors = {
    question: '',
    answerA: '',
    answerB: '',
  }

  let valid = false

  function submitHandler() {
    valid = true

    if (fields.question.trim().length < 5) {
      valid = false
      errors.question = 'La question doit faire au moins 5 caractères.'
    } else {
      errors.question = ''
    }

    if (fields.answerA.trim().length < 1) {
      valid = false
      errors.answerA = 'La réponse 1 doit faire au moins 1 caractère.'
    } else {
      errors.answerA = ''
    }

    if (fields.answerB.trim().length < 1) {
      valid = false
      errors.answerB = 'La réponse 2 doit faire au moins 1 caractère.'
    } else {
      errors.answerB = ''
    }

    if (valid) {
      const newPoll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        id: Math.random(),
      }
      polls.update((polls) => [...polls, newPoll])
      dispatch('addPoll')
    }
  }
</script>

<form
  class="max-w-screen-sm mx-auto space-y-5"
  on:submit|preventDefault={submitHandler}
>
  <div class="flex flex-col space-y-2">
    <label for="question">Question</label>
    <input
      type="text"
      id="question"
      bind:value={fields.question}
      class="border rounded py-2 px-4 focus:outline-none focus:ring focus:ring-gray-200"
    />
    <span class="rounded text-red-500 text-sm">
      {errors.question}
    </span>
  </div>

  <div class="flex flex-col space-y-2">
    <label for="answer-a">Réponse 1</label>
    <input
      type="text"
      id="answer-a"
      bind:value={fields.answerA}
      class="border rounded py-2 px-4 focus:outline-none focus:ring focus:ring-gray-200"
    />
    <span class="rounded text-red-500 text-sm">
      {errors.answerA}
    </span>
  </div>

  <div class="flex flex-col space-y-2">
    <label for="answer-2b">Réponse 2</label>
    <input
      type="text"
      id="answer-b"
      bind:value={fields.answerB}
      class="border rounded py-2 px-4 focus:outline-none focus:ring focus:ring-gray-200"
    />
    <span class="rounded text-red-500 text-sm">
      {errors.answerB}
    </span>
  </div>

  <Button>Créer le sondage</Button>
</form>
