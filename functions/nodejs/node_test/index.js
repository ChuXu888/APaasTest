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
  // 日志功能
  logger.info(`${new Date()} 函数开始执行`);

    // 获取环境变量
    logger.info(application.globalVar.getVar('globalParam_953e029a063'))
    logger.info(application.globalVar.getVar('globalParam_029a063e323'))
    logger.info(application.globalVar.getVar('globalParam_3e029a063e3'))
    logger.info(application.globalVar.getVar('globalParam_bb953e029a0'))
  
    // 查询对象记录列表
    var object_records = await application.data.object('object_1d4bb262d60').select('_id','text_d60022decc7').find()
    logger.info(object_records)

    logger.info("111")

  

  // 在这里补充业务代码
}