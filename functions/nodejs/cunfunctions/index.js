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
  const records = await application.data.object("object_bab9e09b5ef").limit(4).select("text_09b5efc1021","bigint_b5efc1021e8","number_efc1021e854","phone_c1021e854fe","email_021e854fe25","option_1e854fe250a","decimal_e35bb9d4f4c","subObject_5bb9d4f4cce.text_b9d4f4cce1e","subObject_5bb9d4f4cce.bigint_4f4cce1e5ac","subObject_5bb9d4f4cce.number_4cce1e5ac41","subObject_5bb9d4f4cce.option_ce1e5ac4194","subObject_5bb9d4f4cce.email_c4194ec3c90","subObject_5bb9d4f4cce.phone_194ec3c90ab","subObject_5bb9d4f4cce.decimal_4ec3c90ab0f",
"_id").find();
logger.info(`records: ${JSON.stringify(records)}`);
logger.info(`${new Date()} 函数开始执行2`);
logger.info(`records: ${JSON.stringify(records)}`);

  // 在这里补充业务代码
}