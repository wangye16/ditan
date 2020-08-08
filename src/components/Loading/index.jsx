import React, { useState, useImperativeHandle } from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';

const Loading = React.forwardRef((props, ref) => {
  const [show, update] = useState(false);
  useImperativeHandle(ref, () => ({
    trigger() {
      update(!show);
    },
  }));

  if (!show) {
    return null;
  }
  return (
    <div className={styles.util_loading}>
      <div className={styles.page_loading}>
        <div className={styles.page_loading_ico}></div>
        <div className={styles.page_loading_text}></div>
      </div>
    </div>
  );
});
const getInstance = (() => {
  let instance = React.createRef();
  return () => {
    if (!instance.current) {
      const _instance = <Loading ref={instance} />;
      let contentContainer = document.querySelector('.beacon-h5-component-container');
      if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.classList.add('beacon-h5-component-container');

        document.body.appendChild(contentContainer);
      }
      ReactDom.render(_instance, contentContainer);
      return instance.current;
    }
    return instance.current;
  };
})();
export default () => {
  const instance = getInstance();
  if (!instance) {
    // 如果没有获取到实例，开个微任务，等渲染结束再去拿
    Promise.resolve().then(() => {
      let _instance = getInstance();
      _instance.trigger();
    });
  }
  if (instance) {
    instance.trigger();
  }
};
export const LoadingComponent = () => {
  return (
    <div className={styles.LoadingComponent}>
      <div className={styles.LoadingComponent_loading}>
        <div className={`${styles.page_loading_ico} ${styles.LoadingComponent_icon}`}></div>
      </div>
    </div>
  );
};
