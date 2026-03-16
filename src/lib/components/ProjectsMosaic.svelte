<script>
    import { Lightbox } from "svelte-lightbox";
    import LazyImage from "svelte-lazy-image";

    export let projects = [];
</script>

<div class="projects-mosaic">
    {#each projects as project, i}
        <div class="mosaic-item item-{i + 1}">
            <Lightbox
                noScroll="false"
                modalClasses="pipu"
                thumbnailClasses="h-100"
            >
                <div class="image mosaic-image">
                    <img src={project.src} alt={project.alt} />
                    <span class="item-content-2">
                        <strong class="item-title">{project.alt}</strong>
                    </span>
                </div>
            </Lightbox>
        </div>
    {/each}
</div>

<style lang="scss">
    .projects-mosaic {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1.2fr; // Slightly wider right column for the tall vertical photo
        grid-template-rows: repeat(3, 180px);
        gap: 8px;
        margin-bottom: 30px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
        }

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }

    .mosaic-item {
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

        div {
            height: 100%;
        }

        &:hover {
            transform: scale(1.015);
            z-index: 10;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        // Enforce full height on all structural wrappers inside the grid cell
        &,
        & > :global(*),
        & :global(.svelte-lightbox-main),
        & :global(.svelte-lightbox-trigger),
        & :global(.h-100),
        & :global(.clickable),
        & :global(div) {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .mosaic-image {
            flex: 1;
            height: 100%;
            width: 100%;
            position: relative;
            overflow: hidden;

            img {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover;
                display: block;
            }
        }
    }

    // MODERN ASYMMETRICAL GRID CONFIGURATION
    // Left Content: Columns 1, 2, 3
    .item-1 {
        grid-column: 1 / 3; // Wide
        grid-row: 1 / 2;
    }
    .item-2 {
        grid-column: 3 / 4; // Square/Narrow
        grid-row: 1 / 2;
    }
    .item-3 {
        grid-column: 1 / 2; // Square/Narrow
        grid-row: 2 / 3;
    }
    .item-4 {
        grid-column: 2 / 4; // Wide
        grid-row: 2 / 3;
    }
    .item-5 {
        grid-column: 1 / 4; // Full Width for the left section
        grid-row: 3 / 4;
    }

    // Right Content: Column 4, Full Height
    .item-6 {
        grid-column: 4 / 5;
        grid-row: 1 / 4; // Spans exactly all three rows
    }

    @media (max-width: 1024px) {
        .mosaic-item {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 300px;
        }
    }
</style>
