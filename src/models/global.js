// const takeLatest = {
//   type: 'takeLatest',
// };
// const takeEvery = {
//   type: 'takeEvery',
// };

const NAMESPACE = 'global';

export default {
  namespace: NAMESPACE,
  state: {},
  effects: {
    // /**
    //  * 根据sku批量获价格信息 --获取划线价
    //  * @param {*} param0
    //  * @param {*} param1
    //  */
    // getProductPrice: [
    //   function* ({ payload = {} }, { call, put, select, take, all }) {
    //     const { skuIdList = [] } = payload;
    //     const productPriceMap = yield select((_state) => _state[NAMESPACE].productPriceMap);
    //     // 已存在数据不再请求
    //     const _skuIdList = skuIdList.filter((item) => !productPriceMap[item]);
    //     if (!_skuIdList.length) return;
    //     try {
    //       const res = yield call(requestProductPrice, {
    //         data: { body: { skuIdList: _skuIdList } },
    //         autoShowError: false,
    //       });
    //       const baseResult = _skuIdList.reduce((pv, cv) => {
    //         return {
    //           ...pv,
    //           [cv]: [],
    //         };
    //       }, {});
    //       const obj = arry2Map(res?.data, 'youpinSkuId');
    //       // 因为是异步的，所以重新读取
    //       const _productPriceMap = yield select((_state) => _state[NAMESPACE].productPriceMap);
    //       // 保存数据
    //       yield put({
    //         type: 'save',
    //         payload: {
    //           productPriceMap: {
    //             ..._productPriceMap,
    //             ...baseResult,
    //             ...obj,
    //           },
    //         },
    //       });
    //     } catch (ex) {
    //       console.log(ex);
    //     }
    //   },
    //   takeEvery,
    // ],
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
