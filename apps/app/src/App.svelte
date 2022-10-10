<script lang="ts">
	import {
		COLOUR_PRIMARY,
		COLOR_WHITE,
		COLOR_SECONDARY,
	} from './constants/theme';
</script>

<svelte:head>
	<title>How it Learns</title>
	<meta name="description" content="Visualisations of Machine Learning Algorithms" />
	<!-- <link rel="icon" href="/favicon.ico" /> -->
</svelte:head>

<header style="--bg-colour: {COLOUR_PRIMARY}; --white-colour: {COLOR_WHITE}; --border-colour: {COLOR_SECONDARY};">
	Header
</header>

<main>
	<svg></svg>
</main>

<aside style="--border-colour: {COLOR_SECONDARY};">
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
		background-color: var(--bg-colour);
		color: var(--white-colour);
		grid-area: Head;
		position: relative;
	}

	header::after {
		/* border-bottom: 10px solid var(--border-colour); */
		content:"";
		background: -webkit-linear-gradient(-90deg, var(--bg-colour), var(--border-colour));
		display: block;
		height:4px;
		width: 100vw;
		position: absolute;
		bottom: 0;
	}

	main {
		grid-area: Main;
	}

	aside {
		grid-area: Side;
  		border-left: 2px solid var(--border-colour);
	}
</style>
