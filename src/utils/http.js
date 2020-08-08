/**
 * Created by lunachi on 2018/4/19.
 * http 数据请求
 * 支持：get、post、jsonp
 */

import Axios from 'axios';
import Jsonp from 'jsonp';
import Qs from 'qs';

export const parseUrl = (url = '') => {
  const _query = (url.match(/(\?.*$)/) || [''])[0];
  const _url = url.replace(_query, '');
  let _data = {};
  if (_query) {
    _data = Qs.parse(_query, { ignoreQueryPrefix: true });
  }
  return {
    url: _url,
    query: _data,
  };
};
export const jsonp = (url, data = {}, config = {}, showLoading = false) => {
  return new Promise((resolve, reject) => {
    const _urlObj = parseUrl(url);
    const _data = Object.assign({}, _urlObj.query, data);

    let _url = `${_urlObj.url}${Qs.stringify(_data, { addQueryPrefix: true })}`;
    let _config = Object.assign(
      {
        prefix: 'jp',
        param: 'callbackparam',
        timeout: 3000,
      },
      config,
    );

    showLoading && loading(true);
    Jsonp(_url, _config, function(err, res) {
      showLoading && loading(false);
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
export const get = (url, data = {}, config = {}) => {
  const _urlObj = parseUrl(url);
  const _data = Object.assign({}, _urlObj.query, data);
  const _config = Object.assign(
    {
      withCredentials: true,
      timeout: 3000,
      params: _data,
    },
    config,
  );

  return Axios.get(_urlObj.url, _config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const post = (url, data = {}, config = {}, qs = true) => {
  const _config = Object.assign(
    {
      withCredentials: true,
      timeout: 3000,
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
    },
    config,
  );
  return Axios.post(url, qs ? Qs.stringify(data) : data, _config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};
