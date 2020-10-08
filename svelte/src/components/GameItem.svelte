<script>
	export let platform
	export let name
</script>

<li>
	<div class="content">
		<p class="name">{name}</p>
		<p class="platform">{platform}</p>
	</div>
</li>

<style>
	li {
		display: flex;
		padding: 16px 0;
		counter-increment: game-list-counter;
		position: relative;
	}

	li:before {
		content: counter(game-list-counter);
		color: var(--primary-teal);
		font-size: 1.6rem;
		font-family: 'Press Start 2P';
		margin-inline-end: 1.5rem;
		margin-block-start: auto;
		margin-block-end: auto;
		min-width: 48px;
		text-align: right;
	}

	.content {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
	}

	.platform {
		color: var(--pink500);
		margin: 0;
		font-size: 0.8rem;
	}

	.name {
		flex: 1;
		font-size: 1.15rem;
		margin: 0;
	}

	@media screen and (min-width: 480px) {
		li:before {
			font-size: 2rem;
			min-width: 64px;
		}

		.platform {
			font-size: 1rem;
		}

		.name {
			font-size: 1.4rem;
		}
	}
</style>
