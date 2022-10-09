<script lang="ts">
	export let name: string;
</script>

<svelte:head>
	<title>How it Learns</title>
	<meta name="description" content="Visualisations of Machine Learning Algorithms" />
	<!-- <link rel="icon" href="/favicon.ico" /> -->
</svelte:head>

<header>
	Header
</header>

<main>
	<svg></svg>
</main>

<aside>
	Side
</aside>

<style>
	:global(body) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			"Head Head Head Head Head Head Head Head Head Head"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side"
			"Main Main Main Main Main Main Main Side Side Side";
		height: 100vh;
		max-height: 100vh;
		width: 100vw;
		max-width: 100vw;
		overflow: hidden;
		padding: 0;
	}

	header {
		grid-area: Head;
  		border-bottom: 1px solid black
	}

	main {
		grid-area: Main;
	}

	aside {
		grid-area: Side;
  		border-left: 1px solid black;
	}
</style>
