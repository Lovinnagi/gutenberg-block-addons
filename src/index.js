/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import "./assets/css/index.css";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"></path>
  </svg>
);

wp.domReady(() => {
  const customCategoryExists = wp.blocks
    .getCategories()
    .some((category) => category.slug === "custom-addons");

  if (!customCategoryExists) {
    wp.blocks.setCategories([
      ...wp.blocks.getCategories(),
      {
        slug: "custom-addons",
        title: __("Gutenberg Block Addons", "gutenberg-block-addons"),
      },
    ]);
  }
});

registerBlockType(metadata.name, {
  icon: userIcon,
  category: "custom-addons",
  edit: Edit,
  save,
});
