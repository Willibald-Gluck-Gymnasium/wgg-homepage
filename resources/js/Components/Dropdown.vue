<template>
	<div ref="dropdown" class="dropdown">
		<div ref="heading" class="heading">
			<div class="arrow">
				<i ref="arrowright" class='material-icons shown'>chevron_right</i>
				<i ref="arrowdown" class='material-icons'>expand_more	</i>
			</div>
			<div class="title">{{ heading }}</div>
		</div>
		<div class="dropcontent">
			<hr>
			<div class="slide">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['heading'],
	methods: {
		toggle: function() {
			var dropdown = this.$refs.dropdown;
			var arrowright = this.$refs.arrowright;
			var arrowdown = this.$refs.arrowdown;
			arrowright.classList.toggle("shown");
			arrowdown.classList.toggle("shown");
			dropdown.classList.toggle("open");
		}
	},
	mounted () {
		var heading = this.$refs.heading;
		heading.onclick = this.toggle;
	}
}
</script>

<style lang="scss" scoped>

$border-color: rgb(170,170,170);
$shadow-color: rgb(220,220,220);
$border-color-dark: rgb(200,200,200);
$shadow-color-dark: rgb(120,120,120);

$sizing: 10px;

.dropdown {
	margin-bottom: 1em;
	border: 1px solid $border-color !important;
	border-radius: 5px !important;
	overflow: hidden;
	font-size: 18px;
	.heading {
		padding: $sizing;
		cursor: pointer;
		transition-duration: .3s;
		display: flex;
		// line-height: calc(2 * $sizing);
		&:hover {
			background: var(--clr-bg-secondary);
		}
		&:active {
			background: $shadow-color;
		}
		.arrow {
			margin-right: calc(.5 * $sizing);
			height: calc(2 * $sizing);
			width: calc(2 * $sizing);
			i {
				display: none;
				&.shown {
					display: block;
				}
			}
		}
	}
	.dropcontent {
		position: relative;
		overflow: hidden;
		transition-duration: .3s;
		max-height: 0;
		.slide {
			padding: $sizing;
		}
	}
	&.open {
		.dropcontent {
			max-height: 3000vh;
		}
	}
}
@media only screen and (max-width: 700px) {
	.dropdown {
		.slide, .title {
			font-size: .95em !important;
			padding: 0 !important;
		}
		margin-left: 10px;
		margin-right: 10px;
	}
}
@media only print {
	.dropdown {
		border: none !important;
		.heading {
			.arrow {
				display: none !important;
			}
		}
		.dropcontent {
			max-height: none;
		}
	}
}
</style>