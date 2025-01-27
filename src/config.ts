/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "全部站点",
    sites: [
      {
        title: "个人主页",
        url: "http://un6666.cn/",
        icon: "http://q.qlogo.cn/headimg_dl?dst_uin=1477674946&spec=640&img_type=jpg",
        color: "#0171CD",
      },{
        title: "柚恩分享站",
        url: "http://web.un6666.top/",
        icon: "http://q.qlogo.cn/headimg_dl?dst_uin=1477674946&spec=640&img_type=jpg",
        color: "#0171CD",
      },{
        title: "交流群组",
        url: "https://qm.qq.com/q/ytv3iNPRzW",
        icon: "http://q.qlogo.cn/headimg_dl?dst_uin=1477674946&spec=640&img_type=jpg",
        color: "#0171CD",
      }
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "http://q.qlogo.cn/headimg_dl?dst_uin=1477674946&spec=640&img_type=jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "交流群组",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://qm.qq.com/q/ytv3iNPRzW",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "http://q.qlogo.cn/headimg_dl?dst_uin=1477674946&spec=640&img_type=jpg",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/AHL000",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "甘ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "晨光微露，希望满怀",
"晨曦初照，梦想起航",
"Hello, have a nice day!",
"岁月静好，微笑向阳",
"心有猛虎，细嗅蔷薇",
"近来可好，愿君安康",
"繁星点点，夜色温柔",
"空杯心态，常怀敬畏",
"风雨兼程，一路向前",
"静水流深，智者无言",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "UN6666-Home",
    keywords: "UN6666,个人主页,UN6666主页,UN6666.cn",
    description: "是的没错，你现在看到的是UN6666的个人主页/引导页，快进来看看有没有你在找的东西",
  },
};

export default GLOBAL_CONFIG;
