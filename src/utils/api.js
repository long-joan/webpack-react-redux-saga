import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sapi.tengyuanit.com/index.php/'
});

export function getData () {
  return instance.get('mall/product_by_cateid/45076');
}
