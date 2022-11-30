<template>
  <div>
    <table ref="table" id="mytable" style="width: 50%" contenteditable="true">
      <tr style="--row-height: 20px; --process-value: 30%">
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr style="--row-height: 20px; --process-value: 50%">
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr style="--row-height: 20px">
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
  import ResizeObserver from 'resize-observer-polyfill';
  const table = ref();

  const ro = new ResizeObserver((entries: Array<any>) => {
    const table = entries[0].target;
    table.querySelectorAll('tr').forEach((row: HTMLElement) => {
      row.style.setProperty('--row-height', `${row.offsetHeight}px`);
    });
  });

  onMounted(() => {
    ro.observe(table.value);
  });
</script>

<style scoped>
  #mytable,
  th,
  td {
    border: 1px solid black;
  }

  #mytable {
    position: relative;
  }

  #mytable tr::after {
    content: ' ';
    position: absolute;
    left: 0;
    margin-top: calc(var(--row-height) - 2px);
    height: 2px;
    width: var(--process-value);
    background-color: aquamarine;
    transition: width 0.5s ease-in-out;
  }
</style>
