<template>
  <div class="">
    <Common
      :sidebar="false"
      :isComment="false"
    >
      <a-spin
        :spinning="loading"
        tip="Loading..."
      >
        <div class="project">
          <a-row
            :gutter="20"
            type="flex"
            justify="space-between"
          >
            <a-col
              v-for="(item, index) in projects"
              :key="index"
            >
              <project-item :options="item"></project-item>
            </a-col>
          </a-row>
        </div>
      </a-spin>
    </Common>
  </div>
</template>

<script>
  import Common from "@theme/components/Common.vue";
  import { Row, Col, Spin } from "ant-design-vue";
  import "ant-design-vue/lib/row/style/css";
  import "ant-design-vue/lib/col/style/css";
  import "ant-design-vue/lib/spin/style/css";
  import { httpGet } from "./utils/fetch.js";
  import ProjectItem from "./ProjectItem";
  import { filter, orderBy } from "lodash";

  export default {
    name: "Projects",

    components: {
      Common,
      ProjectItem,
      "a-row": Row,
      "a-col": Col,
      "a-spin": Spin
    },

    data() {
      return {
        projects: [],
        loading: true
      };
    },

    mounted() {
      this.getProjects();
    },

    methods: {
      getProjects() {
        this.loading = true;
        httpGet("https://api.github.com/users/vxhly/repos").then(res => {
          this.loading = false;
          // 过滤掉私有的项目，过滤掉 fork 项目
          const projects = filter(res, item => !item.private && !item.fork);

          this.projects = orderBy(
            projects,
            ["stargazers_count", "forks_count", "name", "created_at"],
            ["desc", "desc", "asc", "desc"]
          );
        });
      }
    }
  };
</script>


<style lang="css" scope>
  .project {
    max-width: 1024px;
    min-height: 300px;
    margin: 0 auto;
    top: 3.6rem;
    position: relative;
    margin: 4rem auto;
  }
</style>