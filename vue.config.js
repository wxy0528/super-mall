// export const configureWebpack = {
//   resolve: {
//     //   别名配置
//     alias: {
//       "@": "src",
//       assets: "@/assets",
//       components: "@/components",
//       network: "@/network",
//       views: "@/views"
//     }
//   }
// };

module.exports={
  configureWebpack:{
    resolve:{
      alias:{
      assets: "@/assets",
      components: "@/components",
      network: "@/network",
      views: "@/views"
      }
    }
  }
} 