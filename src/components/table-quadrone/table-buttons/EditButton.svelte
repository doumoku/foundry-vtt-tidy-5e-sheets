<script lang="ts">
  import { CONSTANTS } from 'src/constants';
  import { FoundryAdapter } from 'src/foundry/foundry-adapter';

  interface Props {
    disabled?: boolean;
    doc: any;
  }

  let { doc, disabled }: Props = $props();
</script>

<a
  class="tidy-table-button"
  data-tooltip={'DND5E.ItemEdit'}
  onclick={() =>
    !disabled &&
    doc.sheet.render({ force: true, mode: CONSTANTS.SHEET_MODE_EDIT })}
>
  <i class="fas fa-edit fa-fw"></i>
</a>
