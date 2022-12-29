<script lang="ts" setup>
  import { ElTag } from 'element-plus';
  import { h } from 'vue';
  import Table from '/@/components/Table/index.vue';
  const tableColumns: Table.Column[] = [
    { label: 'Data', prop: 'date', width: '150' },
    {
      label: 'Delivery Info',
      children: [
        { label: 'Name', prop: 'name', width: '120' },
        {
          label: 'Address Info',
          children: [
            { label: 'State', prop: 'state', width: '120' },
            { label: 'City', prop: 'city', width: '120' },
            { label: 'Address', prop: 'address' },
            {
              label: 'Zip',
              width: '120',
              render: ({ row }) =>
                h(ElTag, { type: 'success' }, () => {
                  return row.zip;
                }),
            },
          ],
        },
      ],
    },
  ];
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ];
</script>
<template>
  <div class="p-5">
    <el-card class="mb-5">
      <template #header>多级表头</template>
      <Table :columns="tableColumns" :table-data="tableData" />
    </el-card>
  </div>
</template>
