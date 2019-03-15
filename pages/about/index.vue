<template>
  <div class="about">
    <div>
      <video
        id="college-video"
        class="college-video"
        style="object-fit:fill"
        controls
        muted
        poster="http://cdn.gupaoedu.com/video/images/%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A220181116.jpg?tdsourcetag=s_pctim_aiomsg"
        src="http://cdn.gupaoedu.com/video/10.31%E4%BC%81%E4%B8%9A%E5%AE%A3%E4%BC%A0.mp4?tdsourcetag=s_pctim_aiomsg"
      />
    </div>
    <div class="content-wrapper div-padding">
      <div class="category-title">
        <div><span class="left-line" />咕泡学院简介<span class="right-line" /></div>
        <p class="text">
          做技术人的指路明灯，职场生涯的精神导师
        </p>
      </div>
      <div class="content">
        湖南咕泡网络科技有限公司，简称“咕泡学院”，成立于2016年，是一家专业面向中高端IT技术人才以教学培养、职业规划为核心的在线教育公司，旨在帮助学员提升技术技能，加强职场核心竞争力，走出职业困境。目前在腾讯课堂开办了Java架构、人工智能、大数据、软件测试、web前端等直播课程，在线学习人数已突破23万多人次，VIP学员人数已经突破8500多名，荣获“2018腾讯回响中国年度影响力在线教育品牌”、腾讯课堂·创造101火箭机构奖、“腾讯课堂·金课堂奖”等称号。
      </div>
    </div>
    <teacher class="div-padding" />
    <nuxt-link to="teacher-list">
      <div class="open-all">查看全部讲师</div>
    </nuxt-link>
    <div class="news-wrapper">
      <div class="category-title">
        <div><span class="left-line" />咕泡新闻<span class="right-line" /></div>
      </div>
      <div class="new-list">
        <div v-for="(item, index) in currentNewList" :key="index" class="list-item" @click="toNewsDetail(item)">
          <div class="image-container">
            <img :src="item.cover" />
          </div>
          <div class="list-description">
            <div class="list-title">
              {{ item.title | addEllipsis(25) }}
            </div>
          </div>
        </div>
      </div>
      <div class="open-all"  @click="openAllNews" v-show="showAll">展开全部新闻</div>
    </div>
    <div class="div-padding bg-wrapper">
      <honor />
      <school />
      <team />
    </div>
    <partner class="div-padding" />
    <index-footer class="margin-div" />
  </div>
</template>

<script>
import Teacher from './../home/teacher'
import Honor from './../home/honor'
import School from './../home/school'
import Team from './../home/team'
import Partner from './../home/partner'
import IndexFooter from './../home/indexFooter'
export default {
  name: 'About',

  layout: 'home',
  components: {
    Teacher,
    Honor,
    School,
    Team,
    Partner,
    IndexFooter
  },
  data() {
    return {
      currentNewList: [],
      showAll: true,
      newList: [
        {
          cover: require('@/assets/img/about/news/new1.png'),
          title:
            '咕泡学院作为IT线上教育领域的佼佼者应邀出席，并获得“2018年度影响力在线教育品牌”重量级大奖',
          url:
            'https://gper.gupaoedu.com/articleContent?id=484&tdsourcetag=s_pctim_aiomsg'
        },
        {
          cover: require('@/assets/img/about/news/new2.png'),
          title: '咕泡入孵柳枝行动 未来将加速发展',
          url: 'https://gper.gupaoedu.com/articleContent?id=542'
        },
        {
          cover: require('@/assets/img/about/news/new3.png'),
          title: '咕泡荣获“2018麓创大赛总决赛优胜奖',
          url: 'https://gper.gupaoedu.com/articleContent?id=483'
        },
        {
          cover: require('@/assets/img/about/news/new4.png'),
          title: '咕泡学院亮相开源中国千人面基大会',
          url: 'https://gper.gupaoedu.com/articleContent?id=507'
        },
        {
          cover: require('@/assets/img/about/news/new5.png'),
          title: '咕泡出席腾讯课堂101计划教育机构沙龙',
          url: 'https://gper.gupaoedu.com/articleContent?id=485'
        },
        {
          cover: require('@/assets/img/about/news/new6.png'),
          title: ' 咕泡学院全力孵化 长沙互联网IT精英圈 - GPer生态圈',
          url: 'https://gper.gupaoedu.com/articleContent?id=594'
        },
        {
          cover: require('@/assets/img/about/news/new7.png'),
          title: '再次被腾讯授予“创造101火箭机构奖',
          url: 'https://gper.gupaoedu.com/articleContent?id=642'
        },
        {
          cover: require('@/assets/img/about/news/new8.png'),
          title: '最喜欢咕泡年会了，特别是直接发钱！',
          url: 'https://gper.gupaoedu.com/articleContent?id=595'
        }
      ]
    }
  },
  mounted() {
    this.currentNewList = this.newList.slice(0, 3)
  },
  methods: {
    toNewsDetail(item) {
      window.open(item.url)
    },
    openAllNews() {
      this.showAll = false
      this.currentNewList = this.newList
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  .college-video {
    width: 100%;
    height: 376px;
    background: rgba(0, 0, 0, 1);
    border-radius: 8px;
  }
  .content-wrapper {
    margin-top: 39px;
    .content {
      font-size: 28px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 56px;
      margin-top: 38px;
    }
  }
  .open-all {
    margin: 40px 30px 0 30px;
    height: 72px;
    line-height: 72px;
    background: rgba(245, 245, 245, 1);
    border-radius: 6px;
    font-size: 26px;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    text-align: center;
  }
}
.about .div-padding {
  padding: 0 30px;
}
.about .div-padding.bg-wrapper {
  background-color: #f8f8f8;
  padding: 48px 30px;
  margin-top: 48px;
}
.margin-div {
  margin-top: 64px;
}
.category-title {
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
  text-align: center;
}
.category-title .left-line {
  width: 35px;
  height: 4px;
  background: rgba(222, 222, 222, 1);
  margin-right: 16px;
  display: inline-block;
  vertical-align: middle;
}
.category-title .right-line {
  width: 35px;
  height: 4px;
  background: rgba(222, 222, 222, 1);
  margin-left: 16px;
  display: inline-block;
  vertical-align: middle;
}
.category-title .text {
  font-size: 24px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
  margin-top: 18px;
}
.news-wrapper {
  margin-top: 96px;
}
.new-list {
  padding: 0 32px;
  margin-top: 40px;
}
.new-list .list-item {
  display: flex;
  margin-bottom: 40px;
}
.new-list .image-container {
  height: 134px;
  width: 240px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin-right: 32px;
}
.new-list .image-container img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.new-list .list-description {
  min-width: 0;
  flex: 1;
  color: #252525;
}
.new-list .list-description .list-title {
  font-size: 32px;
  color: #252525;
  line-height: 44px;
}
</style>
