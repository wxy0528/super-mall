<template>
  <div >
      <!-- <ul>
        <li>1僵局</li>
        <li>2僵局</li>
        <li>3僵局</li>
        <li>4僵局</li>
        <li>5僵局</li>
        <li>6僵局</li>
        <li>7僵局</li>
        <li>8僵局</li>
        <li>9僵局</li>
        <li>10僵局</li>
        <li>11僵局</li>
        <li>12僵局</li>
        <li>13僵局</li>
        <li>14僵局</li>
        <li>15僵局</li>
        <li>16僵局</li>
        <li>17僵局</li>
        <li>18僵局</li>
        <li>19僵局</li>
        <li>20僵局</li>
        <li>21僵局</li>
        <li>22僵局</li>
        <li>23僵局</li>
        <li>24僵局</li>
        <li>25僵局</li>
        <li>26僵局</li>
        <li>27僵局</li>
        <li>28僵局</li>
        <li>29僵局</li>
        <li>30僵局</li>
        <li>31僵局</li>
        <li>32僵局</li>
        <li>33僵局</li>
        <li>34僵局</li>
        <li>35僵局</li>
        <li>36僵局</li>
        <li>37僵局</li>
        <li>38僵局</li>
        <li>39僵局</li>
        <li>40僵局</li>
        <li>41僵局</li>
        <li>42僵局</li>
        <li>43僵局</li>
        <li>44僵局</li>
        <li>45僵局</li>
        <li>46僵局</li>
        <li>47僵局</li>
        <li>48僵局</li>
        <li>49僵局</li>
        <li>50僵局</li>
        <li>51僵局</li>
        <li>52僵局</li>
        <li>53僵局</li>
        <li>54僵局</li>
        <li>55僵局</li>
        <li>56僵局</li>
        <li>57僵局</li>
        <li>58僵局</li>
        <li>59僵局</li>
        <li>60僵局</li>
        <li>61僵局</li>
        <li>62僵局</li>
        <li>63僵局</li>
        <li>64僵局</li>
        <li>65僵局</li>
        <li>66僵局</li>
        <li>67僵局</li>
        <li>68僵局</li>
        <li>69僵局</li>
        <li>70僵局</li>
        <li>71僵局</li>
        <li>72僵局</li>
        <li>73僵局</li>
        <li>74僵局</li>
        <li>75僵局</li>
        <li>76僵局</li>
        <li>77僵局</li>
        <li>78僵局</li>
        <li>79僵局</li>
        <li>80僵局</li>
        <li>81僵局</li>
        <li>82僵局</li>
        <li>83僵局</li>
        <li>84僵局</li>
        <li>85僵局</li>
        <li>86僵局</li>
        <li>87僵局</li>
        <li>88僵局</li>
        <li>89僵局</li>
        <li>90僵局</li>
        <li>91僵局</li>
        <li>92僵局</li>
        <li>93僵局</li>
        <li>94僵局</li>
        <li>95僵局</li>
        <li>96僵局</li>
        <li>97僵局</li>
        <li>98僵局</li>
        <li>99僵局</li>
        <li>100僵局</li>
      </ul> -->
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
       list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>

</style>