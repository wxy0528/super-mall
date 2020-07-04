<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !==0">
    <div class="comment-title">
      <span class="comment-name">用户评价</span>
      <span class="comment-more">更多</span>
    </div>
    <div class="comment-info">
      <div class="u-info">
        <img :src="commentInfo.user.avatar" alt />
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-content">
        <div class="content">{{commentInfo.content}}</div>
        <p class="content-info">{{commentInfo.created | showDate}}{{commentInfo.style}}</p>
      </div>
    </div>
    <div class="shop-reply" v-if="commentInfo.explain !==null">{{commentInfo.explain}}</div>
    <div class="comment-img" v-if="commentInfo.images !== null">
      <img :src="item" alt v-for="(item,index) in commentInfo.images" :key="index" />
    </div>
  </div>
</template>

<script>
import {formatDate} from 'components/common/utils.js'
export default {
  name: "DetailCommentInfo",
  components: {},
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    showDate(value) {
        // 1.将时间戳转化成Date对象
        const date =new Date(value *1000)
        // 2.将date格式化
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.detail-comment {
  font-size: 16px;
  padding: 0.42rem 0.34rem;
}
.comment-title {
  padding: 0.42rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 0.08rem solid rgba(128, 128, 128, 0.3);
  position: relative;
}

.comment-more {
  position: absolute;
  right: -0.26rem;
  top: 0rem;
}
.comment-more::after {
  content: "";
  background: url("~assets/img/detail/right_arrow.svg") 0 0/1.06rem 1.06rem;
  display: inline-block;
  position: relative;
  top: 0.26rem;
  width: 0.96rem;
  height: 0.96rem;
}

.u-info {
  padding: 0.42rem 0;
  line-height: 1.8rem;
  display: flex;
}
.u-info img {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: 0.04rem solid rgba(128, 128, 128, 0.3);
}
.u-info span {
  margin-left: 0.42rem;
}

.content {
  line-height: 1rem;
  color: #666;
}
.content-info {
  color: #999;
  padding: 0.3rem 0;
  font-size: 16px;
}

.shop-reply {
  border-top: 0.04rem solid rgba(128, 128, 128, 0.4);
  padding: 0.5rem 0;
  color: gray;
  line-height: 0.8rem;
}

.comment-img img {
  margin-right: 0.21rem;
  width: auto;
  height: 4.26rem;
}
</style>