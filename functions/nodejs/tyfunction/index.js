// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
 module.exports = async function (params, context, logger) {
  const records = await application.data.object("object_cb04c61fcb4").limit(4).select("text_c61fcb46414","_id").find();
  logger.info(`records: ${JSON.stringify(records)}`);
logger.info(`${new Date()} 函数开始执行`);
logger.info(`"身份证号":"431122199909093232"`);


  // 在这里补充业务代码
}