/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: '',
  
  // 为了避免推送服务器误将脚本列为恶意推送脚本，可设置每分钟脚本最大推送数
  // 每分钟脚本最大推送数，超过此数将会休眠1分钟后再发送剩余消息，不填则默认为5
  // 此项不建议随意修改
  MAX_PUSH_ONE_MINUTE: 5,
  // 配合MAX_PUSH_ONE_MINUTE使用，休眠<SLEEP_TIME>毫秒后再发送剩余消息，不填则默认为65000
  SLEEP_TIME: 65000,
  
  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '10a12be6ea6a41338464b1ed8ce639d3',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '2003', date: '03-22',
        },
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '阳阳', year: '2002', date: '09-20',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2021', date: '05-01',
        },
      ],
 customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-01' },
      ],
    },
    {
      name: '我',
      id: '11a5eaf849994380809a2782dfe94d99',
      useTemplateId: '0003',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '2003', date: '03-22',
        },
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '阳阳', year: '2002', date: '09-20',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2021', date: '05-01',
        },
      ],
 customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-01' },
      ],
    },
  ],
 
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '11a5eaf849994380809a2782dfe94d99',
    }
  ],
      
}

module.exports = USER_CONFIG
