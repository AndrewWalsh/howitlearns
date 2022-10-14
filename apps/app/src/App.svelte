<script lang="ts">
	import {
		COLOUR_PRIMARY,
		COLOUR_WHITE,
		COLOUR_SECONDARY,
		COLOUR_OFF_WHITE,
	} from './constants/theme';
</script>

<svelte:head>
	<title>How it Learns</title>
	<meta name="description" content="Visualisations of Machine Learning Algorithms" />
	<!-- <link rel="icon" href="/favicon.ico" /> -->
</svelte:head>

<header style="--bg-colour: {COLOUR_PRIMARY}; --white-colour: {COLOUR_WHITE}; --border-colour: {COLOUR_SECONDARY};">
</header>

<main style="--shadow: {COLOUR_SECONDARY}">
	<svg></svg>
</main>

<aside style="--border-colour: {COLOUR_SECONDARY}; --bg-color: {COLOUR_OFF_WHITE}">
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
		background-color: var(--bg-colour);
		color: var(--white-colour);
		grid-area: Head;
		position: relative;
	}

	header::after {
		content:"";
		background: -webkit-linear-gradient(-90deg, var(--bg-colour) 20%, var(--border-colour));
		display: block;
		height:4px;
		width: 100vw;
		position: absolute;
		bottom: 0;
	}

	main {
		grid-area: Main;
		box-shadow: inset -0.25em 0.25em 2.75em -1.75em var(--shadow)
	}

	aside {
		grid-area: Side;
  		border-left: 2px solid var(--border-colour);
		background-color: var(--bg-color);
	}
</style>
