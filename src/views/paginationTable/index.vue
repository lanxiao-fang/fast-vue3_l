<template>
  <div class="p-5">
    <h1 class="mb-5 text-base text-gray-100 bg-red-400 p-2 border-4 border-green-400 rounded-md">
      element-plus table表格二次封装 <span class="ml-6">(此标题样式使用Tailwind Css生成)</span>
    </h1>
    <!-- 带有分页的表格 -->
    <el-card>
      <template #header>
        <span>带有分页的表格</span>
      </template>
      <Table
        :columns="tableDemoColumn"
        :table-data="tableDemoList"
        :options="options"
        @pagination-change="handlePaginationChange"
        @command="handleAction"
      >
        <!-- 使用插槽格式化年龄 -->
        <template #gender="{ row }">
          <span> {{ row.gender ? '男' : '女' }}</span>
        </template>
      </Table>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
  import { tableDemoColumn } from '/@/config/table';
  import { ElMessageBox, ElMessage } from 'element-plus';
  // import { getDemoList } from '@/service/api/table';
  // import Table from '@/components/Table/index.vue'
  // 本项目Table组件自动引入，如复制此代码，需根据路径引入Table组件后使用
  const route = useRoute();
  const router = useRouter();

  interface State {
    tableDemoList: [];
    options: Table.Options;
  }
  const state = reactive<State>({
    tableDemoList: [],
    options: { showPagination: true, height: 600 },
  });
  const params = {
    page: 1,
    pageSize: 10,
  };
  watch(
    () => route.query,
    async (newval) => {
      const { page, pageSize } = newval;
      params.page = Number(page) || params.page;
      params.pageSize = Number(pageSize) || params.pageSize;
      // const { items, pageInfo } = await getDemoList(params);
      // state.tableDemoList = items;
      // state.options.paginationConfig = pageInfo;
    },
    { immediate: true },
  );
  // pageSize或者currentPage改变触发
  const handlePaginationChange = (page: number, pageSize: number) => {
    router.push({
      path: route.path,
      query: {
        page,
        pageSize,
      },
    });
  };
  // 这里的UserInfo类型是api声明文件里定义的类型， 请忽略
  const handleAction = (command: Table.Command, row) => {
    switch (command) {
      case 'edit':
        alert('点击了编辑');
        break;
      case 'delete':
        console.log('row', row);
        ElMessageBox.confirm('确认删除吗？', '提示').then(() => {
          ElMessage(JSON.stringify(row.name));
        });
        break;
      default:
        break;
    }
  };
  const { tableDemoList, options } = toRefs(state);
</script>
<style lang="scss" scoped></style>
