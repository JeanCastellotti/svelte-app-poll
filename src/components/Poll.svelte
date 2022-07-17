<script>
  import polls from '../stores/polls'
  import Card from './shared/Card.svelte'
  import Button from './shared/Button.svelte'
  import { tweened } from 'svelte/motion'

  export let id
  export let question
  export let answerA
  export let answerB
  export let votesA
  export let votesB

  $: totalVotes = votesA + votesB
  $: percentA = Math.floor((votesA * 100) / totalVotes) || 0
  $: percentB = Math.floor((votesB * 100) / totalVotes) || 0

  const tweenedA = tweened(0)
  const tweenedB = tweened(0)
  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)

  function voteHandler(option, id) {
    polls.update((polls) => {
      const pollToUpdate = polls.find((poll) => poll.id === id)

      if (option === 'a') {
        pollToUpdate.votesA += 1
      }

      if (option === 'b') {
        pollToUpdate.votesB += 1
      }

      return [...polls]
    })
  }

  function deleteHandler(id) {
    console.log('lol')
    polls.update((polls) => polls.filter((poll) => poll.id !== id))
  }
</script>

<Card>
  <div class="flex flex-col space-y-3">
    <h3 class="text-gray-800 font-semibold">{question}</h3>
    <p class="text-gray-400 text-sm">Nombre de votes : {totalVotes}</p>
    <div
      class="relative bg-gray-100 rounded cursor-pointer overflow-hidden border-l-4 border-blue-500"
      on:click={() => voteHandler('a', id)}
    >
      <div
        class="absolute inset-y-0 bg-blue-500/20"
        style="width: {$tweenedA}%"
      />
      <span class="block py-2 px-4 text-sm">{answerA} ({votesA})</span>
    </div>
    <div
      class="relative bg-gray-100 rounded  cursor-pointer overflow-hidden border-l-4 border-blue-800"
      on:click={() => voteHandler('b', id)}
    >
      <div
        class="absolute inset-y-0 bg-blue-800/20"
        style="width: {$tweenedB}%"
      />
      <span class="block py-2 px-4 text-sm">{answerB} ({votesB})</span>
    </div>
    <div class="self-center">
      <Button danger small on:click={() => deleteHandler(id)}>Delete</Button>
    </div>
  </div>
</Card>
