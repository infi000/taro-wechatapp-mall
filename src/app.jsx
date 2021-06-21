import Taro, { Component } from '@tarojs/taro';
import { Provider, connect } from '@tarojs/redux';
import dva from './dva';
import models from './store';
import { set as setGlobalData, get as getGlobalData } from './global_data';
import Index from './pages/index';
import './app.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.log(e);
    // dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();

@connect(({ main }) => ({
  ...main,
}))
class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    Taro.checkSession({
      success(res) {
        //session_key 未过期，并且在本生命周期一直有效
        Taro.getStorage({
          key: 'wxUserInfo',
          success: function(res) {
            const wxUserInfo = res.data;
            dispatch({ type: 'main/updateIsLogIn', payload: true });
            dispatch({ type: 'main/updateWxUserInfo', payload: wxUserInfo });
            dispatch({ type: 'main/updateOpenid', payload: wxUserInfo.openid });
          },
        });
      },
      fail() {
        console.log('session验证未登陆！');
        Taro.removeStorageSync('wxUserInfo');
        Taro.login()
      },
    });
    this.update();  
  }
  // onShareTimeline(res) {
  //   let { detail, user_info, is_myRep, work_pos } = this.state;
  //   return {
  //     // // 这是我创作的第3幅作品，获得了5星评价，快来给我点赞吧
  //     // title: `这是我创作的第3幅作品，获得了5星评价，快来给我点赞吧`,
  //     // // query: `is_fromShare=true&id=${detail.id}`,
  //     // query: {is_fromShare: true, id: '123'},
  //     // imageUrl: 'asdf'
  //   };
  // }
  config = {
    pages: [
   
      // 'pages/PicketQr/index',
      'pages/Main/index',

      // 'pages/ZcyTest/index',
      'pages/PicketResult/index',
      'pages/PicketQr/index',
      'pages/BuyPage/index',
      'pages/Kefu/index',
      'pages/PhotoWall/index',
      'pages/MyVip/index',
      'pages/Address/index',
      'pages/GoodsShow/index',
      'pages/Order/index',
      'pages/SearchRes/index',
      'pages/Collect/index',
      'pages/SortPage/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '糖',
      navigationBarTextStyle: 'black',
    },
    subpackages: [
      {
        root: 'packages',
        name: 'pack2',
        pages: ['pages/demo/index'],
      },
    ],
    'networkTimeout': {
      'request': 10000,
      'downloadFile': 10000,
    },
    'enableShareTimeline': true,
    'enableShareAppMessage': true,
    'enablePullDownRefresh': true,
    'debug': true,
  };
  update = () => {
    if (process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          },
        });
      });
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
