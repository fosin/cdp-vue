<template>
  <div>
    <data-table
      ref="pagingTable"
      :options="options"
      :list-query="listQuery"
    >
      <template slot="data-columns">
        <el-table-column
          label="人员"
          prop="realName"
          align="center"
        />
        <el-table-column
          label="考试次数"
          prop="tryCount"
          align="center"
        />
        <el-table-column
          label="最高分"
          prop="maxScore"
          align="center"
        />
        <el-table-column
          label="最高评级"
          align="center"
        >
          <template slot-scope="scope">
            <span :style="{ color: rankColor[scope.row.rank] }">{{ getAnanDicValue(rankDics, scope.row.rank) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="最后考试时间"
          prop="updateTime"
          align="center"
        />
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-view" @click="handleExamDetail(scope.row.examId, scope.row.userId)">考试明细</el-button>
          </template>
        </el-table-column>
      </template>
    </data-table>
    <el-dialog title="考试明细" :visible.sync="dialogVisible" width="60%">
      <div class="el-dialog-div">
        <my-paper-list :exam-id="examId" :user-id="userId" show-all="1" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import DataTable from '@/views/exam/components/DataTable'
import MyPaperList from './paper'

export default {
  name: 'ExamManagementExamUsers',
  components: { MyPaperList, DataTable },
  data() {
    return {
      rankDics: [],
      rankColor: {
        0: '#ff0000',
        1: '#00ff00',
        2: '#0000FF',
        3: '#FF00FF',
        4: '#ff8000'
      },
      dialogVisible: false,
      examId: '',
      userId: '',
      listQuery: {
        current: 1,
        size: 10,
        params: {
          examId: '',
          realName: ''
        },
        search: {
          column: 'realName',
          input: '',
          placeholder: '根据用户姓名查找'
        }
      },
      options: {
        // 可批量操作
        multi: false,
        // 列表请求URL
        listUrl: 'gateway/exam/api/user/exam/paging'
      }
    }
  },
  created() {
    this.listQuery.params.examId = this.$route.params.examId
    this.loadDictionaryById(148).then(res => {
      this.rankDics = res.details
    })
  },
  methods: {
    // 开始考试
    handleExamDetail(examId, userId) {
      this.examId = examId
      this.userId = userId
      this.dialogVisible = true
    },
    handlerExamBook(examId) {
      this.$store.dispatch('closeAndPushToView', { name: 'ExamOnlineResultsRecords', params: { examId: examId }})
    }
  }
}
</script>

<style scoped>

  .el-dialog-div{
    height: 60vh;
    overflow: auto;
    padding: 10px;
  }

</style>
