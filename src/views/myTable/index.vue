<template>
  <div>
    <div class="tabs hover:text-sky-500">
      <router-link to="/myTable/baseTable"><div class="tab mr-5">基础表格</div></router-link>
      <router-link to="/myTable/renderTable"><div class="tab mr-5">render表格</div></router-link>
      <router-link to="/myTable/paginationTable"><div class="tab mr-5">分页表格</div></router-link>
      <router-link to="/myTable/manyHeaderTable"><div class="tab mr-5">多级表头</div></router-link>
      <router-link to="/myTable/manyHeaderTable"><div class="tab mr-5">无限菜单</div></router-link>
    </div>

    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
  .tabs {
    display: flex;

    .tab {
      // margin: 0 24px 0 0;
      padding: 8px 12px;
      background: pink;
    }
  }
</style>
