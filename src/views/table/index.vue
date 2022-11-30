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

    <ElTable ref="myElTable" :data="tableData" stripe style="width: 1000px" :row-style="rowStyleFn" :row-class-name="rowClassNameFn">
      <ElTableColumn prop="date" label="Date" width="180" />
      <ElTableColumn prop="name" label="Name" width="100" />
      <ElTableColumn prop="address" label="Address" />
      <ElTableColumn label="进度修改">
        <template #default="scope">
          <ElInputNumber v-model="scope.row.process" :min="0" :max="1" :step="0.1" />
        </template>
      </ElTableColumn>
      <ElTableColumn label="进度显示">
        <template #default="scope">
          <ElSwitch v-model="scope.row.showProcess" @click="changeShowProcess(scope.$index, scope.row)" />
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<script setup lang="ts">
  // 原生table
  import ResizeObserver from 'resize-observer-polyfill';
  const table = ref();
  const ro = new ResizeObserver((entries: Array<any>) => {
    const table = entries[0].target;
    table.querySelectorAll('tr').forEach((row: HTMLElement) => {
      row.style.setProperty('--row-height', `${row.offsetHeight}px`);
    });
  });

  // element-plus el-table
  const list = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      process: 0.4,
      showProcess: true,
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      process: 0.2,
      showProcess: false,
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      process: 0.3,
      showProcess: true,
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      process: 0.44,
      showProcess: true,
    },
  ];
  interface tableDataType {
    date: string;
    name: string | number;
    address: string;
    process: string | number;
    showProcess: boolean;
  }

  const tableData: tableDataType[] = reactive([]);
  const myElTable = ref();
  tableData.push(...list);
  const rowStyleFn = ({ row }) => {
    return { '--process-width': `${row.process * 100}%` };
  };
  const rowClassNameFn = ({ row }) => {
    return { 'process-row': row.showProcess };
  };
  const doLayout = () => {
    const myElTableDom = myElTable.value;
    myElTableDom.doLayout();
    myElTableDom.$el.querySelectorAll('tr').forEach((row: HTMLElement) => {
      console.log('0000', row.offsetHeight); // nextTick 一直输出0，拿不到真正的高度,setTimeout可以
      row.style.setProperty('--row-el-table-height', `${row.offsetHeight}px`);
    });
  };

  const changeShowProcess = (index: number, row: tableDataType): void => {
    console.log('99999', index, row);
  };

  onMounted(() => {
    ro.observe(table.value);
    doLayout();

    // nextTick(() => {
    //   doLayout();
    // });

    setTimeout(() => {
      doLayout();
    }, 0);
    // 监听浏览器大小变化
    window.onresize = () => {
      return (() => {
        doLayout();
      })();
    };
  });
</script>

<style lang="less" scoped>
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

  .el-table {
    position: relative;
  }

  /deep/ .el-table {
    .process-row::after {
      content: ' ';
      background-color: red;
      width: var(--process-width);
      height: 2px;
      margin-top: calc(var(--row-el-table-height) - 3px);
      position: absolute;
      left: 0;
      z-index: 100;
      transition: width 0.5s ease-in-out;
    }
  }
</style>
