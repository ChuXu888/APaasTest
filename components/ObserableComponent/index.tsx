// 自定义组件开发请参考：https://ae.feishu.cn/hc/zh-CN/articles/503630516848
import { createPageErrorEvent } from "@byted-apaas/event-trace";
export interface Props {}

const ObserableComponent = (props: Props): JSX.Element => {
  return (
    <button
      onClick={() => {
        const error = createPageErrorEvent();
        error.setErrorInfo({
          errorCode: "xxxxx",
          errorMsg: "xxx",
        });
        error.report();
      }}
    >
      Report Error
    </button>
  );
};

export default ObserableComponent;
