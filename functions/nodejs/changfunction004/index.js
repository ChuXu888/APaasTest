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
  logger.info(`${new Date()} "data": {
    "item": {
        "_id": "1792326923652243",
        "_name": {
            "zh_cn": "1792326923652243"
        },
        "bigint_eff76732c62": "67675",
        "bigint_f76732c62e0": "324235",
        "decimal_6bfbbe68b2e": "2346",
        "decimal_be6bfbbe68b": "8765",
        "email_068ed8db890": "tty@qq.com",
        "email_8ed8db890bd": "hjhfgh@sina.com",
        "number_32c62e068ed": 88786,
        "number_6732c62e068": 7875,
        "option_d21ae93b7e8": "option_1ae93b7e8ea",
        "option_d8db890bd75": "option_8db890bd758",
        "phone_2e068ed8db8": {
            "country_code": "CN",
            "dialing_code": "+86",
            "number": "17523458877"
        },`);
  logger.info(`函数执行02`);
  logger.info(`${new Date()} 函数执行03`);
  logger.info(`${new Date()} 函数开始执行,这个日志信息很长很长，需要多长呢？正在测试中，就写吧，使劲多打点字就对了，哈哈哈哈哈，就是加油写，写多少行不知道，反正需要很长就对了，来个json吧，行，那就来一个吧，来了，{
    "code": "0",
    "data": {
        "item": {
            "_id": "1792326923652243",
            "_name": {
                "zh_cn": "1792326923652243"
            },
            "bigint_eff76732c62": "67675",
            "bigint_f76732c62e0": "324235",
            "decimal_6bfbbe68b2e": "2346",
            "decimal_be6bfbbe68b": "8765",
            "email_068ed8db890": "tty@qq.com",
            "email_8ed8db890bd": "hjhfgh@sina.com",
            "number_32c62e068ed": 88786,
            "number_6732c62e068": 7875,
            "option_d21ae93b7e8": "option_1ae93b7e8ea",
            "option_d8db890bd75": "option_8db890bd758",
            "phone_2e068ed8db8": {
                "country_code": "CN",
                "dialing_code": "+86",
                "number": "17523458877"
            },
            "phone_c62e068ed8d": {
                "country_code": "CN",
                "dialing_code": "+86",
                "number": "13323447676"
            },
            "subObject_fbbe68b2e3f.bigint_22926470cb8": [
                "26576"
            ],
            "subObject_fbbe68b2e3f.bigint_4722926470c": [
                "6645"
            ],
            "subObject_fbbe68b2e3f.decimal_78ac36c9380": [
                "68768"
            ],
            "subObject_fbbe68b2e3f.decimal_cb78ac36c93": [
                "5656"
            ],
            "subObject_fbbe68b2e3f.email_85a2e3fecb7": [
                "fdfdf@163.com"
            ],
            "subObject_fbbe68b2e3f.email_a2e3fecb78a": [
                "kjhgy@fy.com"
            ],
            "subObject_fbbe68b2e3f.number_6470cb87948": [
                4656
            ],
            "subObject_fbbe68b2e3f.number_926470cb879": [
                75465
            ],
            "subObject_fbbe68b2e3f.option_70cb879483d": [
                "option_0cb879483d4"
            ],
            "subObject_fbbe68b2e3f.option_9483d485a2e": [
                "option_483d485a2e3"
            ],
            "subObject_fbbe68b2e3f.phone_e3fecb78ac3": [
                {
                    "code": "+86",
                    "key": "+86(CN)",
                    "number": "15534590909"
                }
            ],
            "subObject_fbbe68b2e3f.phone_fecb78ac36c": [
                {
                    "code": "+86",
                    "key": "+86(CN)",
                    "number": "18822121213"
                }
            ],
            "subObject_fbbe68b2e3f.text_8d5ee472292": [
                "djgd地方"
            ],
            "subObject_fbbe68b2e3f.text_ee472292647": [
                "广告费"
            ],
            "text_74a5eff7673": "结果了解",
            "text_a5eff76732c": "看到结果"
        }
    },
    "msg": "success"
}这么长，应该是够了，绝绝子啊，哈哈哈哈，非常棒，给力，还有再打点吗？试一试看吧`);
logger.info(`${new Date()} 函数执行05`);
logger.info(`${new Date()} 函数执行06`);
logger.info(`${new Date()} 函数执行07`);
logger.info(`${new Date()} 函数执行08`);
logger.info(`${new Date()} 函数执行09`);
logger.info(`${new Date()} 函数执行10`);
logger.info(`${new Date()} 函数执行11`);
logger.info(`${new Date()} 函数执行12`);
logger.info(`${new Date()} 函数执行13`);
logger.info(`${new Date()} 函数执行14`);
logger.info(`${new Date()} 函数执行15`);
logger.info(`${new Date()} 函数执行16`);
logger.info(`${new Date()} 函数执行17`);
logger.info(`${new Date()} 函数执行18`);
logger.info(`${new Date()} 函数执行19`);
logger.info(`${new Date()} 函数执行20`);
logger.info(`${new Date()} 函数执行21`);
logger.info(`${new Date()} 函数执行22`);
logger.info(`${new Date()} 函数执行23`);
logger.info(`${new Date()} 函数执行24`);
logger.info(`${new Date()} 函数执行25`);
logger.info(`${new Date()} 函数执行26`);
logger.info(`${new Date()} 函数执行27`);
logger.info(`${new Date()} 函数执行28`);
logger.info(`${new Date()} 函数执行29`);
logger.info(`${new Date()} 函数执行fdgdfkgfjkg,fdgffgds,gdfjgfdlsg,gorere,30`);



  // 在这里补充业务代码
}