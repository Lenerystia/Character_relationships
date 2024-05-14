
import { onMount } from "svelte";
import { graphviz } from "d3-graphviz";
import { load } from "./+page.server";
// import { css } from '/styled-system/css'
onMount(() => {
graphviz("#graph").renderDot("digraph { a -> b, c }");
});
