<template>
  <b-card>
    <div slot="header" v-html="caption"></div>
    <b-table :dark="dark" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="captions" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" head-variant="dark">
      <template slot="Aksyon" slot-scope="data">
        <div class="btn-group">
          <a class="btn btn-primary" @click="show(data.item)"><i class="icon-eye icons"></i></a>
          <a class="btn btn-success" @click="edit(data.item)"><i class="icon-plus icons"></i></a>
          <a class="btn btn-danger" @click="del(data.item)"><i class="icon-close icons"></i></a>
        </div>
        <!-- <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge> -->
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>


export default {
  name: 'c-table',
  inheritAttrs: false,
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: [Array, Function],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    perPage: {
      type: Number,
      default: 5
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      currentPage: 1,
    }
  },
  computed: {
    items: function() {
      const items =  this.tableData
      return Array.isArray(items) ? items : items()
    },
    totalRows: function () { return this.getRowCount() },
    captions: function() { return this.fields }
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount: function () {
      return this.items.length
    },
    rowClicked (item) {
      this.$emit('row-clicked', item)
    },
    show (item) {
      this.$emit('show-row', item)
    },
    edit (item) {
      this.$emit('edit-row', item)
    },
    del (item) {
      this.$emit('del-row', item)
    },

  }
}
</script>
