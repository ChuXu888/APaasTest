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
  const records = await application.data.object("object_2d942775b89").limit(4).select("text_775b89cf0c1", "bigint_5b89cf0c1a8","number_89cf0c1a806", "phone_cf0c1a80676","email_0c1a80676c4","option_1a80676c4e6","decimal_06bf3e6c744","subObject_bf3e6c7445c.text_3e6c7445c86","subObject_bf3e6c7445c.bigint_c7445c86699","subObject_bf3e6c7445c.number_445c866994d","subObject_bf3e6c7445c.option_5c866994d12","subObject_bf3e6c7445c.email_94d123610c3","subObject_bf3e6c7445c.phone_d123610c361","subObject_bf3e6c7445c.decimal_23610c36196","_id").find();
logger.info(`records: ${JSON.stringify(records)}`);
logger.info(`${new Date()} 函数开始执行`);
  // 在这里补充业务代码
}